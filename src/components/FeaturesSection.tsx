import {
  Heart,
  MessageCircle,
  Calendar,
  FileText,
  Users,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MessageCircle,
    title: "Angel Bot AI",
    description:
      "24/7 empathetic AI assistant that understands your emotions and provides comforting support via text, audio, or video.",
    color: "primary" as const,
  },
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description:
      "Connect with certified doctors anytime through chat or video calls for expert medical guidance.",
    color: "accent" as const,
  },
  {
    icon: FileText,
    title: "Smart Report Analysis",
    description:
      "Upload medical reports and get easy-to-understand summaries with audio support in multiple languages.",
    color: "highlight" as const,
  },
  {
    icon: Calendar,
    title: "Personalized Reminders",
    description:
      "Never miss a checkup with smart reminders for medications, hydration, exercise, and hospital visits.",
    color: "primary" as const,
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join moderated groups, share experiences, and connect with other expecting mothers on similar journeys.",
    color: "accent" as const,
  },
  {
    icon: Heart,
    title: "Mental Health Care",
    description:
      "Advanced mood monitoring and emotional support with professional escalation when needed.",
    color: "highlight" as const,
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-soft",
    icon: "text-primary",
    border: "border-primary/20",
  },
  accent: {
    bg: "bg-accent-soft",
    icon: "text-accent",
    border: "border-accent/20",
  },
  highlight: {
    bg: "bg-highlight-soft",
    icon: "text-highlight",
    border: "border-highlight/20",
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-soft text-accent font-medium text-sm mb-4">
            Everything You Need
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Care designed for{" "}
            <span className="text-gradient">every moment</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From emotional support to medical guidance, ToBeMom brings together
            everything you need for a healthy and happy pregnancy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <Card
                key={feature.title}
                variant="default"
                className={`group hover:-translate-y-2 transition-all duration-300 border ${colors.border}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
