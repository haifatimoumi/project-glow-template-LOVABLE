import { AlertCircle, CheckCircle2 } from "lucide-react";

const challenges = [
  {
    challenge: "Building drag-and-drop without external libraries",
    solution:
      "Implemented native HTML5 Drag and Drop API with custom visual feedback and touch device support using pointer events.",
  },
  {
    challenge: "Maintaining state without a framework",
    solution:
      "Created a lightweight state management pattern using the Observer design pattern and localStorage for persistence.",
  },
  {
    challenge: "Ensuring accessibility across all interactions",
    solution:
      "Added keyboard navigation, ARIA labels, and focus management following WCAG 2.1 guidelines for all interactive elements.",
  },
];

const ChallengesSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Problem Solving
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Challenges & Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every project comes with unique obstacles. Here's how I tackled
              the key technical challenges.
            </p>
          </div>

          {/* Challenges List */}
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Challenge
                      </p>
                      <p className="font-display text-lg font-semibold text-foreground">
                        {item.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                        Solution
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
