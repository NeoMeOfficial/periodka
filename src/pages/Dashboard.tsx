import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import periodkaLogo from '@/assets/periodka-logo.png';
import { MenstrualCycleTracker } from '@/features/cycle/MenstrualCycleTracker';

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

          {/* Menstrual Cycle Tracker */}
          <div className="flex justify-center">
            <MenstrualCycleTracker />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;