import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BlogPost {
  title: string
  excerpt: string
  content: string
  author: string
  read_time: string
  published: boolean
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

    const adminCode = req.headers.get('x-admin-code')
    if (!adminCode) {
      return new Response(
        JSON.stringify({ error: 'Admin code required' }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validate admin code
    console.log('Validating admin code:', adminCode)
    const { data: validCode, error: codeError } = await supabase
      .from('admin_codes')
      .select('*')
      .eq('code', adminCode)
      .maybeSingle()

    console.log('Admin code validation result:', { validCode, codeError })

    if (codeError || !validCode) {
      console.error('Admin code validation failed:', codeError)
      return new Response(
        JSON.stringify({ error: 'Invalid admin code' }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check if code is expired
    if (new Date(validCode.expires_at) < new Date()) {
      console.error('Admin code expired:', validCode.expires_at)
      return new Response(
        JSON.stringify({ error: 'Admin code expired' }),
        { 
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Admin code validation successful')

    if (req.method === 'POST') {
      const blogPost: BlogPost = await req.json()

      console.log('Creating blog post:', blogPost.title)

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([blogPost])
        .select()
        .single()

      if (error) {
        console.error('Error creating blog post:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to create blog post' }),
          { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(
        JSON.stringify({ success: true, data }),
        { 
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (req.method === 'GET') {
      // Get all blog posts for admin (including unpublished)
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching blog posts:', error)
        return new Response(
          JSON.stringify({ error: 'Failed to fetch blog posts' }),
          { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      return new Response(
        JSON.stringify({ data }),
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
    console.error('Blog management error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})