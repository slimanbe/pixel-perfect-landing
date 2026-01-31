import { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  smartlinkUrl: string;
  rewardUrl: string;
}

const OfferModal = ({ isOpen, onClose, sessionId, smartlinkUrl, rewardUrl }: OfferModalProps) => {
  const [offerOpened, setOfferOpened] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Poll for completion status
  useEffect(() => {
    if (!isOpen || !offerOpened || isCompleted) return;

    setIsChecking(true);
    
    const checkInterval = setInterval(async () => {
      const { data, error } = await supabase
        .from('offer_completions')
        .select('completed')
        .eq('session_id', sessionId)
        .single();

      if (!error && data?.completed) {
        setIsCompleted(true);
        setIsChecking(false);
        clearInterval(checkInterval);
        
        // Redirect after short delay
        setTimeout(() => {
          window.location.href = rewardUrl;
        }, 2000);
      }
    }, 3000); // Check every 3 seconds

    return () => clearInterval(checkInterval);
  }, [isOpen, offerOpened, sessionId, rewardUrl, isCompleted]);

  const handleOpenOffer = () => {
    // Add session_id to smartlink for postback tracking
    const urlWithSession = `${smartlinkUrl}${smartlinkUrl.includes('?') ? '&' : '?'}sub1=${sessionId}`;
    window.open(urlWithSession, '_blank');
    setOfferOpened(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative glass-card rounded-2xl p-8 max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          {isCompleted ? (
            <>
              {/* Success State */}
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Offer Completed!
              </h2>
              <p className="text-muted-foreground mb-4">
                Redirecting you to your download...
              </p>
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </>
          ) : !offerOpened ? (
            <>
              {/* Initial State */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <ExternalLink className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Complete an Offer
              </h2>
              <p className="text-muted-foreground mb-6">
                To unlock your download, please complete one quick offer. 
                It only takes a minute!
              </p>
              <button 
                onClick={handleOpenOffer}
                className="glow-button flex items-center gap-3 px-8 py-4 rounded-lg text-primary-foreground font-display font-bold text-lg uppercase tracking-wider"
              >
                <ExternalLink className="w-5 h-5" />
                Open Offer
              </button>
            </>
          ) : (
            <>
              {/* Waiting State */}
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Waiting for Completion
              </h2>
              <p className="text-muted-foreground mb-4">
                Complete the offer in the new tab. Once verified, 
                you'll be automatically redirected to your download.
              </p>
              {isChecking && (
                <p className="text-sm text-primary flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Checking status...
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
