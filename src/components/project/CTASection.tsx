import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/30 to-primary/10 border border-primary/20 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Interested in This Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Check out the live demo to see it in action, or dive into the
                code on GitHub to learn how it's built.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </div>

              {/* Back Link */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
