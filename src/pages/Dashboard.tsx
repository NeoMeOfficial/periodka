import React, { useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import periodkaLogo from '@/assets/periodka-logo.png';
import { MenstrualCycleTracker } from '@/features/cycle/MenstrualCycleTracker';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  // Generate or get user's access code (using user ID as access code for now)
  const userAccessCode = user?.id || 'demo-user';

  useEffect(() => {
    // Listen for widget requests
    const handleMessage = (event: MessageEvent) => {
      // For development, we'll allow any origin. In production, verify the origin
      // if (event.origin !== 'https://your-widget-domain.com') return;
      
      const { type } = event.data;
      
      switch (type) {
        case 'WIDGET_REQUEST_ACCESS_CODE':
          // Send user's access code to widget
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
              type: 'WIDGET_RECEIVE_ACCESS_CODE',
              payload: { accessCode: userAccessCode }
            }, '*');
          }
          break;
          
        case 'WIDGET_ACCESS_CODE_UPDATED':
          // Handle access code updates from widget
          const newCode = event.data.payload.accessCode;
          console.log('Widget updated access code:', newCode);
          // You can implement updateUserHabitCode function here if needed
          break;
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [userAccessCode]);

  const handleIframeLoad = () => {
    // Initialize widget with access code when iframe loads
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'WIDGET_RECEIVE_ACCESS_CODE',
        payload: { accessCode: userAccessCode }
      }, '*');
    }
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
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Vitaj, {user.email}
                </span>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Odhlásiť sa
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={handleLogin}>
                <UserPlus className="w-4 h-4 mr-2" />
                Prihlásiť sa
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Menstrual Calendar Widget */}
          <div className="w-full max-w-[600px]">
            <MenstrualCycleTracker />
          </div>
          
          {/* Embedded Widget */}
          <div className="w-full">
            <div className="bg-card rounded-lg border shadow-sm p-4">
              <h3 className="text-lg font-semibold mb-4">Habit Tracker Widget</h3>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  ref={iframeRef}
                  id="habit-widget"
                  src="https://periodkaneome.lovableproject.com/"
                  className="w-full h-full border-0"
                  title="Habit Tracker Widget"
                  onLoad={handleIframeLoad}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;