import { useEffect, useState } from 'react';
import { ChevronDown, Crosshair, Gamepad2 } from 'lucide-react';
import Particles from '../Particles';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const fullText = 'DEVELOPER | GAMER | BUILDER';

  useEffect(() => {
    setIsLoaded(true);
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <Particles />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-32 bg-gradient-to-b from-primary/5 to-transparent animate-scan" />
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-24 left-8 hidden md:block">
        <div className="flex items-center gap-2 text-muted-foreground text-xs font-heading">
          <Crosshair size={14} className="text-primary" />
          <span>SYSTEM ONLINE</span>
        </div>
        <div className="mt-2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent" />
      </div>

      <div className="absolute top-24 right-8 hidden md:block text-right">
        <div className="flex items-center justify-end gap-2 text-muted-foreground text-xs font-heading">
          <span>STATUS: READY</span>
          <div className="w-2 h-2 bg-neon-green rounded-full animate-glow-pulse" />
        </div>
        <div className="mt-2 w-32 h-0.5 bg-gradient-to-l from-neon-green to-transparent ml-auto" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Press Start Animation */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/50 bg-primary/5 rounded-sm">
            <Gamepad2 size={16} className="text-primary" />
            <span className="font-heading text-xs tracking-widest text-primary">
              PLAYER INITIALIZED
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="relative inline-block glitch-text neon-text" data-text="MSMITH">
            MSMITH
          </span>
        </h1>

        {/* Typing Subtitle */}
        <div
          className={`h-8 mb-8 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-heading text-lg md:text-xl tracking-[0.3em] text-muted-foreground">
            {displayText}
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </p>
        </div>

        {/* Bio Line */}
        <p
          className={`max-w-xl mx-auto text-muted-foreground mb-12 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Crafting digital experiences with the precision of a speedrunner
          and the creativity of a modder.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-gaming-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Crosshair size={16} />
              View Missions
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-gaming"
          >
            <span className="relative z-10">Contact Player</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="font-heading text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
