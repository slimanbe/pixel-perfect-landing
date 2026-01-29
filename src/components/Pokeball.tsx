const Pokeball = () => {
  return (
    <div className="pokeball-glow relative w-48 h-48">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Outer circle with gradient border */}
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(190, 100%, 40%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(190, 100%, 50%)" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff4444" />
            <stop offset="100%" stopColor="#cc0000" />
          </linearGradient>
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0e0e0" />
          </linearGradient>
        </defs>
        
        {/* Outer decorative ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#borderGradient)" strokeWidth="3" />
        
        {/* Main ball background */}
        <circle cx="100" cy="100" r="85" fill="#1a1a2e" />
        
        {/* Red top half */}
        <path d="M 15 100 A 85 85 0 0 1 185 100 L 185 100 L 15 100" fill="url(#redGradient)" />
        
        {/* White bottom half */}
        <path d="M 15 100 A 85 85 0 0 0 185 100 L 185 100 L 15 100" fill="url(#whiteGradient)" />
        
        {/* Center band */}
        <rect x="15" y="94" width="170" height="12" fill="#1a1a2e" />
        
        {/* Center button outer ring */}
        <circle cx="100" cy="100" r="24" fill="#1a1a2e" stroke="#333" strokeWidth="4" />
        
        {/* Center button inner */}
        <circle cx="100" cy="100" r="14" fill="#ffffff" />
        <circle cx="100" cy="100" r="8" fill="#f0f0f0" stroke="#ccc" strokeWidth="1" />
        
        {/* Shine effect */}
        <ellipse cx="70" cy="65" rx="20" ry="10" fill="rgba(255,255,255,0.3)" transform="rotate(-30 70 65)" />
      </svg>
    </div>
  );
};

export default Pokeball;
