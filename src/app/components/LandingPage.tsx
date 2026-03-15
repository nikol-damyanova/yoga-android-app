import logoImage from '../../assets/10c9583fdeb2f93ecbf3135534603c232cf56417.png';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-16">
      {/* App Name at Top */}
      <div className="pt-12">
        <h1 className="text-6xl font-semibold text-[#8B4566] tracking-wide">True Pose</h1>
      </div>

      {/* Logo in Middle */}
      <div className="flex-1 flex items-center justify-center">
        <img 
          src={logoImage} 
          alt="True Pose Logo" 
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Get Started Button at Bottom */}
      <div className="pb-12 w-full max-w-sm">
        <button
          onClick={onGetStarted}
          className="w-full bg-[#D6619B] text-[#FFF5F0] py-5 px-8 rounded-full text-2xl font-medium tracking-wide hover:bg-[#C25089] transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
