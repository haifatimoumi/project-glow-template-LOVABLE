const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2024 Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
