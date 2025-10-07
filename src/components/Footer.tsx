import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
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