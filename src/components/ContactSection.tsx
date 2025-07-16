import { Mail, Phone, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your data into intelligent solutions?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card p-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>vpananalytics0044@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 73030 25805</span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/amalgamator04" className="hover:text-primary transition-colors">
                  github.com/amalgamator04
                </a>
              </div>
              <div className="flex items-center gap-4">
                <ExternalLink className="h-5 w-5 text-primary" />
                <a href="https://preview--casual-hi-talker.lovable.app/" className="hover:text-primary transition-colors">
                  Our Portfolio Site
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}