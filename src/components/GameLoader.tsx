import { useState, useEffect } from 'react';

interface GameLoaderProps {
  onLoadComplete: () => void;
}

const GameLoader = ({ onLoadComplete }: GameLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...');

  const statusMessages = [
    'INITIALIZING SYSTEM...',
    'LOADING ASSETS...',
    'CALIBRATING DISPLAY...',
    'SYNCING DATA...',
    'ESTABLISHING CONNECTION...',
    'READY TO LAUNCH...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update status text based on progress
        const statusIndex = Math.min(
          Math.floor((newProgress / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setStatusText(statusMessages[statusIndex]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 scanlines pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary animate-pulse" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary animate-pulse" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary animate-pulse" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary animate-pulse" />

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo/Title */}
        <div className="relative">
          <h1 className="font-heading text-4xl md:text-6xl tracking-[0.3em] text-primary animate-pulse">
            MSMITH
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Loading bar container */}
        <div className="w-64 md:w-80 relative">
          {/* Outer frame */}
          <div className="hud-border p-1 bg-card/30 backdrop-blur-sm">
            {/* Progress bar background */}
            <div className="relative h-6 bg-background/80 overflow-hidden">
              {/* Animated progress fill */}
              <div
                className="absolute inset-y-0 left-0 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Gradient fill */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-neon-cyan to-primary" />
                
                {/* Animated stripes */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                    animation: 'slide 1s linear infinite',
                  }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/50 blur-sm" />
              </div>

              {/* Progress text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-xs tracking-widest text-foreground drop-shadow-lg">
                  {Math.floor(progress)}%
                </span>
              </div>

              {/* Scan line animation */}
              <div 
                className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  left: `${progress - 5}%`,
                  transition: 'left 0.3s ease-out',
                }}
              />
            </div>
          </div>

          {/* HUD corners */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary" />
        </div>

        {/* Status text */}
        <div className="text-center">
          <p className="font-heading text-xs md:text-sm tracking-[0.2em] text-primary animate-pulse">
            {statusText}
          </p>
        </div>

        {/* Decorative data lines */}
        <div className="flex gap-4 text-[10px] font-mono text-muted-foreground/50">
          <span>SYS.INIT</span>
          <span className="text-primary">●</span>
          <span>MEM.OK</span>
          <span className="text-primary">●</span>
          <span>NET.SYNC</span>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes slide {
          from { transform: translateX(-20px); }
          to { transform: translateX(20px); }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default GameLoader;
