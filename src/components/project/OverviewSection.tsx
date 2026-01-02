import { Target, Users, Clock } from "lucide-react";

const OverviewSection = () => {
  const stats = [
    { icon: Target, label: "Project Goal", value: "Productivity" },
    { icon: Users, label: "Target Users", value: "Remote Teams" },
    { icon: Clock, label: "Duration", value: "3 Months" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Project Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simplifying Team Collaboration
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                TaskFlow Dashboard was born from the need to create a
                lightweight, accessible task management solution that doesn't
                require complex frameworks or dependencies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The goal was to prove that modern, beautiful, and functional web
                applications can be built using fundamental web technologies—HTML,
                CSS, and JavaScript—while maintaining excellent performance and
                user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This project focuses on clean code architecture, accessibility
                standards, and responsive design principles to deliver a solution
                that works seamlessly across all devices.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <stat.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="font-display text-xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
