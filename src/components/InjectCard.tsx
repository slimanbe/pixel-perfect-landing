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
      <div className="glass-card rounded-2xl p-4 sm:p-8 md:p-12 max-w-lg w-full mx-2 sm:mx-4">
        <div className="flex flex-col items-center text-center">
          {/* Pokeball */}
          <div className="mb-3 sm:mb-6 scale-75 sm:scale-100">
            <Pokeball />
          </div>

          {/* Title Section */}
          <h2 className="text-foreground text-sm sm:text-lg font-display font-medium mb-1 sm:mb-2">Size: 2.3 GB</h2>
          
          <h1 className="text-primary text-2xl sm:text-4xl md:text-5xl font-display font-bold glow-text mb-1 sm:mb-2">Jump Force</h1>
          
          <p className="text-muted-foreground text-sm sm:text-lg mb-2 sm:mb-4">
            • Tweaked Edition •
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-4 sm:mb-8 max-w-sm">Click on the button below to begin your Install process.</p>

          {/* CTA Button */}
          <button onClick={handleStartInjecting} disabled={isLoading} className="glow-button flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-primary-foreground font-display font-bold text-sm sm:text-lg uppercase tracking-wider disabled:opacity-50">
            {isLoading ? 'Loading...' : 'START INSTALLING'}
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Offer Modal */}
      {sessionId && <OfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} sessionId={sessionId} smartlinkUrl={SMARTLINK_URL} rewardUrl={REWARD_URL} />}
    </>;
};
export default InjectCard;
