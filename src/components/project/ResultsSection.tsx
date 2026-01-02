import { TrendingUp, Users, Zap, Award } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Faster Load Time",
    description: "Compared to React-based alternatives",
  },
  {
    icon: Users,
    value: "500+",
    label: "Active Users",
    description: "Within the first month of launch",
  },
  {
    icon: Zap,
    value: "98",
    label: "Performance Score",
    description: "Lighthouse performance rating",
  },
  {
    icon: Award,
    value: "100%",
    label: "Accessibility",
    description: "WCAG 2.1 AA compliant",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Impact & Results
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The numbers speak for themselves. Here's the impact TaskFlow has
              made since launch.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <metric.icon className="w-8 h-8 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Value */}
                <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
