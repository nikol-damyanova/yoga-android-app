import { useState, useEffect } from 'react';
import { Clock, Pause, Play, SkipBack, SkipForward, X } from 'lucide-react';
import { yogaPoses, YogaPose } from '../data/poses';

interface PoseSessionProps {
  duration: number;
  onComplete: () => void;
  onExit: () => void;
}

// Fisher-Yates shuffle algorithm to randomize poses
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Generate session poses with proper pairing
function generateSessionPoses(totalPoseSlots: number): YogaPose[] {
  // Separate single poses from paired poses
  const singlePoses = yogaPoses.filter(pose => !pose.pairedWith);
  const pairedPoses = yogaPoses.filter(pose => pose.pairedWith);
  
  // For paired poses, only take one side of each pair
  const uniquePairs: YogaPose[] = [];
  const seenPairs = new Set<string>();
  
  pairedPoses.forEach(pose => {
    const pairKey = [pose.name, pose.pairedWith].sort().join('|');
    if (!seenPairs.has(pairKey)) {
      seenPairs.add(pairKey);
      uniquePairs.push(pose);
    }
  });
  
  // Shuffle both sets
  const shuffledSingles = shuffleArray(singlePoses);
  const shuffledPairs = shuffleArray(uniquePairs);
  
  // Build the session
  const session: YogaPose[] = [];
  let singleIndex = 0;
  let pairIndex = 0;
  
  while (session.length < totalPoseSlots) {
    // Randomly decide whether to add a single pose or a paired pose
    // But check if we have enough slots for a pair (needs 2 slots)
    const needsSlots = totalPoseSlots - session.length;
    const canAddPair = needsSlots >= 2 && pairIndex < shuffledPairs.length;
    const canAddSingle = singleIndex < shuffledSingles.length;
    
    if (!canAddPair && !canAddSingle) {
      // No more poses available, cycle through what we have
      if (singleIndex >= shuffledSingles.length) singleIndex = 0;
      if (pairIndex >= shuffledPairs.length) pairIndex = 0;
    }
    
    // Decide randomly, but prefer pairs if we have room
    const addPair = canAddPair && (Math.random() > 0.5 || !canAddSingle);
    
    if (addPair) {
      // Add both sides of the pair
      const firstSide = shuffledPairs[pairIndex];
      const secondSide = yogaPoses.find(p => p.name === firstSide.pairedWith)!;
      session.push(firstSide, secondSide);
      pairIndex++;
    } else if (canAddSingle) {
      // Add a single pose
      session.push(shuffledSingles[singleIndex]);
      singleIndex++;
    }
  }
  
  // Trim to exact length if we went over
  return session.slice(0, totalPoseSlots);
}

export default function PoseSession({ duration, onComplete, onExit }: PoseSessionProps) {
  const totalSeconds = duration * 60;
  const totalPoses = Math.floor(totalSeconds / 50);
  
  const [currentPoseIndex, setCurrentPoseIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(45); // Start with pose time
  const [isPaused, setIsPaused] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sessionPoses] = useState(() => generateSessionPoses(totalPoses));

  const currentPose = sessionPoses[currentPoseIndex];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          if (!isTransition) {
            // Check if this is the last pose
            if (currentPoseIndex >= totalPoses - 1) {
              // Last pose complete, go directly to completion screen
              onComplete();
              return 0;
            }
            // Pose complete, start transition
            setIsTransition(true);
            return 5;
          } else {
            // Transition complete, move to next pose
            setIsTransition(false);
            setCurrentPoseIndex((prev) => prev + 1);
            return 45;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isTransition, currentPoseIndex, totalPoses, onComplete]);

  const handlePrevious = () => {
    if (currentPoseIndex > 0) {
      setCurrentPoseIndex((prev) => prev - 1);
      setTimeRemaining(45);
      setIsTransition(false);
      setIsPaused(false);
    }
  };

  const handleNext = () => {
    if (currentPoseIndex < totalPoses - 1) {
      setCurrentPoseIndex((prev) => prev + 1);
      setTimeRemaining(45);
      setIsTransition(false);
      setIsPaused(false);
    }
  };

  const handleSkipToEnd = () => {
    // Skip to end of current pose/transition
    if (!isTransition) {
      // Currently in a pose - check if it's the last pose
      if (currentPoseIndex >= totalPoses - 1) {
        // Last pose - go directly to completion
        onComplete();
      } else {
        // Start transition to next pose
        setIsTransition(true);
        setTimeRemaining(5);
        setIsPaused(false);
      }
    } else {
      // Currently in transition - skip to next pose
      setIsTransition(false);
      setCurrentPoseIndex((prev) => prev + 1);
      setTimeRemaining(45);
      setIsPaused(false);
    }
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit this session?')) {
      onExit();
    }
  };

  const handleProgressBarInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    // Only allow dragging during pose (not transition)
    if (isTransition) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const clickPosition = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickPosition / rect.width));
    
    // Calculate new time remaining (45 seconds * (1 - percentage))
    const newTimeRemaining = Math.ceil(45 * (1 - percentage));
    
    // If dragged to the very end (0 seconds), trigger pose completion
    if (newTimeRemaining <= 0) {
      if (currentPoseIndex >= totalPoses - 1) {
        onComplete();
      } else {
        setIsTransition(true);
        setTimeRemaining(5);
        setIsPaused(false);
      }
    } else {
      setTimeRemaining(newTimeRemaining);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTransition) return;
    setIsDragging(true);
    handleProgressBarInteraction(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && !isTransition) {
      handleProgressBarInteraction(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isTransition) return;
    setIsDragging(true);
    handleProgressBarInteraction(e);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && !isTransition) {
      handleProgressBarInteraction(e);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate pose progress (only during pose, not transition)
  const poseProgress = isTransition ? 0 : ((45 - timeRemaining) / 45) * 100;

  return (
    <div className="min-h-screen flex flex-col px-6 py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm">
          <Clock className="w-6 h-6 text-[#D6619B]" />
          <span className="text-[#8B4566] font-semibold text-xl">
            {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
          </span>
        </div>
        
        <button
          onClick={handleExit}
          className="bg-white p-2 rounded-full shadow-sm hover:bg-[#FCE9F0] transition-colors"
        >
          <X className="w-6 h-6 text-[#A67C8E]" />
        </button>
      </div>

      {/* Progress Bar */}
      <div 
        className={`w-full bg-white rounded-full h-2 mb-8 overflow-hidden shadow-sm ${!isTransition ? 'cursor-pointer' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="bg-[#D6619B] h-full transition-all duration-300"
          style={{ width: `${poseProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {isTransition ? (
          <div className="text-center">
            <p className="text-4xl font-semibold text-[#8B4566] mb-4">Next Pose</p>
            <p className="text-[#A67C8E] text-2xl font-normal">Get Ready...</p>
            <p className="text-6xl font-semibold text-[#D6619B] mt-6">{timeRemaining}</p>
          </div>
        ) : (
          <>
            {/* Pose Illustration */}
            <div className="mb-8">
              {currentPose.illustration}
            </div>

            {/* Pose Info */}
            <div className="text-center max-w-md">
              <h3 className="text-4xl font-semibold text-[#8B4566] mb-4">
                {currentPose.name}
              </h3>
              <p className="text-[#A67C8E] text-xl font-normal mb-2">
                {currentPose.description}
              </p>
              <p className="text-lg text-[#B89AA8] font-medium">
                Pose {currentPoseIndex + 1} of {totalPoses}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentPoseIndex === 0}
          className="bg-white p-4 rounded-full shadow-sm hover:bg-[#FCE9F0] transition-colors disabled:opacity-50 disabled:hover:bg-white"
        >
          <SkipBack className="w-6 h-6 text-[#8B4566]" />
        </button>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="bg-[#D6619B] p-6 rounded-full shadow-lg hover:bg-[#C25089] transition-colors"
        >
          {isPaused ? (
            <Play className="w-8 h-8 text-[#FFF5F0]" fill="currentColor" />
          ) : (
            <Pause className="w-8 h-8 text-[#FFF5F0]" fill="currentColor" />
          )}
        </button>

        <button
          onClick={handleNext}
          disabled={currentPoseIndex >= totalPoses - 1}
          className="bg-white p-4 rounded-full shadow-sm hover:bg-[#FCE9F0] transition-colors disabled:opacity-50 disabled:hover:bg-white"
        >
          <SkipForward className="w-6 h-6 text-[#8B4566]" />
        </button>
      </div>
    </div>
  );
}