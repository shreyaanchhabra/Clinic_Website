import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Users, 
  Award, 
  Heart,
  Brain,
  Shield,
  Star,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const achievements = [
    {
      number: "2000+",
      label: "Patients Treated",
      icon: Users
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: Award
    },
    {
      number: "25+",
      label: "Research Papers",
      icon: Brain
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: CheckCircle
    }
  ];

  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your specific mental health needs.",
      icon: Heart,
      features: ["Personalized treatment", "Confidential sessions", "Flexible scheduling"]
    },
    {
      title: "Group Counseling",
      description: "Supportive group sessions for shared experiences and healing.",
      icon: Users,
      features: ["Peer support", "Shared experiences", "Cost-effective"]
    },
    {
      title: "Family Therapy",
      description: "Comprehensive family counseling for relationship healing.",
      icon: Shield,
      features: ["Family dynamics", "Communication skills", "Conflict resolution"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Dr. Kumar helped me overcome my anxiety. His compassionate approach made all the difference.",
      condition: "Anxiety Disorder"
    },
    {
      name: "Rajesh Patel",
      location: "Delhi",
      rating: 5,
      text: "Excellent treatment for my bipolar disorder. Professional, caring, and effective.",
      condition: "Bipolar Disorder"
    },
    {
      name: "Anita Singh",
      location: "Bangalore",
      rating: 5,
      text: "The family therapy sessions transformed our relationships. Highly recommended!",
      condition: "Family Counseling"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Leading Mental Health Care in India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Compassionate Care for
              <span className="text-primary"> Mental Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Dr. Rajesh Kumar brings over 15 years of expertise in psychiatry, providing 
              evidence-based treatment for depression, anxiety, bipolar disorder, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Emergency Consultation</span>
              </Button>
            </div>
          </div>

          {/* Quick Contact */}
          <Card className="shadow-medium bg-white/80 backdrop-blur-sm mb-16">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Call Now</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-muted-foreground">contact@drmindcare.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mental health services designed to meet your unique needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center justify-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from people whose lives have been transformed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.condition}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong bg-gradient-hero border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Ready to Start Your Journey to Better Mental Health?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take the first step towards healing. Book a consultation today and 
                discover how we can help you achieve mental wellness.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More About Our Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
