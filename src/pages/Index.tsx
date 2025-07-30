import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Prospecting",
      description: "AI-powered lead identification with 95% accuracy rate"
    },
    {
      icon: Users,
      title: "500M+ Verified Contacts",
      description: "Access to the largest B2B database with real-time updates"
    },
    {
      icon: TrendingUp,
      title: "3x Higher Conversion",
      description: "Proven strategies that accelerate your sales pipeline"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechCorp",
      role: "VP of Sales",
      content: "Texttr transformed our lead generation. We saw a 300% increase in qualified leads within the first month.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "GrowthLabs",
      role: "CEO",
      content: "The quality of leads is exceptional. Our sales team is now focused on closing deals, not hunting for prospects.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      company: "ScaleUp Inc",
      role: "Marketing Director",
      content: "ROI was immediate. Texttr paid for itself in the first week through the deals we closed.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Companies Served" },
    { number: "10M+", label: "Leads Generated" },
    { number: "95%", label: "Data Accuracy" },
    { number: "3x", label: "ROI Improvement" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gradient-primary text-primary-foreground">
                #1 B2B Lead Generation Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Generate High-Quality 
                <span className="text-primary"> B2B Leads</span> That Convert
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop wasting time on unqualified prospects. Texttr delivers verified, targeted leads 
                that accelerate your sales pipeline and drive real business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-3">
                  Book Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  14-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-primary mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={heroImage} 
                alt="B2B Lead Generation Dashboard" 
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Texttr for Lead Generation?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach delivers the highest quality B2B leads in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how companies like yours are accelerating growth with Texttr
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already accelerating their growth with Texttr's proven lead generation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-lg px-8 py-3 shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
