import { ArrowRight, Download, Sparkles } from 'lucide-react';
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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-green/20 blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-neon-green/20 to-electric-blue/20 blur-3xl floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-2xl floating-animation" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-electric-blue/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-neon-green/60 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-electric-blue/40 rounded-full animate-pulse" style={{ animationDelay: '2.1s' }}></div>
      </div>

      {/* Glassmorphism container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="backdrop-blur-sm bg-white/5 dark:bg-black/20 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="text-center slide-up">
            {/* Enhanced Profile Image */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue via-neon-green to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Yashodeep Mahendra Gaikwad"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 to-neon-green/10"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-electric-blue to-neon-green p-2 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Main Content */}
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-foreground/90 text-2xl md:text-3xl lg:text-4xl font-normal mb-2 tracking-wide">Hello, I'm</span>
                  <span className="block text-gradient animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-neon-green to-purple-500 bg-size-200 animate-gradient">
                    Yashodeep
                  </span>
                  <span className="block text-gradient animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-electric-blue to-neon-green bg-size-200 animate-gradient" style={{ animationDelay: '0.5s' }}>
                    Mahendra Gaikwad
                  </span>
                </h1>
                
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent w-24"></div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
                    IT Enthusiast & Developer
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-neon-green to-transparent w-24"></div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
                Passionate about turning <span className="text-electric-blue font-medium">innovative ideas</span> into 
                <span className="text-neon-green font-medium"> practical solutions</span> through 
                machine learning, web development, and thoughtful UI/UX design.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="group relative bg-gradient-to-r from-electric-blue to-neon-green hover:from-electric-blue/90 hover:to-neon-green/90 hover:shadow-2xl hover:shadow-electric-blue/25 hover:scale-105 transition-all duration-500 text-white font-semibold px-10 py-7 text-lg rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative border-2 border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue hover:shadow-lg hover:shadow-electric-blue/20 hover:scale-105 transition-all duration-500 px-10 py-7 text-lg rounded-full backdrop-blur-sm bg-white/5"
                >
                  <span className="flex items-center">
                    Download CV
                    <Download className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              {/* Stats or badges */}
              <div className="flex flex-wrap justify-center gap-6 pt-8">
                <div className="backdrop-blur-sm bg-white/5 rounded-full px-6 py-3 border border-white/10">
                  <span className="text-electric-blue font-semibold">5+</span>
                  <span className="text-muted-foreground ml-2">Projects</span>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-full px-6 py-3 border border-white/10">
                  <span className="text-neon-green font-semibold">3+</span>
                  <span className="text-muted-foreground ml-2">Years Learning</span>
                </div>
                <div className="backdrop-blur-sm bg-white/5 rounded-full px-6 py-3 border border-white/10">
                  <span className="text-purple-400 font-semibold">∞</span>
                  <span className="text-muted-foreground ml-2">Passion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-electric-blue/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-gradient-to-b from-electric-blue to-neon-green rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 border-2 border-electric-blue/30 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;