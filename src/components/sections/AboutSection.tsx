import { useEffect, useRef, useState } from 'react';
import { User, Zap, Trophy, Clock } from 'lucide-react';

const stats = [
  { label: 'Years Active', value: '4+', icon: Clock },
  { label: 'Projects Cleared', value: '35+', icon: Trophy },
  { label: 'Power Level', value: '9000+', icon: Zap },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Player Card */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative hud-border hud-corners bg-card/50 p-8 backdrop-blur-sm">
              {/* Avatar Container */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/20 to-neon-green/20 rounded-sm flex items-center justify-center border border-primary/30 overflow-hidden">
                    <img 
                      src="/smith_formal2.png" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-neon-green text-background text-xs font-heading font-bold">
                    LVL 22
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground font-heading tracking-widest mb-1">
                    PLAYER ID
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading text-gradient mb-2">
                    MSMITH
                  </h3>
                  <div className="text-sm text-muted-foreground font-heading">
                    CLASS: Junior Full-Stack Developer
                  </div>
                </div>
              </div>

              {/* XP Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-heading text-muted-foreground mb-2">
                  <span>EXPERIENCE</span>
                  <span>8,450 / 10,000 XP</span>
                </div>
                <div className="xp-bar">
                  <div
                    className="xp-fill"
                    style={{ width: isVisible ? '84.5%' : '0%' }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-2 md:p-4 bg-secondary/50 rounded-sm border border-border overflow-hidden"
                      style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    >
                      <Icon size={16} className="mx-auto mb-1 md:mb-2 text-primary md:w-5 md:h-5" />
                      <div className="text-base md:text-xl lg:text-2xl font-bold text-primary font-heading truncate md:truncate-none md:whitespace-nowrap">{stat.value}</div>
                      <div className="text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest text-muted-foreground font-heading leading-tight">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-neon-green/50" />
          </div>

          {/* About Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text">
              About Player
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Welcome to my digital realm. I'm Mogamat Smith, a passionate{' '}
                <span className="text-primary">full-stack developer</span> and{' '}
                <span className="text-neon-green">dedicated gamer</span> who believes
                that the best code is written with the same intensity as a competitive
                match.
              </p>

              <p>
                My journey began in the worlds of classic RPGs and strategy games,
                where I learned that patience, problem-solving, and attention to
                detail are the keys to victory. Now, I apply those same principles
                to crafting exceptional digital experiences.
              </p>

              <p>
                When I'm not pushing commits, you'll find me grinding ranked matches,
                exploring open worlds, or theorycrafting the perfect build. I believe
                that the gaming mindset: the drive to optimize, improve, and never
                give up makes me a better developer.
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="font-heading text-sm text-primary tracking-widest">
                    CURRENTLY: AVAILABLE FOR PARTY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
