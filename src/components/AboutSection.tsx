import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Clients Served", value: "50+" },
    { icon: Target, label: "Projects Completed", value: "100+" },
    { icon: Award, label: "Years Experience", value: "3+" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the data-driven duo transforming businesses through intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Who We Are</h3>
            <p className="text-lg leading-relaxed mb-6">
              We are <strong>Prabhav Sharma</strong> & <strong>Vanshika</strong>, 
              passionate freelance data analytics and AI solution providers. We specialize in 
              transforming raw data into intelligent business decisions, building predictive models, 
              crafting interactive dashboards, and integrating smart AI chatbots for automation.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              With hands-on experience across multiple technologies and a deep understanding of 
              business needs, we deliver impactful solutions to startups, SMBs, and individuals 
              looking to harness the power of data and AI.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-primary">Our Expertise:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
                  <h5 className="font-semibold mb-2">Development</h5>
                  <p className="text-sm text-muted-foreground">Python, FastAPI, Flask, JavaScript</p>
                </div>
                <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
                  <h5 className="font-semibold mb-2">Data Science</h5>
                  <p className="text-sm text-muted-foreground">Scikit-learn, Pandas, NumPy, TensorFlow</p>
                </div>
                <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
                  <h5 className="font-semibold mb-2">Analytics</h5>
                  <p className="text-sm text-muted-foreground">Power BI, Excel, MySQL, Streamlit</p>
                </div>
                <div className="glass-card p-4 hover:neon-glow transition-all duration-300">
                  <h5 className="font-semibold mb-2">AI Integration</h5>
                  <p className="text-sm text-muted-foreground">Chatbots, Agents, Automation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            {/* Skill Meters */}
            <div className="space-y-6">
              {[
                { skill: "Python & Data Science", level: 95 },
                { skill: "Dashboard Development", level: 90 },
                { skill: "Machine Learning", level: 85 },
                { skill: "AI Chatbot Integration", level: 88 },
                { skill: "Database Management", level: 82 },
                { skill: "Web Development", level: 78 }
              ].map((item, index) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full skill-meter"
                      style={{ 
                        '--fill-width': `${item.level}%`,
                        animationDelay: `${index * 0.2}s`
                      } as any}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="glass-card hover:neon-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h4 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h4>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}