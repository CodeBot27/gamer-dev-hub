import { useEffect, useRef, useState } from "react";
import { GraduationCap, CheckCircle2, Circle } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Full Stack Developer Intern",
    institution: "Life Choices Studio",
    period: "Sep 2025 - Present",
    status: "ongoing",
    achievements: ["Flutter", "Python", "Supabase", "Wordpress"],
  },
  {
    id: 2,
    degree: "Full Stack Development Course",
    institution: "Life Choices Academy",
    period: "Apr 2025 - Sep 2025",
    status: "completed",
    achievements: [
      "Vue",
      "Node.js",
      "TypeScript",
      "Express",
      "MySQL",
      "PHP",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    degree: "Diploma in Software Development",
    institution: "College of Cape Town",
    period: "Jan 2024 - Dec 2024",
    status: "completed",
    achievements: ["UI/UX Design", "C#", "ASP.NET", "SQL Server"],
  },
  {
    id: 4,
    degree: "Software Development Bootcamp",
    institution: "Codespace Academy",
    period: "Jan 2023 - Dec 2023",
    status: "completed",
    achievements: ["Html", "Css", "Javascript", "Figma", "Bootstrap", "React"],
  },
];

const EducationSection = () => {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text inline-block">
            Training Log
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            The skills forged through years of study and practice. Each
            milestone unlocked new abilities in my developer arsenal.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neon-green to-primary/20" />

          {education.map((item, index) => (
            <div
              key={item.id}
              className={`relative mb-12 last:mb-0 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      item.status === "completed"
                        ? "bg-neon-green/20 border-2 border-neon-green"
                        : "bg-secondary border-2 border-primary"
                    }`}
                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  >
                    {item.status === "completed" ? (
                      <CheckCircle2 size={16} className="text-neon-green" />
                    ) : (
                      <Circle size={16} className="text-primary" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="game-card hud-border p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-sm">
                        <GraduationCap size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-heading text-primary tracking-widest mb-1">
                          {item.period}
                        </div>
                        <h3 className="font-heading text-lg text-foreground mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Completion Badge */}
                    {item.status === "completed" && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 rounded-sm">
                        <CheckCircle2 size={12} className="text-neon-green" />
                        <span className="text-xs font-heading text-neon-green tracking-widest">
                          COMPLETED
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
