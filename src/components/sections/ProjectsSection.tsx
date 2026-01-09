import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight, Crosshair } from 'lucide-react';
import mts from "@/assets/mtsnew.png";
import brew from "@/assets/brew.png";
import todo from "@/assets/todo.png";
import astrielle from "@/assets/astrielle.png";
import skylens from "@/assets/skylens.png";
import client1 from "@/assets/client1.png";

const projects = [
  {
    id: 1,
    title: 'SkyLens Weather App',
    category: 'Web Application',
    description: 'A real-time weather forecasting app with interactive maps and detailed analytics.',
    tech: ['React', 'TypeScript', 'OpenWeatherMap API', 'CSS'],
    difficulty: 'EPIC',
    image: skylens,
  },
  {
    id: 2,
    title: 'Astrielle E-Commerce',
    category: 'Web Application',
    description: 'A modern and user-friendly e-commerce platform for fashion enthusiasts.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    difficulty: 'LEGENDARY',
    image: astrielle,
  },
  {
    id: 3,
    title: 'Brew Craft E-Commerce',
    category: 'Web Application',
    description: 'A modern and user-friendly e-commerce platform for coffee brewing enthusiasts.',
    tech: ['PHP', 'MySQL', 'CSS'],
    difficulty: 'LEGENDARY',
    image: brew,
  },
  {
    id: 4,
    title: 'To-Do App',
    category: 'Web Application',
    description: 'A simple and user-friendly to-do app with task management features.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    difficulty: 'EPIC',
    image: todo,
  },
  {
    id: 5,
    title: 'Modern Tech Solutions',
    category: 'Web Application',
    description: 'A comprehensive HR management system for employee records and payroll.',
    tech: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    difficulty: 'LEGENDARY',
    image: mts,
  },
  {
    id: 6,
    title: 'Beauty By Geraldine',
    category: 'Website',
    description: 'An online Nail Salon for beauty enthusiasts. (My First Client)',
    tech: ['HTML', 'CSS', 'JavaScript', 'Formspree'],
    difficulty: 'RARE',
    image: client1,
  },
];

const difficultyColors: Record<string, string> = {
  'LEGENDARY': 'text-neon-gold bg-neon-gold/10 border-neon-gold/30',
  'EPIC': 'text-purple-400 bg-purple-400/10 border-purple-400/30',
  'RARE': 'text-blue-400 bg-blue-400/10 border-blue-400/30',
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text inline-block">
            Mission Log
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Completed quests and conquered challenges. Each project represents a
            unique adventure with its own set of obstacles overcome.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative game-card hud-border rounded-sm overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image / Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crosshair
                      size={48}
                      className="text-primary/30 group-hover:text-primary/60 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                )}
                
                {/* Scan effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* HUD Overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`px-2 py-1 text-xs font-heading tracking-wider border ${difficultyColors[project.difficulty]}`}>
                    {project.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-background/80 text-xs font-heading text-muted-foreground tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-xs text-muted-foreground rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 text-sm font-heading text-primary hover:text-neon-green transition-colors group/btn">
                    <span>VIEW MISSION</span>
                    <ChevronRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                  <div className="flex items-center gap-3 ml-auto">
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-8 h-0.5 bg-primary/50 group-hover:bg-primary transition-colors" />
                <div className="absolute top-0 right-0 w-0.5 h-8 bg-primary/50 group-hover:bg-primary transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-neon-green/50 group-hover:bg-neon-green transition-colors" />
                <div className="absolute bottom-0 left-0 w-0.5 h-8 bg-neon-green/50 group-hover:bg-neon-green transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
