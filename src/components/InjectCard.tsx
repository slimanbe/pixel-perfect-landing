import { Download } from 'lucide-react';
import Pokeball from './Pokeball';

const InjectCard = () => {
  return (
    <div className="glass-card rounded-2xl p-8 md:p-12 max-w-lg w-full mx-4">
      <div className="flex flex-col items-center text-center">
        {/* Pokeball */}
        <div className="mb-6">
          <Pokeball />
        </div>

        {/* Title Section */}
        <h2 className="text-foreground text-lg font-display font-medium mb-2">
          Inject
        </h2>
        
        <h1 className="text-primary text-4xl md:text-5xl font-display font-bold glow-text mb-2">
          Pokemon Go
        </h1>
        
        <p className="text-muted-foreground text-lg mb-4">
          • Tweaked Edition •
        </p>

        {/* Description */}
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-sm">
          Click on the button below to begin your Inject process.
        </p>

        {/* CTA Button */}
        <button className="glow-button flex items-center gap-3 px-10 py-4 rounded-lg text-primary-foreground font-display font-bold text-lg uppercase tracking-wider">
          <Download className="w-5 h-5" />
          Start Injecting
        </button>
      </div>
    </div>
  );
};

export default InjectCard;
