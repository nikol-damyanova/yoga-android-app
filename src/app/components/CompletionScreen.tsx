import { Sparkles } from 'lucide-react';

interface CompletionScreenProps {
  duration: number;
  onBackToHome: () => void;
}

export default function CompletionScreen({ duration, onBackToHome }: CompletionScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="bg-[#FCE9F0] p-6 rounded-full">
            <Sparkles className="w-16 h-16 text-[#D6619B]" />
          </div>
        </div>

        <h2 className="text-6xl font-semibold text-[#8B4566] mb-4">
          Well Done!
        </h2>
        
        <p className="text-[#A67C8E] text-2xl mb-8 font-normal">
          You've completed your {duration}-minute yoga session
        </p>

        <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm">
          <p className="text-[#8B4566] text-xl font-normal mb-4">
            "The pose begins when you want to leave it."
          </p>
          <p className="text-[#B89AA8] text-lg">- Ancient Yoga Wisdom</p>
        </div>

        <button
          onClick={onBackToHome}
          className="w-full bg-[#D6619B] text-[#FFF5F0] py-5 px-8 rounded-full text-2xl font-medium hover:bg-[#C25089] transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
