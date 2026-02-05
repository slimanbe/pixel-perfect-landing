const StatusBar = () => {
  return (
    <div className="status-bar inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 md:gap-8 rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-2">
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Status:</span>
        <p className="text-primary-foreground font-semibold text-sm sm:text-base">Online</p>
      </div>
      <div className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
      <div className="w-16 h-px sm:hidden bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Last Update:</span>
        <p className="text-primary-foreground font-semibold text-sm sm:text-base">Jan 29 2026</p>
      </div>
      <div className="hidden sm:block w-px h-8 bg-primary-foreground/20" />
      <div className="w-16 h-px sm:hidden bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Online Users:</span>
        <p className="text-primary-foreground font-semibold text-sm sm:text-base">150</p>
      </div>
    </div>
  );
};

export default StatusBar;