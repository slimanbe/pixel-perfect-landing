const Pokeball = () => {
  return (
    <div className="pokeball-wrap w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] max-[480px]:w-[150px] max-[480px]:h-[150px] mx-auto mb-8 relative">
      <div className="pokeball-glow w-full h-full rounded-full relative overflow-hidden">
        {/* Top half - red */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[hsl(0,80%,55%)] to-[hsl(0,100%,40%)]" />
        {/* Bottom half - white */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-[hsl(0,0%,88%)]" />
        {/* Center band */}
        <div className="absolute top-1/2 left-0 right-0 h-3 -translate-y-1/2 bg-[hsl(220,30%,10%)] z-[5]" />
        {/* Center button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[hsl(220,30%,10%)] rounded-full z-10 flex items-center justify-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white border-2 border-[hsl(0,0%,80%)] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokeball;
