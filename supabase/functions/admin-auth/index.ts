import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface AdminAuthRequest {
  code: string
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseKey)

    if (req.method === 'POST') {
      const { code }: AdminAuthRequest = await req.json()

      console.log('Validating admin code:', code)

      // Validate admin code
      const { data: adminCode, error: codeError } = await supabase
        .from('admin_codes')
        .select('*')
        .eq('code', code)
        .single()

      if (codeError || !adminCode) {
        console.log('Invalid admin code:', codeError)
        return new Response(
          JSON.stringify({ error: 'Invalid admin code' }),
          { 
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      // Check if code is expired
      if (new Date(adminCode.expires_at) < new Date()) {
        console.log('Admin code expired')
        return new Response(
          JSON.stringify({ error: 'Admin code expired' }),
          { 
            status: 401,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      // Mark code as used (optional)
      if (!adminCode.is_used) {
        await supabase
          .from('admin_codes')
          .update({ 
            is_used: true, 
            used_at: new Date().toISOString() 
          })
          .eq('id', adminCode.id)
      }

      console.log('Admin authentication successful')
      
      return new Response(
        JSON.stringify({ 
          success: true,
          message: 'Admin authenticated successfully',
          adminId: adminCode.id
        }),
        { 
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Admin auth error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})