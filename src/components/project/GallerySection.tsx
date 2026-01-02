import { useState } from "react";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";

const screenshots = [
  {
    src: screenshot1,
    alt: "Dashboard main view with analytics",
    caption: "Main Dashboard View",
  },
  {
    src: screenshot2,
    alt: "Mobile responsive design",
    caption: "Mobile Experience",
  },
  {
    src: screenshot3,
    alt: "Landing page design",
    caption: "Landing Page",
  },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Project Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Screenshots & Previews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the various views and features of the TaskFlow Dashboard.
            </p>
          </div>

          {/* Main Gallery Image */}
          <div className="relative mb-8 rounded-2xl overflow-hidden shadow-card-hover bg-card border border-border">
            <div className="aspect-video overflow-hidden">
              <img
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <p className="text-primary-foreground font-display text-xl font-semibold">
                {screenshots[activeIndex].caption}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {screenshots.map((screenshot, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover ${
                  activeIndex === index
                    ? "ring-4 ring-primary ring-offset-2 ring-offset-background"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="aspect-video">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
