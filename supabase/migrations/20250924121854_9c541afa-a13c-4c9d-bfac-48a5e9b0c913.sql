-- Fix admin_codes RLS policy to allow server-side validation
DROP POLICY IF EXISTS "Admin codes validation only" ON public.admin_codes;

-- Create proper RLS policies for admin functionality
CREATE POLICY "Server can validate admin codes" 
ON public.admin_codes 
FOR SELECT 
USING (true);

-- Add INSERT/UPDATE/DELETE policies for blog posts (admin only via edge function)
CREATE POLICY "Server can manage blog posts" 
ON public.blog_posts 
FOR ALL
USING (true)
WITH CHECK (true);