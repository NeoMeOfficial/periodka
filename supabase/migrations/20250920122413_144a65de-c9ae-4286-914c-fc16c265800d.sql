-- Fix RLS policies to only allow authenticated users (not anonymous)

-- Drop existing policies for periods
DROP POLICY IF EXISTS "Users can view their own periods" ON public.periods;
DROP POLICY IF EXISTS "Users can insert their own periods" ON public.periods;
DROP POLICY IF EXISTS "Users can update their own periods" ON public.periods;
DROP POLICY IF EXISTS "Users can delete their own periods" ON public.periods;

-- Create new policies for periods (authenticated only)
CREATE POLICY "Authenticated users can view their own periods" 
ON public.periods 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert their own periods" 
ON public.periods 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own periods" 
ON public.periods 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can delete their own periods" 
ON public.periods 
FOR DELETE 
TO authenticated
USING (auth.uid() = user_id);

-- Drop existing policies for profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Create new policies for profiles (authenticated only)
CREATE POLICY "Authenticated users can view their own profile" 
ON public.profiles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert their own profile" 
ON public.profiles 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Authenticated users can update their own profile" 
ON public.profiles 
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);