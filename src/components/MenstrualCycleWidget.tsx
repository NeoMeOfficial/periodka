import { useEffect } from 'react';

export function MenstrualCycleWidget({ userAccessCode }: { userAccessCode?: string }) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // For development, we'll allow the widget origin. In production, verify the origin
      // if (event.origin !== 'https://your-project.lovable.app') return;
      
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
  };

  return (
    <iframe 
      id="cycle-widget"
      src="https://periodkaneome.lovableproject.com/"
      className="w-full h-full border-0 rounded-[2.2rem]"
      title="Menstrual Cycle Widget"
      onLoad={handleIframeLoad}
      sandbox="allow-scripts allow-same-origin allow-forms"
      allow="publickey-credentials-get"
    />
  );
}