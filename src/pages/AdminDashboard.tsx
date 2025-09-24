import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import AdminLogin from '@/components/AdminLogin';
import BlogPostForm from '@/components/BlogPostForm';
import { FloNavigation } from '@/components/FloNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  read_time: string;
  published: boolean;
  created_at: string;
}

export default function AdminDashboard() {
  const [adminCode, setAdminCode] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedCode = localStorage.getItem('admin_code');
    if (storedCode) {
      setAdminCode(storedCode);
    }
  }, []);

  useEffect(() => {
    if (adminCode) {
      fetchPosts();
    }
  }, [adminCode]);

  const fetchPosts = async () => {
    if (!adminCode) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('blog-management', {
        headers: {
          'x-admin-code': adminCode,
        },
      });

      if (error) throw error;
      setPosts(data.data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Chyba',
        description: 'Nepodarilo sa načítať články.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_code');
    setAdminCode(null);
    setPosts([]);
  };

  if (!adminCode) {
    return <AdminLogin onLogin={setAdminCode} />;
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <FloNavigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="brand-text text-primary">Admin</span>
                  <span className="text-foreground"> Dashboard</span>
                </h1>
                <p className="text-muted-foreground">
                  Spravujte blog články a obsah
                </p>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                Odhlásiť sa
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Blog Post Form */}
              <div>
                <BlogPostForm 
                  adminCode={adminCode} 
                  onPostCreated={fetchPosts}
                />
              </div>

              {/* Posts List */}
              <div>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-2xl font-bold text-primary">
                        Existujúce články
                      </CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={fetchPosts}
                        disabled={loading}
                      >
                        {loading ? 'Načítava...' : 'Obnoviť'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {posts.length === 0 ? (
                        <p className="text-muted-foreground text-center py-8">
                          Žiadne články zatiaľ neexistujú.
                        </p>
                      ) : (
                        posts.map((post) => (
                          <div 
                            key={post.id}
                            className="border border-border rounded-lg p-4 space-y-2"
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold text-foreground">
                                {post.title}
                              </h3>
                              <Badge variant={post.published ? "default" : "secondary"}>
                                {post.published ? 'Publikovaný' : 'Konceptľ'}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {post.excerpt}
                            </p>
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                              <span>{post.author}</span>
                              <span>{new Date(post.created_at).toLocaleDateString('sk-SK')}</span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}