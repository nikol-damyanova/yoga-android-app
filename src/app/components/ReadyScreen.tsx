interface ReadyScreenProps {
  duration: number;
  onStart: () => void;
  onBack: () => void;
}

export default function ReadyScreen({ duration, onStart, onBack }: ReadyScreenProps) {
  const totalSeconds = duration * 60;
  const posesCount = Math.floor(totalSeconds / 50); // 45 sec pose + 5 sec transition

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="max-w-md w-full text-center">
        <h2 className="text-6xl font-semibold text-[#8B4566] mb-6">
          Are You Ready?
        </h2>
        
        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <p className="text-[#A67C8E] text-xl mb-6 font-normal">
            Your {duration}-minute session includes:
          </p>
          <div className="space-y-3 text-[#8B4566]">
            <p className="text-3xl font-semibold">{posesCount} Poses</p>
            <p className="text-lg text-[#A67C8E]">45 seconds each</p>
            <p className="text-lg text-[#A67C8E]">5 second transitions</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-[#D6619B] text-[#FFF5F0] py-5 px-8 rounded-full text-2xl font-medium mb-4 hover:bg-[#C25089] transition-colors"
        >
          Start Session
        </button>

        <button
          onClick={onBack}
          className="w-full bg-transparent text-[#A67C8E] py-3 px-8 rounded-full text-xl font-normal hover:text-[#8B4566] transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}
