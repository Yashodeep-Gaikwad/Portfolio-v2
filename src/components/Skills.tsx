import { useState, useEffect } from 'react';
import { Code, Database, Palette, Brain, Server, Monitor } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      title: "Web Development",
      icon: Monitor,
      skills: [
        { name: "React.js", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Flask", level: 75 },
        { name: "Responsive Design", level: 88 }
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "Scikit-learn", level: 82 },
        { name: "Pandas", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Predictive Modeling", level: 78 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "Database Design", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      skills: [
        { name: "GitHub", level: 90 },
        { name: "VSCode", level: 95 },
        { name: "Linux", level: 75 },
        { name: "Google Colab", level: 85 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Wireframing", level: 78 },
        { name: "Prototyping", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-gradient hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 tech-glow">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Operating Systems", "Computer Networking", "Problem Solving",
              "Project Management", "Team Leadership", "Technical Documentation",
              "Agile Methodology", "Version Control", "API Development",
              "Data Visualization", "Algorithm Design", "Software Architecture"
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-secondary border border-border px-4 py-2 rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;