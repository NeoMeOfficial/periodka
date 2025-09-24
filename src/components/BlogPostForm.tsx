import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import RichTextEditor from './RichTextEditor';

interface BlogPostFormProps {
  adminCode: string;
  onPostCreated: () => void;
}

export default function BlogPostForm({ adminCode, onPostCreated }: BlogPostFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    read_time: '5 min čítania',
    published: false,
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.excerpt.trim() || !formData.content.trim()) {
      toast({
        title: 'Chyba',
        description: 'Všetky povinné polia musia byť vyplnené.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('blog-management', {
        body: formData,
        headers: {
          'x-admin-code': adminCode,
        },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: 'Článok vytvorený',
          description: 'Blog článok bol úspešne vytvorený.',
        });
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          author: '',
          read_time: '5 min čítania',
          published: false,
        });
        onPostCreated();
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: 'Chyba',
        description: 'Nepodarilo sa vytvoriť článok.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Nový blog článok
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Názov článku *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Zadajte názov článku"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Popis článku *</Label>
            <Input
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Krátky popis článku"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="content">Obsah článku *</Label>
            <div className="mt-1">
              <RichTextEditor
                value={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
                placeholder="Celý obsah článku"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="author">Autor</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                placeholder="Meno autora"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="read_time">Čas čítania</Label>
              <Input
                id="read_time"
                value={formData.read_time}
                onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                placeholder="napr. 5 min čítania"
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
            />
            <Label htmlFor="published">Publikovať článok</Label>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Vytvára sa...' : 'Vytvoriť článok'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}