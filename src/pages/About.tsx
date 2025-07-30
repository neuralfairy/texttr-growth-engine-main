import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that drive real business growth for our clients."
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is protected with enterprise-grade security and full GDPR compliance."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology and industry best practices."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our dedicated team ensures every client achieves their lead generation goals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About 
            <span className="text-primary"> Texttr Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            We're revolutionizing B2B lead generation with data-driven strategies and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Texttr Solutions, we believe every business deserves access to high-quality leads that drive growth. 
                Founded in 2020, we've helped over 500 companies transform their sales pipelines through intelligent 
                lead generation strategies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines advanced AI technology with human expertise to deliver verified, 
                targeted prospects that convert into real business opportunities.
              </p>
              <Button className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3">
                Join Our Mission
              </Button>
            </div>
            <div className="animate-scale-in">
              <Card className="p-8 bg-gradient-hero border-0">
                <div className="text-center space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Companies Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">10M+</div>
                      <div className="text-sm text-muted-foreground">Leads Generated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Data Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">3x</div>
                      <div className="text-sm text-muted-foreground">ROI Improvement</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our experienced team combines deep industry knowledge with innovative thinking.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Former VP of Sales at Fortune 500 company with 15+ years in B2B sales.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI and data science expert with experience at leading tech companies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4"></div>
                <CardTitle>Emily Rodriguez</CardTitle>
                <CardDescription>VP of Customer Success</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Customer success specialist focused on delivering exceptional client outcomes.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3">
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;