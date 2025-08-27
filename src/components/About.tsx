import { GraduationCap, Award, Users, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "JSPM's Rajarshi Shahu College of Engineering, Pune",
      period: "Nov 2022 – Present",
      grade: "CGPA: 7.23"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Modhoji High School & Jr. College, Phaltan",
      period: "Feb 2021 – Mar 2022",
      grade: "67.63%"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Modhoji High School & Jr. College, Phaltan",
      period: "Jun 2019 – Mar 2020",
      grade: "93.80%"
    }
  ];

  const experience = [
    {
      role: "District Communication Director",
      organization: "Rotaract District 3131",
      period: "Jul 2025 – Jun 2026",
      icon: Users,
      description: "Leading communication strategies across the district"
    },
    {
      role: "President",
      organization: "Rotaract Club of RSCOE",
      period: "Jul 2024 – Jun 2025",
      icon: Award,
      description: "Managing club operations and community service initiatives"
    },
    {
      role: "Volunteer Member",
      organization: "National Service Scheme (NSS)",
      period: "Aug 2023 – Dec 2024",
      icon: Users,
      description: "Participating in community development programs"
    },
    {
      role: "NCC Cadet",
      organization: "National Cadet Corps",
      period: "Jun 2017 – Mar 2020",
      icon: Shield,
      description: "Developing leadership and discipline through military training"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate IT enthusiast dedicated to creating innovative solutions through technology, 
            leadership, and community involvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                I'm Yashodeep Mahendra Gaikwad, an IT enthusiast currently pursuing my Bachelor's 
                in Information Technology. My passion lies in the intersection of technology and 
                human experience, where I strive to create solutions that make a real difference.
              </p>
              <p>
                With expertise spanning machine learning, web development, and UI/UX design, 
                I enjoy tackling complex problems and transforming ideas into practical, 
                user-friendly applications.
              </p>
              <p>
                Beyond technical skills, I'm deeply involved in community service and leadership 
                roles, believing that technology should serve to better society and create 
                opportunities for everyone.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="card-gradient hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="card-gradient hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="card-gradient hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </CardContent>
            </Card>
            <Card className="card-gradient hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Leadership Roles</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center">
            <GraduationCap className="mr-3 h-8 w-8 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-8 flex items-center justify-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            Experience & Leadership
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="card-gradient hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;