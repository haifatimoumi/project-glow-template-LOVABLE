import { Layers, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Drag & Drop Tasks",
    description:
      "Intuitive drag-and-drop functionality for seamless task organization across multiple boards and columns.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Instant synchronization ensures your team always sees the latest changes without refreshing.",
  },
  {
    icon: Shield,
    title: "Data Persistence",
    description:
      "Local storage integration keeps your tasks safe between sessions without requiring a backend.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description:
      "Optimized experience across desktop, tablet, and mobile devices with touch-friendly interactions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Key Features
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Built for Productivity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is carefully designed to help teams focus on what
              matters most—getting work done.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
