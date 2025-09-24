import React, { useState, useEffect } from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Calendar, Clock, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  read_time: string;
  created_at: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, content, author, read_time, created_at')
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

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPost(null);
  };

  const getCurrentPostIndex = () => {
    if (!selectedPost) return -1;
    return blogPosts.findIndex(post => post.id === selectedPost.id);
  };

  const goToNextPost = () => {
    const currentIndex = getCurrentPostIndex();
    const nextIndex = (currentIndex + 1) % blogPosts.length;
    setSelectedPost(blogPosts[nextIndex]);
  };

  const goToPrevPost = () => {
    const currentIndex = getCurrentPostIndex();
    const prevIndex = currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1;
    setSelectedPost(blogPosts[prevIndex]);
  };

  const getNextPost = () => {
    const currentIndex = getCurrentPostIndex();
    return currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : blogPosts[0];
  };

  return (
    <div className="min-h-screen" style={{background: 'var(--gradient-soft)'}}>
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

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Načítavajú sa články...</p>
                </div>
              ) : blogPosts.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">Žiadne články zatiaľ neboli publikované.</p>
                </div>
              ) : (
                blogPosts.map((post) => (
                  <article 
                    key={post.id}
                    onClick={() => handlePostClick(post)}
                    className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-elegant hover:shadow-elevated transition-all cursor-pointer group hover:scale-105 aspect-[4/5] flex flex-col"
                  >
                    <div className="flex-1 space-y-4">
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="space-y-2 text-xs text-muted-foreground mt-auto">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.created_at).toLocaleDateString('sk-SK')}</span>
                        </div>
                        {post.author && (
                          <div className="flex items-center gap-2">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
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

      {/* Blog Post Reading Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none">
          <div className="bg-background/20 backdrop-blur-md rounded-3xl border border-border/30 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="relative p-6 border-b border-border/30">
              <button
                onClick={handleCloseDialog}
                className="absolute right-6 top-6 p-2 rounded-full bg-background/50 hover:bg-background/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {selectedPost && (
                <div className="pr-16">
                  <h1 className="text-2xl font-bold text-foreground mb-3">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPost.created_at).toLocaleDateString('sk-SK')}</span>
                    </div>
                    {selectedPost.author && (
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{selectedPost.author}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.read_time}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="relative">
              {selectedPost && (
                <>
                  {/* Main Content - White Box */}
                  <div className="bg-background rounded-2xl m-6 p-8 shadow-inner max-h-[60vh] overflow-y-auto">
                    <div 
                      className="prose prose-lg max-w-none text-foreground"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />
                  </div>

                  {/* Navigation */}
                  <div className="p-6 pt-0 flex items-center justify-between">
                    {/* Previous Article */}
                    <button
                      onClick={goToPrevPost}
                      className="flex items-center gap-3 p-4 bg-background/30 backdrop-blur-sm rounded-xl border border-border/30 hover:bg-background/40 transition-colors group"
                    >
                      <ChevronLeft className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground">Predchádzajúci</span>
                    </button>

                    {/* Next Article Preview */}
                    <button
                      onClick={goToNextPost}
                      className="flex items-center gap-3 p-4 bg-background/30 backdrop-blur-sm rounded-xl border border-border/30 hover:bg-background/40 transition-colors group max-w-xs"
                    >
                      <div className="flex-1 text-left">
                        <div className="text-xs text-muted-foreground mb-1">Ďalší článok</div>
                        <div className="text-sm font-medium text-foreground line-clamp-2">
                          {getNextPost()?.title}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}