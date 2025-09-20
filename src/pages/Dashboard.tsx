import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, LogOut, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import periodkaLogo from '@/assets/periodka-logo.png';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={periodkaLogo} alt="Periodka Logo" className="w-8 h-8 rounded-lg" />
            <div className="text-xl font-bold" style={{ color: '#F4415F' }}>Periodka</div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Vitaj, {user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Odhlásiť sa
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Tvoj zdravotný denníček</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sleduj svoju menštruáciu, zapisuj si poznámky a získaj lepší prehľad o svojom tele
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Začať novú periódu
                </CardTitle>
                <CardDescription>
                  Označ začiatok tvojej menštruácie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Pridať záznam
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Kalendár cyklu
                </CardTitle>
                <CardDescription>
                  Zobraz si svoj cyklus v kalendári
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Otvoriť kalendár
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-500" />
                  Príznaky & Nálada
                </CardTitle>
                <CardDescription>
                  Zaznamenaj ako sa dnes cítiš
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Pridať poznámku
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Posledná aktivita</CardTitle>
              <CardDescription>
                Tvoje najnovšie záznamy a štatistiky
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Zatiaľ nemáš žiadne záznamy</p>
                <p className="text-sm">Začni sledovaním svojej ďalšej periódy</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;