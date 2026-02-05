import NetworkBackground from '@/components/NetworkBackground';
import StatusBar from '@/components/StatusBar';
import InjectCard from '@/components/InjectCard';
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Network Background */}
      <NetworkBackground />
      
      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 pointer-events-none" style={{
      zIndex: 1
    }} />
      <div className="fixed inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30 pointer-events-none" style={{
      zIndex: 1
    }} />

      {/* Main Content */}
      <div className="relative h-screen py-4 sm:py-8 px-2 sm:px-4 items-center justify-center flex flex-col overflow-hidden" style={{
      zIndex: 2
    }}>
        {/* Status Bar */}
        <div className="mb-4 sm:mb-8">
          <StatusBar />
        </div>

        {/* Main Card */}
        <InjectCard />
      </div>
    </div>;
};
export default Index;