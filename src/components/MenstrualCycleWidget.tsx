import { useEffect, useState } from 'react';

export function MenstrualCycleWidget({ userAccessCode }: { userAccessCode?: string }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // For development, we'll allow the widget origin. In production, verify the origin
      // if (event.origin !== 'https://preview--neomeapp.lovable.app') return;
      
      if (event.data.type === 'WIDGET_REQUEST_ACCESS_CODE') {
        const iframe = document.getElementById('cycle-widget') as HTMLIFrameElement;
        iframe?.contentWindow?.postMessage({
          type: 'WIDGET_RECEIVE_ACCESS_CODE',
          payload: { accessCode: userAccessCode }
        }, '*');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [userAccessCode]);

  const handleIframeLoad = () => {
    // Initialize widget with access code when iframe loads
    const iframe = document.getElementById('cycle-widget') as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({
        type: 'WIDGET_RECEIVE_ACCESS_CODE',
        payload: { accessCode: userAccessCode || 'demo-user' }
      }, '*');
    }
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-[2.2rem] z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      <iframe 
        id="cycle-widget"
        src="https://preview--neomeapp.lovable.app/menstrual-calendar"
        className="w-full h-full border-0 rounded-[2.2rem]"
        title="Menstrual Cycle Widget"
        onLoad={handleIframeLoad}
        sandbox="allow-scripts allow-same-origin allow-forms"
        allow="publickey-credentials-get"
        loading="eager"
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
}