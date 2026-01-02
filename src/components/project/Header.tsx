import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back Button */}
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Projects</span>
          </Button>

          {/* Logo */}
          <div className="font-display text-xl font-bold text-foreground">
            Portfolio
          </div>

          {/* CTA */}
          <Button variant="default" size="sm">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
