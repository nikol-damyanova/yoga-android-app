interface SessionSelectorProps {
  onSelectSession: (duration: number) => void;
  onBack: () => void;
}

const sessionDurations = [15, 20, 25, 30, 45];

export default function SessionSelector({ onSelectSession, onBack }: SessionSelectorProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        <h2 className="text-5xl font-semibold text-[#8B4566] text-center mb-4">
          Choose Session Length
        </h2>
        <p className="text-[#A67C8E] text-center mb-12 font-normal text-xl">
          Select how long you'd like to practice today
        </p>

        <div className="space-y-4 w-full">
          {sessionDurations.map((duration) => (
            <button
              key={duration}
              onClick={() => onSelectSession(duration)}
              className="w-full bg-white border-2 border-[#F5D5E0] text-[#8B4566] py-6 px-8 rounded-2xl text-2xl font-medium hover:bg-[#FCE9F0] hover:border-[#D6619B] transition-all"
            >
              {duration} Minutes
            </button>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-full bg-transparent text-[#A67C8E] py-3 px-8 rounded-full text-xl font-normal hover:text-[#8B4566] transition-colors mt-4"
        >
          Back
        </button>
      </div>
    </div>
  );
}