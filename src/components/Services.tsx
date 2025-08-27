import { Palette, Code, Brain, Database, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles.",
      features: [
        "Wireframing & Prototyping",
        "Responsive Design",
        "User Experience Optimization",
        "Figma Design Systems"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, responsive websites and web applications using cutting-edge technologies.",
      features: [
        "React.js Applications",
        "HTML/CSS/JavaScript",
        "Flask Backend Development",
        "API Integration"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Developing intelligent systems and predictive models to solve complex business problems.",
      features: [
        "Predictive Analytics",
        "Data-driven Applications",
        "Model Development",
        "Python & Scikit-learn"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Designing and implementing efficient database solutions for optimal data management.",
      features: [
        "SQL Database Design",
        "MongoDB Integration",
        "Data Optimization",
        "Performance Tuning"
      ],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Users,
      title: "Technical Consultation",
      description: "Providing expert guidance on technology choices and project implementation strategies.",
      features: [
        "Technology Assessment",
        "Project Planning",
        "Architecture Design",
        "Best Practices"
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analyzing complex challenges and developing innovative solutions through systematic approaches.",
      features: [
        "Algorithm Design",
        "System Optimization",
        "Innovation Consulting",
        "Technical Leadership"
      ],
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">My Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your needs, 
            from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient hover-lift group relative overflow-hidden">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 tech-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to create something amazing together. 
              I'm here to turn your vision into reality with cutting-edge technology.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-electric-blue to-neon-green text-white px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;