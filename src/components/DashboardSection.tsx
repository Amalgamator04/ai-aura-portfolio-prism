import { useState } from "react";
import { ChevronLeft, ChevronRight, BarChart, PieChart, TrendingUp, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DashboardSection() {
  const [currentDashboard, setCurrentDashboard] = useState(0);

  const dashboards = [
    {
      title: "Sales Performance Dashboard",
      type: "Power BI",
      description: "Comprehensive sales analytics with regional performance tracking",
      image: "/api/placeholder/600/400",
      insights: ["45% increase in Q4 sales", "North region leads with 32% growth", "Mobile sales up 67%"]
    },
    {
      title: "Customer Analytics Report",
      type: "Excel",
      description: "Customer segmentation and lifetime value analysis",
      image: "/api/placeholder/600/400",
      insights: ["Customer retention up 23%", "Premium segment drives 60% revenue", "Churn rate reduced to 8%"]
    },
    {
      title: "Inventory Management System",
      type: "Streamlit",
      description: "Real-time inventory tracking with predictive restocking",
      image: "/api/placeholder/600/400",
      insights: ["Stock efficiency improved by 35%", "Automated 80% of reorder processes", "Reduced waste by 28%"]
    },
    {
      title: "Financial Performance Tracker",
      type: "Power BI",
      description: "Executive financial dashboard with KPI monitoring",
      image: "/api/placeholder/600/400",
      insights: ["Profit margin increased 18%", "Operating costs down 12%", "ROI improved to 24%"]
    }
  ];

  const chartTypes = [
    { icon: BarChart, name: "Bar Chart", description: "Comparing categories" },
    { icon: TrendingUp, name: "Line Chart", description: "Trends over time" },
    { icon: PieChart, name: "Pie Chart", description: "Part-to-whole relationships" },
    { icon: Activity, name: "Area Chart", description: "Volume changes" },
    { icon: BarChart, name: "Clustered Column", description: "Multi-series comparison" },
    { icon: Activity, name: "Heatmap", description: "Pattern visualization" },
    { icon: TrendingUp, name: "Scatter Plot", description: "Correlation analysis" },
    { icon: PieChart, name: "Donut Chart", description: "Hierarchical data" }
  ];

  const caseStudy = {
    title: "Flight Crash Survival Analytics",
    timeline: [
      { day: 1, task: "Raw dataset ingestion and profiling", status: "completed" },
      { day: 2, task: "Null values cleaned, outliers removed", status: "completed" },
      { day: 3, task: "Categorical encoding + feature selection", status: "completed" },
      { day: 4, task: "Final charts created in Power BI — survival rates by seat location, airline, and demographics", status: "completed" }
    ]
  };

  const nextDashboard = () => {
    setCurrentDashboard((prev) => (prev + 1) % dashboards.length);
  };

  const prevDashboard = () => {
    setCurrentDashboard((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  return (
    <section id="dashboards" className="py-20 px-6 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Dashboard <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive visualizations that turn complex data into clear insights
          </p>
        </div>

        {/* Dashboard Carousel */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <Card className="glass-card overflow-hidden">
            <div className="relative">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-accent/10">
                <div>
                  <h3 className="text-xl font-bold">{dashboards[currentDashboard].title}</h3>
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded-md">
                    {dashboards[currentDashboard].type}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={prevDashboard}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={nextDashboard}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-muted/20 to-background flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart className="h-24 w-24 mx-auto mb-4 text-primary opacity-60" />
                  <p className="text-lg font-medium mb-2">{dashboards[currentDashboard].title}</p>
                  <p className="text-muted-foreground">{dashboards[currentDashboard].description}</p>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-semibold mb-3">Key Insights:</h4>
                <div className="grid gap-2">
                  {dashboards[currentDashboard].insights.map((insight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Chart Types Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Chart Types We <span className="gradient-text">Master</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chartTypes.map((chart, index) => (
              <Card 
                key={chart.name}
                className="glass-card hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <chart.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{chart.name}</h4>
                  <p className="text-xs text-muted-foreground">{chart.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}