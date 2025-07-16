import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajat M.",
      location: "Delhi",
      rating: 4,
      text: "They understood our data pain points and delivered dashboards that changed how we see operations.",
      avatar: "👤"
    },
    {
      name: "Anjali R.",
      location: "Mumbai", 
      rating: 4.5,
      text: "The chatbot they built now handles 70% of our customer queries. Amazing support!",
      avatar: "👩‍💼"
    },
    {
      name: "Rohit S.",
      location: "Jaipur",
      rating: 4,
      text: "Clean work, professional delivery, and excellent understanding of business needs.",
      avatar: "👨‍🔧"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="glass-card hover:neon-glow transition-all duration-500 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="h-4 w-4 fill-primary/50 text-primary" />
                  )}
                </div>
                <p className="text-sm leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}