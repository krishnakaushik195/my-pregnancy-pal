import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mic, Video, Sparkles } from "lucide-react";
import angelBotImage from "@/assets/angel-bot.png";

const chatMessages = [
  {
    role: "bot",
    message: "Hi there! 💕 How are you feeling today?",
  },
  {
    role: "user",
    message: "I'm a bit worried about my upcoming ultrasound...",
  },
  {
    role: "bot",
    message:
      "It's completely normal to feel anxious before an ultrasound. Remember, this is a wonderful opportunity to see your little one! Would you like me to explain what to expect during the scan?",
  },
];

const AngelBotSection = () => {
  return (
    <section
      id="angel-bot"
      className="py-20 lg:py-32 bg-gradient-to-b from-background to-primary-soft/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft text-primary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Companion
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Meet <span className="text-gradient">Angel Bot</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Your 24/7 emotional support companion who truly understands. Angel
              Bot uses advanced AI to recognize your feelings and provide
              comforting, personalized responses whenever you need someone to
              talk to.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">
                  Text chat anytime, anywhere
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                  <Mic className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium">
                  Voice conversations for hands-free support
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-highlight-soft flex items-center justify-center">
                  <Video className="w-5 h-5 text-highlight" />
                </div>
                <span className="text-foreground font-medium">
                  Video calls for face-to-face comfort
                </span>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Start Chatting Now
            </Button>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            {/* Angel Bot Image */}
            <div className="relative z-10 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-75" />
                <img
                  src={angelBotImage}
                  alt="Angel Bot - Your AI pregnancy companion"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain animate-float"
                />
              </div>
            </div>

            {/* Chat preview */}
            <Card
              variant="glass"
              className="absolute top-1/2 -translate-y-1/2 right-0 lg:right-[-20px] w-72 sm:w-80 p-4 z-20"
            >
              <div className="space-y-3">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        msg.role === "user"
                          ? "gradient-accent text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">
                  Type your message...
                </div>
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center cursor-pointer hover:shadow-glow transition-shadow">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngelBotSection;
