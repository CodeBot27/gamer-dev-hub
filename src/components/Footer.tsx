import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-heading text-xl tracking-widest text-gradient">
            MSMITH
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <span className="font-heading tracking-wider">© 2024 MSMITH</span>
            <span className="mx-2">|</span>
            <span>All Rights Reserved</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-heading text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="tracking-widest">BACK TO TOP</span>
            <ChevronUp
              size={18}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
