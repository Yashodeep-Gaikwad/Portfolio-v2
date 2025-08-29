import { ExternalLink, Github, Brain, Music, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "Wellness Weave",
      description: "ML-based disease prediction and medicine recommendation system that helps users identify potential health issues and get appropriate medicine suggestions through intelligent algorithms.",
      icon: Brain,
      technologies: ["Python", "Flask", "Scikit-learn", "JavaScript", "HTML/CSS"],
      features: [
        "Disease prediction using ML algorithms",
        "Medicine recommendation system",
        "User-friendly web interface",
        "Data-driven health insights"
      ],
      links: {
        github: "#",
        website: "#"
      },
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Y-Tunes",
      description: "Modern music streaming UI interface prototype featuring an intuitive design, responsive layout, and smooth user experience for music lovers.",
      icon: Music,
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      features: [
        "Responsive music player interface",
        "Modern UI/UX design",
        "Interactive playlist management",
        "Cross-device compatibility"
      ],
      links: {
        github: "#",
        website: "https://y-tunes.netlify.app/"
      },
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Precision Agriculture",
      description: "Crop yield prediction and fertilizer recommendation system using machine learning to help farmers optimize their agricultural practices and improve productivity.",
      icon: Leaf,
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      features: [
        "Crop yield prediction models",
        "Fertilizer recommendation engine",
        "Agricultural data analysis",
        "Farmer-friendly insights"
      ],
      links: {
        github: "#",
        website: null
      },
      gradient: "from-green-500/20 to-yellow-500/20"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating expertise in machine learning, 
            web development, and user experience design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient hover-lift group relative overflow-hidden h-full">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center tech-glow">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-block bg-secondary/50 text-foreground px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                  {project.links.website && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-electric-blue to-neon-green text-white hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(project.links.website, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover additional projects, contributions, and code samples on my GitHub profile.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-green text-white hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('https://github.com/Yashodeep-Gaikwad', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;