import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminLoginProps {
  onLogin: (adminCode: string) => void;
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('admin-auth', {
        body: { code: code.trim() }
      });

      if (error) throw error;

      if (data.success) {
        localStorage.setItem('admin_code', code.trim());
        onLogin(code.trim());
        toast({
          title: 'Prihlásenie úspešné',
          description: 'Boli ste úspešne prihlásení ako administrátor.',
        });
      }
    } catch (error) {
      console.error('Admin login error:', error);
      toast({
        title: 'Chyba prihlásenia',
        description: 'Neplatný kód alebo kód expiroval.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            Admin prihlásenie
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Zadajte admin kód"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || !code.trim()}
            >
              {loading ? 'Overujem...' : 'Prihlásiť sa'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}