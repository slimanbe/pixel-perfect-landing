import { useState } from 'react';
import { Download } from 'lucide-react';
import Pokeball from './Pokeball';
import StatusBar from './StatusBar';
import OfferModal from './OfferModal';
import { useOfferSession } from '@/hooks/useOfferSession';

// CONFIGURATION - Replace these URLs with your actual links
const SMARTLINK_URL = 'https://your-smartlink-url.com'; // Your CPA smartlink
const REWARD_URL = 'https://your-download-link.com'; // Final download link

const InjectCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { sessionId, createSession, isLoading } = useOfferSession();

  const handleStartInjecting = async () => {
    const newSessionId = await createSession();
    if (newSessionId) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="relative w-full max-w-[480px]">
        {/* Status Bar (overlaps top of card) */}
        <StatusBar />

        {/* Main Card */}
        <div className="main-card px-5 pt-[60px] pb-10 sm:px-8 sm:pt-[60px] sm:pb-10 text-center relative">
          {/* Pokeball */}
          <Pokeball />

          {/* Content */}
          <div className="mt-5">
            <h2 className="fade-up-1 text-muted-foreground text-lg font-display font-semibold tracking-[3px] uppercase">
              Inject
            </h2>

            <h1 className="fade-up-2 text-primary text-4xl sm:text-[48px] font-display font-extrabold glow-text mt-2.5 mb-2 leading-tight tracking-tight max-[480px]:text-[38px]">
              Pokemon Go
            </h1>

            <p className="fade-up-3 text-muted-foreground text-base font-medium tracking-[2px]">
              • Tweaked Edition •
            </p>

            <p className="fade-up-4 text-muted-foreground/70 text-[15px] mt-5 leading-relaxed max-w-[280px] mx-auto">
              Click on the button below to begin your Installing process.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleStartInjecting}
              disabled={isLoading}
              className="cta-pill inline-flex items-center justify-center gap-2.5 mt-8 px-10 py-4 rounded-full font-display font-bold text-base uppercase tracking-[2px] disabled:opacity-50 max-[480px]:px-8 max-[480px]:py-3.5 max-[480px]:text-sm"
            >
              <Download className="w-5 h-5" />
              {isLoading ? 'Loading...' : 'START INJECTING'}
            </button>
          </div>
        </div>
      </div>

      {/* Offer Modal */}
      {sessionId && (
        <OfferModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          sessionId={sessionId}
          smartlinkUrl={SMARTLINK_URL}
          rewardUrl={REWARD_URL}
        />
      )}
    </>
  );
};

export default InjectCard;
