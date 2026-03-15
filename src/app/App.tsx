import { useState } from 'react';
import LandingPage from './components/LandingPage';
import SessionSelector from './components/SessionSelector';
import ReadyScreen from './components/ReadyScreen';
import PoseSession from './components/PoseSession';
import CompletionScreen from './components/CompletionScreen';

type Screen = 'landing' | 'session-select' | 'ready' | 'active' | 'complete';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedDuration, setSelectedDuration] = useState<number>(15);

  const handleGetStarted = () => {
    setCurrentScreen('session-select');
  };

  const handleSessionSelect = (duration: number) => {
    setSelectedDuration(duration);
    setCurrentScreen('ready');
  };

  const handleStartSession = () => {
    setCurrentScreen('active');
  };

  const handleSessionComplete = () => {
    setCurrentScreen('complete');
  };

  const handleBackToHome = () => {
    setCurrentScreen('landing');
    setSelectedDuration(15);
  };

  const handleExitSession = () => {
    setCurrentScreen('session-select');
  };

  return (
    <div className="min-h-screen bg-[#FFF5F0]">
      {currentScreen === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      {currentScreen === 'session-select' && (
        <SessionSelector 
          onSelectSession={handleSessionSelect}
          onBack={handleBackToHome}
        />
      )}
      {currentScreen === 'ready' && (
        <ReadyScreen 
          duration={selectedDuration} 
          onStart={handleStartSession}
          onBack={() => setCurrentScreen('session-select')}
        />
      )}
      {currentScreen === 'active' && (
        <PoseSession 
          duration={selectedDuration}
          onComplete={handleSessionComplete}
          onExit={handleExitSession}
        />
      )}
      {currentScreen === 'complete' && (
        <CompletionScreen 
          duration={selectedDuration}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}