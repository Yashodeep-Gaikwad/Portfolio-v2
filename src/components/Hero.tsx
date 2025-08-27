import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/yashodeep-profile.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-green/20 blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-neon-green/20 to-electric-blue/20 blur-3xl floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center slide-up">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary pulse-glow">
                <img
                  src={profileImage}
                  alt="Yashodeep Mahendra Gaikwad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-blue/20 to-neon-green/20"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block text-gradient animated-gradient">Yashodeep Mahendra Gaikwad</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
              IT Enthusiast & Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about turning innovative ideas into practical solutions through 
              machine learning, web development, and thoughtful UI/UX design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-electric-blue to-neon-green hover:shadow-lg hover:scale-105 transition-all duration-300 text-white font-medium px-8 py-6 text-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;