import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Main text */}
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Yashodeep Mahendra Gaikwad</span>
          </p>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yashodeep Gaikwad. All rights reserved.
          </p>
          
          {/* Tech stack note */}
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;