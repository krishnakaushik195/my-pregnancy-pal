import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
              <Heart className="w-5 h-5 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold font-heading text-foreground">
              ToBe<span className="text-primary">Mom</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#angel-bot"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Angel Bot
            </a>
            <a
              href="#community"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Community
            </a>
            <a
              href="#doctors"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Doctors
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
