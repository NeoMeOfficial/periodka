import React, { useState, useEffect } from 'react';
import { FloNavigation } from '@/components/FloNavigation';
import { FloFooter } from '@/components/FloFooter';
import { Calendar, Clock, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  // Get articles for selection (exclude current article)
  const getArticlesForSelection = () => {
    return blogPosts.filter(post => post.id !== selectedPost?.id).slice(0, 6); // Show more for mobile swipe
  };

  // Simple mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swiped left - next
        setCurrentIndex(prev => Math.min(prev + 1, getArticlesForSelection().length - 1));
      } else {
        // Swiped right - previous  
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
    
    setIsDragging(false);
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
        <DialogPortal>
          {/* Custom overlay with gradient background */}
          <DialogOverlay 
            className="fixed inset-0 z-50 bg-background/30 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          />
          {/* Custom content */}
          <DialogPrimitive.Content
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] h-[90vh] md:max-h-[90vh] p-0 border-none"
          >
            <div className="bg-background/20 backdrop-blur-md rounded-3xl border border-border/30 shadow-elegant overflow-hidden h-full flex flex-col">
              {/* Content Area - Flex container */}
              <div className="flex-1 flex flex-col min-h-0">
                {selectedPost && (
                  <>
                    {/* Main Content - White Box with Title and Close Button - Scrollable */}
                    <div className="bg-background/80 backdrop-blur-lg rounded-2xl m-3 border border-border/50 shadow-elegant flex-1 flex flex-col relative min-h-0">
                      <button
                        onClick={handleCloseDialog}
                        className="absolute right-4 top-4 p-2 rounded-full bg-background/50 hover:bg-background/70 transition-colors z-10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="p-4 flex-shrink-0">
                        <h1 className="text-2xl font-bold text-foreground pr-12">
                          {selectedPost.title}
                        </h1>
                      </div>
                      <div className="flex-1 overflow-y-auto px-4 pb-4">
                        <div 
                          className="prose prose-lg max-w-none text-foreground"
                          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                        />
                      </div>
                    </div>

                   {/* Article Selection - Fixed at bottom */}
                   <div className="p-6 pt-0 flex-shrink-0">
                     <h3 className="text-sm font-medium text-muted-foreground mb-4">Ďalšie články</h3>
                    
                    {/* Desktop: Grid Layout */}
                    <div className="hidden md:grid grid-cols-3 gap-3">
                      {getArticlesForSelection().map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedPost(post)}
                          className="p-3 bg-background rounded-lg border-2 border-primary/50 hover:border-primary hover:shadow-soft transition-all text-left"
                        >
                          <h4 className="text-xs font-medium text-foreground line-clamp-2 mb-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">
                              {post.read_time}
                            </p>
                            <span className="text-xs font-medium text-primary">
                              Prečitať
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Mobile: Swipeable Carousel */}
                    <div className="md:hidden relative overflow-hidden mx-6">
                      {/* Current article display */}
                      <div className="flex justify-center mb-2">
                        <span className="text-xs text-muted-foreground">
                          {currentIndex + 1} / {getArticlesForSelection().length}
                        </span>
                      </div>
                      
                      {/* Swipeable container */}
                      <div className="relative">
                        <div 
                          className="flex transition-transform duration-300 ease-out"
                          style={{ 
                            transform: `translateX(-${currentIndex * 75}%)`,
                          }}
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          {getArticlesForSelection().map((post, index) => (
                            <div key={post.id} className="w-3/4 flex-shrink-0 pr-4">
                              <button
                                onClick={() => setSelectedPost(post)}
                                className={`w-full h-20 p-4 bg-background rounded-lg border-2 border-primary/50 hover:border-primary hover:shadow-soft transition-all text-left flex items-center ${
                                  index === currentIndex + 1 ? 'opacity-60' : 'opacity-100'
                                }`}
                              >
                                <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">
                                  {post.title}
                                </h4>
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        {/* Fade gradient on the right */}
                        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
                      </div>
                      
                      {/* Swipe indicators */}
                      <div className="flex justify-center mt-3 gap-1">
                        {getArticlesForSelection().map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </div>
  );
}