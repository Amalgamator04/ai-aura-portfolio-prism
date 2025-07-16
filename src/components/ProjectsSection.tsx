import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Insurance Risk Prediction App",
      description: "ML-powered application for predicting insurance claim risks using advanced algorithms and real-time data processing.",
      technologies: ["FastAPI", "Streamlit", "Scikit-learn", "Python", "Docker"],
      github: "https://github.com/amalgamator04",
      category: "Machine Learning"
    },
    {
      title: "KDP Content QA Automation",
      description: "Automated quality assurance system for Kindle Direct Publishing content with intelligent alert mechanisms.",
      technologies: ["Excel", "Python", "Automation", "APIs"],
      github: "https://github.com/amalgamator04",
      category: "Automation"
    },
    {
      title: "Laptop Price Estimator",
      description: "Comprehensive price prediction model with containerized deployment for scalable laptop price estimation.",
      technologies: ["Machine Learning", "Docker", "Python", "Flask"],
      github: "https://github.com/amalgamator04",
      category: "ML Deployment"
    },
    {
      title: "Restaurant Recommender Chatbot",
      description: "NLP-powered chatbot providing personalized restaurant recommendations based on user preferences and location.",
      technologies: ["NLP", "Python", "Chatbot", "FastAPI"],
      github: "https://github.com/amalgamator04",
      category: "AI Chatbot"
    },
    {
      title: "IPL Power BI Dashboard",
      description: "Interactive sports analytics dashboard showcasing player statistics, team performance, and match insights.",
      technologies: ["Power BI", "DAX", "Excel", "Data Visualization"],
      github: "https://github.com/amalgamator04",
      category: "Analytics"
    },
    {
      title: "Flight Crash Survival Analytics",
      description: "Comprehensive analysis of aviation safety data with predictive modeling for survival rate optimization.",
      technologies: ["Python", "Pandas", "Power BI", "Statistical Analysis"],
      github: "https://github.com/amalgamator04",
      category: "Data Science"
    },
    {
      title: "Travel Package Planner",
      description: "AI-driven travel recommendation system with budget optimization and itinerary planning capabilities.",
      technologies: ["Python", "ML", "Streamlit", "APIs"],
      github: "https://github.com/amalgamator04",
      category: "Recommendation System"
    },
    {
      title: "Bakery Scroll Site with Animations",
      description: "Modern, animated website for bakery business with smooth scrolling effects and interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Animations"],
      github: "https://github.com/amalgamator04",
      category: "Web Development"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of innovative data science and AI solutions
          </p>
        </div>

        {/* 3D Rotating Showcase */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="glass-card hover:neon-glow mr-8 z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="relative w-full max-w-2xl">
              <Card className="glass-card hover:neon-glow transition-all duration-500 transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full font-medium">
                        {projects[currentProject].category}
                      </span>
                      <CardTitle className="text-2xl font-bold mt-3 gradient-text">
                        {projects[currentProject].title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="glass-card hover:neon-glow">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="glass-card hover:neon-glow ml-8 z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? "bg-primary scale-125" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card hover:neon-glow transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-1 text-xs bg-accent/20 text-accent rounded-md font-medium">
                    {project.category}
                  </span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-70 hover:opacity-100">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}