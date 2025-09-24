-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '5 min čítania',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published BOOLEAN NOT NULL DEFAULT false
);

-- Create admin_codes table for admin authentication
CREATE TABLE public.admin_codes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code VARCHAR NOT NULL UNIQUE,
  is_used BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  used_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (now() + interval '7 days')
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_codes ENABLE ROW LEVEL SECURITY;

-- Blog posts are viewable by everyone
CREATE POLICY "Blog posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Only allow access to admin codes for validation (no user access needed)
CREATE POLICY "Admin codes validation only" 
ON public.admin_codes 
FOR SELECT 
USING (false);

-- Create trigger for automatic timestamp updates on blog posts
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, excerpt, author, read_time, published, content) VALUES
('Ako sledovať menštruačný cyklus efektívne', 'Praktické tipy pre začínajúce používateľky aplikácie Periodka.', 'Dr. Anna Nováková', '5 min čítania', true, 'Sledovanie menštruačného cyklu je dôležitou súčasťou starostlivosti o ženskú zdravie...'),
('Výživa počas menštruácie: Čo jesť a čomu sa vyhnúť', 'Komplexný sprievodca stravovaním počas rôznych fáz cyklu.', 'Mgr. Petra Kováčová', '8 min čítania', true, 'Správna výživa počas menštruácie môže značne ovplyvniť vaše pohodlie...'),
('PMS a ako si s ním poradiť prirodzene', 'Overené metódy na zmierňovanie premenštruačného syndrómu.', 'Dr. Anna Nováková', '6 min čítania', true, 'Premenštruačný syndróm postihuje mnoho žien...'),
('Cvičenie počas menštruácie: Mýty a fakty', 'Pravda o tom, či by ste mali cvičiť počas periody.', 'Mgr. Jana Svobodová', '4 min čítania', true, 'Existuje množstvo mýtov o cvičení počas menštruácie...');

-- Generate sample admin code
INSERT INTO public.admin_codes (code) VALUES ('ADMIN-2025-DEMO');