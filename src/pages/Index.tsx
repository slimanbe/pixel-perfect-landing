import NetworkBackground from '@/components/NetworkBackground';
import InjectCard from '@/components/InjectCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_hsl(220_50%_8%)_0%,_hsl(220_50%_3%)_100%)] relative overflow-x-hidden flex items-center justify-center p-5">
      {/* Animated Network Background */}
      <NetworkBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <InjectCard />
      </div>
    </div>
  );
};

export default Index;
