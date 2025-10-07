import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          {/* Main text */}
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <Code className="h-4 w-4 text-primary" />
            <span>Yashodeep Mahendra Gaikwad</span>
          </p>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yashodeep Gaikwad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;