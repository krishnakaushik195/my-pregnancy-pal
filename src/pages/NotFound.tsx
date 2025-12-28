import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-primary-soft flex items-center justify-center">
          <Heart className="w-10 h-10 text-primary" />
        </div>

        {/* Content */}
        <h1 className="text-6xl font-bold font-heading text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold font-heading text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Oops! It seems like you've wandered off the path. Let's get you back
          to a safe place.
        </p>

        {/* CTA */}
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <ArrowLeft className="w-5 h-5" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
