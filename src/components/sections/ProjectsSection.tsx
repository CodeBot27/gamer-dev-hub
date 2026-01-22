import { useEffect, useRef, useState } from "react";
import { ChevronRight, Crosshair, Image as ImageIcon, X } from "lucide-react";
import mts from "@/assets/mtsnew.png";
import brew from "@/assets/brew.png";
import todo from "@/assets/todo.png";
import astrielle from "@/assets/astrielle.png";
import skylens from "@/assets/skylens.png";
import podhut from "@/assets/podhut.png";

const projects = [
  {
    id: 1,
    title: "SkyLens Weather App",
    category: "Web Application",
    description:
      "A real-time weather forecasting app with interactive maps and detailed analytics.",
    tech: ["React", "TypeScript", "OpenWeatherMap API", "CSS"],
    difficulty: "EPIC",
    image: skylens,
    missionUrl: "https://skylensms.netlify.app/",
  },
  {
    id: 2,
    title: "Astrielle E-Commerce",
    category: "Web Application",
    description:
      "A modern and user-friendly e-commerce platform for fashion enthusiasts.",
    tech: ["React", "MySQL", "Node.js", "Tailwind CSS"],
    difficulty: "LEGENDARY",
    image: astrielle,
    missionUrl: "https://astrielle.netlify.app/",
  },
  {
    id: 3,
    title: "Brew Craft E-Commerce",
    category: "Web Application",
    description:
      "A modern and user-friendly e-commerce platform for coffee brewing enthusiasts.",
    tech: ["PHP", "MySQL", "CSS"],
    difficulty: "LEGENDARY",
    image: brew,
    missionUrl: "https://brewcraft.wuaze.com/",
  },
  {
    id: 4,
    title: "To-Do App",
    category: "Web Application",
    description:
      "A simple and user-friendly to-do app with task management features.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    difficulty: "EPIC",
    image: todo,
    missionUrl: "https://msmith-todolist.netlify.app/",
  },
  {
    id: 5,
    title: "Modern Tech Solutions",
    category: "Web Application",
    description:
      "A comprehensive HR management system for employee records and payroll.",
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    difficulty: "LEGENDARY",
    image: mts,
    missionUrl: "https://moderntechs.netlify.app/",
  },
  {
    id: 6,
    title: "PodHut",
    category: "Website",
    description:
      "An online platform for podcast enthusiasts for listening to podcasts.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Supabase", "Api"],
    difficulty: "LEGENDARY",
    image: podhut,
    missionUrl: "https://podhut.netlify.app/",
  },
];

const difficultyColors: Record<string, string> = {
  LEGENDARY: "text-neon-gold bg-neon-gold/10 border-neon-gold/30",
  EPIC: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  RARE: "text-blue-400 bg-blue-400/10 border-blue-400/30",
};

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative min-h-screen py-20 md:py-32"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text inline-block">
              Mission Log
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Completed quests and conquered challenges. Each project represents
              a unique adventure with its own set of obstacles overcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative game-card hud-border rounded-sm overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/10 to-transparent transition-opacity duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                    <span
                      className={`px-2 py-1 text-xs font-heading tracking-wider border ${
                        difficultyColors[project.difficulty]
                      }`}
                    >
                      {project.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-background/80 text-xs font-heading text-muted-foreground tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

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
                  <div className="relative z-10 flex items-center gap-4 pt-4 border-t border-border">
                    <a
                      href={project.missionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-2 text-sm font-heading text-primary hover:text-neon-green transition-colors group/btn"
                    >
                      <span>VIEW MISSION</span>
                      <ChevronRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />

                      {/* Tooltip */}
                      {/* <span className="absolute -top-10 left-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 text-xs bg-background border border-border px-2 py-1 rounded-sm neon-text">
                        Open Live Site
                      </span> */}
                    </a>

                    <button
                      onClick={() => setActiveImage(project.image)}
                      className="relative ml-auto text-muted-foreground hover:text-primary transition-colors group/img"
                    >
                      <ImageIcon size={18} />

                      {/* Tooltip */}
                      <span className="absolute -top-9 right-0 opacity-0 group-hover/img:opacity-100 transition-all duration-300 text-xs bg-background border border-border px-2 py-1 rounded-sm neon-text whitespace-nowrap">
                        View Image
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-0 text-muted-foreground hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-5xl aspect-video bg-black/60 rounded-sm hud-border flex items-center justify-center p-4">
              <img
                src={activeImage}
                alt="Project preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
