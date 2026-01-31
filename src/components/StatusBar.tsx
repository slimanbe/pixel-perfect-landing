const StatusBar = () => {
  return <div className="status-bar inline-flex items-center gap-8 rounded-full my-0 py-0 pl-0 px-0">
      <div className="text-center">
        <span className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">Status:</span>
        <p className="text-primary-foreground font-semibold">Online</p>
      </div>
      <div className="w-px h-8 bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">Last Update:</span>
        <p className="text-primary-foreground font-semibold">Jan 29 2026</p>
      </div>
      <div className="w-px h-8 bg-primary-foreground/20" />
      <div className="text-center">
        <span className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">Online Users:</span>
        <p className="text-primary-foreground font-semibold">150</p>
      </div>
    </div>;
};
export default StatusBar;