import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "First-time Mom",
    avatar: "👩‍🦰",
    content:
      "ToBeMom has been my lifeline during pregnancy. The Angel Bot understands exactly how I feel, and the doctor consultations give me peace of mind whenever I have questions.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Working Professional",
    avatar: "👩‍💼",
    content:
      "As a busy professional, I don't always have time for regular checkups. The smart reminders and report analysis feature have been incredibly helpful in managing my pregnancy health.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Mom of Two",
    avatar: "👩‍👧",
    content:
      "The community support is amazing! Connecting with other moms who understand what I'm going through has made this journey so much easier. Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-highlight-soft text-highlight font-medium text-sm mb-4">
            Loved by Moms
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
            Stories from our{" "}
            <span className="text-gradient">amazing moms</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from mothers who found support, comfort, and joy through their
            pregnancy journey with ToBeMom.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="elevated"
              className="p-8 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground font-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
