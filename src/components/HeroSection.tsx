import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-background opacity-80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 text-6xl opacity-20 floating-animation">📊</div>
        <div className="absolute top-40 right-32 text-5xl opacity-20 floating-animation" style={{ animationDelay: '1s' }}>🤖</div>
        <div className="absolute bottom-40 left-32 text-4xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}>📈</div>
        <div className="absolute bottom-20 right-20 text-5xl opacity-20 floating-animation" style={{ animationDelay: '0.5s' }}>🧠</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="slide-up">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
            <span className="gradient-text">Prabhav</span> &{" "}
            <span className="gradient-text">Vanshika</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium mb-8 text-muted-foreground">
            Data Analytics & AI Automation Experts
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming raw data into intelligent business decisions through 
            <span className="text-primary font-semibold"> predictive models</span>, 
            <span className="text-accent font-semibold"> interactive dashboards</span>, and 
            <span className="text-primary font-semibold"> smart AI automation</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 neon-glow text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Build Your AI Solution
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="glass-card hover:neon-glow">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover:neon-glow">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover:neon-glow">
                <Phone className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['Python', 'FastAPI', 'Power BI', 'TensorFlow', 'Streamlit', 'Docker', 'MySQL'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium hover:neon-glow transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}