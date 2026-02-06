const StatusBar = () => {
  return (
    <div className="status-bar-overlay absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl px-5 py-3 flex items-center justify-center gap-6 whitespace-nowrap max-[480px]:gap-4 max-[480px]:px-4 max-[480px]:py-2.5 z-20">
      {/* Status */}
      <div className="text-center">
        <p className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase max-[480px]:text-[10px]">
          Status:
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-0.5">
          <span className="w-2 h-2 rounded-full bg-[hsl(var(--status-green))] animate-pulse" />
          <span className="text-[13px] font-bold text-[hsl(var(--status-green))] max-[480px]:text-xs">
            Online
          </span>
        </div>
      </div>

      {/* Last Update */}
      <div className="text-center">
        <p className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase max-[480px]:text-[10px]">
          Last Update:
        </p>
        <p className="text-[13px] font-bold text-primary mt-0.5 max-[480px]:text-xs">
          Jan 29 2026
        </p>
      </div>

      {/* Online Users */}
      <div className="text-center">
        <p className="text-[11px] text-muted-foreground font-semibold tracking-wide uppercase max-[480px]:text-[10px]">
          Online Users:
        </p>
        <p className="text-[13px] font-bold text-primary mt-0.5 max-[480px]:text-xs">
          150
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
