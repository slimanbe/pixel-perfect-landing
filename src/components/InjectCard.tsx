import { useState } from 'react';
import { Download } from 'lucide-react';
import Pokeball from './Pokeball';
import OfferModal from './OfferModal';
import { useOfferSession } from '@/hooks/useOfferSession';

// CONFIGURATION - Replace these URLs with your actual links
const SMARTLINK_URL = 'https://your-smartlink-url.com'; // Your CPA smartlink
const REWARD_URL = 'https://your-download-link.com'; // Final download link

const InjectCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    sessionId,
    createSession,
    isLoading
  } = useOfferSession();
  const handleStartInjecting = async () => {
    const newSessionId = await createSession();
    if (newSessionId) {
      setIsModalOpen(true);
    }
  };
  return <>
      <div className="glass-card rounded-2xl p-8 md:p-12 max-w-lg w-full mx-4">
        <div className="flex flex-col items-center text-center">
          {/* Pokeball */}
          <div className="mb-6">
            <Pokeball />
          </div>

          {/* Title Section */}
          <h2 className="text-foreground text-lg font-display font-medium mb-2"> Size : 2.3 GB</h2>
          
          <h1 className="text-primary text-4xl md:text-5xl font-display font-bold glow-text mb-2">Jump Force </h1>
          
          <p className="text-muted-foreground text-lg mb-4">
            • Tweaked Edition •
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-sm">​</p>

          {/* CTA Button */}
          <button onClick={handleStartInjecting} disabled={isLoading} className="glow-button flex items-center gap-3 px-10 py-4 rounded-lg text-primary-foreground font-display font-bold text-lg uppercase tracking-wider disabled:opacity-50">START INSTALLING<Download className="w-5 h-5" />
            {isLoading ? 'Loading...' : 'Start Injecting'}
          </button>
        </div>
      </div>

      {/* Offer Modal */}
      {sessionId && <OfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sessionId={sessionId} smartlinkUrl={SMARTLINK_URL} rewardUrl={REWARD_URL} />}
    </>;
};
export default InjectCard;