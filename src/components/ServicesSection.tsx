import { 
  BarChart3, 
  Database, 
  Brain, 
  Bot, 
  Globe, 
  Package, 
  Search,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analytics & Insight Reports",
      description: "Transform raw data into actionable insights using Python, Excel, and Power BI with comprehensive reporting and visualization.",
      technologies: ["Python", "Excel", "Power BI", "SQL"]
    },
    {
      icon: Database,
      title: "Data Cleaning & Automation",
      description: "Streamline your data pipelines with automated cleaning, structuring, and preprocessing workflows.",
      technologies: ["Pandas", "NumPy", "FastAPI", "ETL"]
    },
    {
      icon: TrendingUp,
      title: "ML Models & Forecasting",
      description: "Build predictive models for forecasting, classification, and regression to drive data-driven decisions.",
      technologies: ["Scikit-learn", "TensorFlow", "XGBoost", "Prophet"]
    },
    {
      icon: Bot,
      title: "AI Chatbots & Integration",
      description: "Develop intelligent chatbots with FastAPI and Botpress integration for seamless customer interactions.",
      technologies: ["FastAPI", "Botpress", "NLP", "OpenAI"]
    },
    {
      icon: Globe,
      title: "Dashboard Development",
      description: "Create interactive, real-time dashboards using Power BI, Streamlit, and Tableau for business intelligence.",
      technologies: ["Power BI", "Streamlit", "Tableau", "Plotly"]
    },
    {
      icon: Package,
      title: "Deployment & DevOps",
      description: "Deploy your solutions with Docker containers and GitHub Actions for scalable, maintainable applications.",
      technologies: ["Docker", "GitHub Actions", "AWS", "Heroku"]
    },
    {
      icon: Search,
      title: "Custom AI Agents",
      description: "Design and implement intelligent agents for task automation, workflow optimization, and process enhancement.",
      technologies: ["LangChain", "AutoGen", "Python", "APIs"]
    },
    {
      icon: Brain,
      title: "Business Intelligence",
      description: "Comprehensive BI solutions with KPI tracking, performance monitoring, and strategic insights.",
      technologies: ["Power BI", "Excel", "DAX", "Python"]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data and AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="glass-card hover:neon-glow transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Data?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you unlock the power of your data and automate your business processes.
            </p>
            <button 
              className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 text-white px-8 py-3 rounded-2xl font-semibold neon-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}