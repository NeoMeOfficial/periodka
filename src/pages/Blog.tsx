import React, { useState, useEffect } from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Calendar, Clock, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  read_time: string;
  created_at: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="brand-text text-primary">Periodka</span>
                <span className="text-foreground"> Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Články, tipy a rady o ženskom zdraví, menštruačnom cykle a wellnesse.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Načítavajú sa články...</p>
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Žiadne články zatiaľ neboli publikované.</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant hover:shadow-elevated transition-all cursor-pointer group"
                  >
                    <div className="space-y-4">
                      <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.created_at).toLocaleDateString('sk-SK')}</span>
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.read_time}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Nezmeškajte nové články
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Prihláste sa na odber nášho newslettera a dostávajte najnovšie články priamo do emailu.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Prihlásiť sa
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FloFooter />
    </div>
  );
}