const StatusBar = () => {
  return (
    <div className="status-bar inline-flex flex-row items-center gap-2 sm:gap-6 md:gap-8 rounded-full px-3 sm:px-6 py-1.5 sm:py-2">
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[8px] sm:text-xs font-medium uppercase tracking-wider">Status:</span>
        <p className="text-primary-foreground font-semibold text-[10px] sm:text-base">Online</p>
      </div>
      <div className="w-px h-6 sm:h-8 bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[8px] sm:text-xs font-medium uppercase tracking-wider">Last Update:</span>
        <p className="text-primary-foreground font-semibold text-[10px] sm:text-base">Jan 29 2026</p>
      </div>
      <div className="w-px h-6 sm:h-8 bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[8px] sm:text-xs font-medium uppercase tracking-wider">Users:</span>
        <p className="text-primary-foreground font-semibold text-[10px] sm:text-base">150</p>
      </div>
    </div>
  );
};

export default StatusBar;