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

      {/* Main Content - Enhanced Menstrual Calendar Widget */}
      <main className="container py-8">
        <div className="w-full max-w-[600px] mx-auto">
          <MenstrualCycleTracker />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;