import { useEffect, useRef, useState } from 'react';
import { Code, Server, Wrench, Gamepad2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Arsenal',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 86 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    title: 'Backend Weapons',
    icon: Server,
    color: 'neon-green',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 84 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'Supabase / Firebase', level: 93 },
    ],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    color: 'neon-gold',
    skills: [
      { name: 'Git / GitHub', level: 94 },
      { name: 'Netlify / Vercel', level: 92 },
      { name: 'Render', level: 85 },
      { name: 'FileZilla', level: 88 },
    ],
  },
  {
    title: 'Top Projects',
    icon: Code,
    color: 'neon-red',
    skills: [
      { name: 'Astrielle', level: 96 },
      { name: 'SkyLens Weather App', level: 94 },
      { name: 'Modern Tech Solutions', level: 92 },
      { name: 'Lyrics Snatcher', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bar: string; text: string; glow: string }> = {
      'primary': {
        bar: 'from-primary to-primary/70',
        text: 'text-primary',
        glow: 'shadow-[0_0_10px_hsl(var(--neon-cyan)/0.5)]',
      },
      'neon-green': {
        bar: 'from-neon-green to-neon-green/70',
        text: 'text-neon-green',
        glow: 'shadow-[0_0_10px_hsl(var(--neon-green)/0.5)]',
      },
      'neon-gold': {
        bar: 'from-neon-gold to-neon-gold/70',
        text: 'text-neon-gold',
        glow: 'shadow-[0_0_10px_hsl(var(--neon-gold)/0.5)]',
      },
      'neon-red': {
        bar: 'from-neon-red to-neon-red/70',
        text: 'text-neon-red',
        glow: 'shadow-[0_0_10px_hsl(var(--neon-red)/0.5)]',
      },
    };
    return colorMap[color] || colorMap['primary'];
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-neon-green/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text-green inline-block">
            Player Loadout
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Every weapon in my arsenal, every skill in my tree. These are the
            tools I wield to conquer any development challenge.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={category.title}
                className={`game-card hud-border p-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-secondary rounded-sm border border-border ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`font-heading text-xl tracking-wider ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group"
                      style={{ transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className={`font-heading text-sm ${colors.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* XP Bar */}
                      <div className="relative h-2 bg-secondary rounded-sm overflow-hidden">
                        {/* Segment markers */}
                        <div className="absolute inset-0 flex">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="flex-1 border-r border-background/30 last:border-r-0"
                            />
                          ))}
                        </div>
                        
                        {/* Fill */}
                        <div
                          className={`h-full bg-gradient-to-r ${colors.bar} ${colors.glow} transition-all duration-1000 ease-out relative`}
                          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Total */}
                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-xs font-heading text-muted-foreground tracking-widest">
                    PROFICIENCY
                  </span>
                  <span className={`font-heading text-lg ${colors.text}`}>
                    {Math.round(
                      category.skills.reduce((acc, s) => acc + s.level, 0) /
                        category.skills.length
                    )}
                    % AVG
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
