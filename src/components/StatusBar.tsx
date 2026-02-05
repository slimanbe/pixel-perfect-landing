import { Circle, Users, Clock } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
        <Circle className="w-2 h-2 fill-primary text-primary animate-pulse" />
        <span className="text-primary text-xs sm:text-sm font-medium">Online</span>
      </div>

      {/* Last Update Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
        <Clock className="w-3 h-3 text-accent" />
        <span className="text-foreground/80 text-xs sm:text-sm font-medium">Jan 29 2026</span>
      </div>

      {/* Users Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
        <Users className="w-3 h-3 text-accent" />
        <span className="text-foreground/80 text-xs sm:text-sm font-medium">150 users</span>
      </div>
    </div>
  );
};

export default StatusBar;