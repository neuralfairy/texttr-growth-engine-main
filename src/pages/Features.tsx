import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, TrendingUp, Zap, Database, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Prospecting",
      description: "AI-powered lead identification that finds your ideal customers based on precise criteria and behavioral data.",
      benefits: ["95% accuracy rate", "Real-time data updates", "Custom filtering"]
    },
    {
      icon: Users,
      title: "B2B Database Access",
      description: "Access to millions of verified B2B contacts with comprehensive company and contact information.",
      benefits: ["500M+ contacts", "GDPR compliant", "Email verification"]
    },
    {
      icon: TrendingUp,
      title: "Sales Acceleration",
      description: "Automated outreach sequences and follow-ups that increase response rates and conversion.",
      benefits: ["3x higher response rates", "Automated follow-ups", "A/B testing"]
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Live analytics and reporting to track campaign performance and optimize your lead generation.",
      benefits: ["Live dashboards", "ROI tracking", "Performance metrics"]
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with popular CRMs like Salesforce, HubSpot, and Pipedrive.",
      benefits: ["One-click sync", "Data mapping", "Workflow automation"]
    },
    {
      icon: Settings,
      title: "Custom Automation",
      description: "Build custom workflows and automation rules to streamline your entire lead generation process.",
      benefits: ["Visual workflow builder", "Custom triggers", "Smart routing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Powerful Features for 
            <span className="text-primary"> Lead Generation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover the comprehensive suite of tools designed to supercharge your B2B sales pipeline and convert prospects into customers.
          </p>
          <Button className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3 animate-scale-in">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Generate Quality Leads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with proven sales strategies to deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Integrates with Your Favorite Tools
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect seamlessly with the tools you already use to create a unified sales workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
            <div className="text-2xl font-bold">Salesforce</div>
            <div className="text-2xl font-bold">HubSpot</div>
            <div className="text-2xl font-bold">Pipedrive</div>
            <div className="text-2xl font-bold">Zapier</div>
          </div>

          <div className="mt-16">
            <Button className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-3">
              View All Integrations
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;