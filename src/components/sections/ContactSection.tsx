import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/kxngzero329' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/suhair-smith-kxngzero329/' }
];

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mojjqvlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      if (response.ok) {
        toast({
          title: "Transmission Successful! 🎮",
          description: "Your message has been sent. I'll respond to your mission request soon!",
        });
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 md:py-32"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading text-3xl md:text-4xl font-heading neon-text inline-block">
            Initiate Contact
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Ready to team up? Whether you have a mission in mind or just want to
            connect, I'm always open for a co-op session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="hud-border hud-corners bg-card/50 p-8 backdrop-blur-sm h-full">
              <h3 className="font-heading text-2xl text-gradient mb-6">
                COMM CHANNELS
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-sm border border-primary/30">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-heading text-primary tracking-widest mb-1">
                      LOCATION
                    </div>
                    <span className="text-foreground">Cape Town, South Africa</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-sm border border-primary/30">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-heading text-primary tracking-widest mb-1">
                      EMAIL
                    </div>
                    <span className="text-foreground">suhairsmith17@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="text-xs font-heading text-muted-foreground tracking-widest mb-4">
                  SOCIAL LINKS
                </div>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="p-3 bg-secondary border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                        title={social.label}
                      >
                        <Icon
                          size={20}
                          className="group-hover:scale-110 transition-transform"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-neon-green rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-neon-green rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="font-heading text-sm text-neon-green tracking-widest">
                    ONLINE & ACCEPTING MISSIONS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="hud-border hud-corners bg-card/50 p-8 backdrop-blur-sm"
            >
              <h3 className="font-heading text-2xl text-gradient mb-6">
                SEND MESSAGE
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-heading text-muted-foreground tracking-widest mb-2">
                    PLAYER NAME
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="input-gaming"
                    placeholder="Enter your handle..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading text-muted-foreground tracking-widest mb-2">
                    COMM FREQUENCY (EMAIL)
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="input-gaming"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading text-muted-foreground tracking-widest mb-2">
                    TRANSMISSION
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="input-gaming min-h-[150px] resize-none"
                    placeholder="Describe your mission..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gaming-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      <span className="relative z-10">TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="relative z-10" />
                      <span className="relative z-10">SEND TRANSMISSION</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
