import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
      number: "10,000+",
      label: "Patients Treated",
      icon: Users
    },
    {
      number: "24+",
      label: "Years Experience",
      icon: Award
    },
    {
      number: "14+",
      label: "Articles",
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
      title: "Family Therapy",
      description: "Comprehensive family counseling for relationship healing.",
      icon: Shield,
      features: ["Family dynamics", "Communication skills", "Conflict resolution"]
    },
    {
      title: "Medication Management",
      description: "Expert guidance on psychiatric medications for optimal mental health.",
      icon: Brain,
      features: ["Family dynamics", "Communication skills", "Conflict resolution"]
    }
  ];

  const testimonials = [
    // ... testimonials array unchanged ...
    {
      name: "Srishti Jaiswal",
      location: "Delhi",
      rating: 5,
      text: `I just wanted to share the incredible impact Dr. Vishal has had on my life. For more than a year, I was struggling with intense and frightening anxiety, feeling like I was in a really tough spot. If it weren't for his help, I honestly can't imagine where I would be today.

Dr. Vishal has been an absolute lifesaver for me. His support, guidance, and expertise have been nothing short of amazing. He truly is the best. I can't thank him enough for helping me through such a challenging time.

If you ever find yourself in need of support or guidance, I highly recommend reaching out to Dr. Vishal. Thank you, Dr. Vishal, for being the light in my darkness.`,
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
      name: "Hemant Khemani",
      location: "Delhi",
      rating: 5,
      text: `Mind diseases are much more complicated and critical than physical ailments. What more we could have asked for, a doctor who is a great listener, compassionate and kind. Found Dr. Vishal in online search, saw some of his videos on youtube and after reading the reviews booked an appointment. 
      Dr. Vishal heard our case very patiently, didn't mind staying late over multiple sessions and made sure that patient feels comfortable enough to share her mind.
      His treatment is very effective and he keeps in mind every patient's capacity of taking medicines. It took us couple of sessions to see the results and then the patient kept on getting better.
      He not only counselled the patient but also the family to deal with the situation in a better way. I am grateful to him for all his support.`,
      condition: "Family Counseling"
    },
    {
      name: "Hemant Khemani",
      rating: 5,
      location: "Delhi",
      text: `Due to some bad memories and incidents that happened in the past, I was a victim of acute depression, brain fogging, sleeping disorder etc. Unlike physical injury which is tangible, brain diseases are very difficult to diagnose and accept.

Thanks to my friend who referred me to Dr Vishal Chhabra . His great listening and pacifying skills helped me to overcome my problems . He became more of a mentor which made the session more fruitful and trustworthy. This resulted in more information sharing which is very useful for depression patients because not everything can be shared with everyone. My journey to recovery took 3 years which was a rollercoaster ride. Regular medication and counseling had played a very crucial role. Some other activities which helped me to speed up my recovery were mindful exercises, some kind of physical activity which involved yoga, gym, listening to podcasts(very helpful) , coloring mandala and other forms of activities which makes me happy.

We all are haunted by our past, learn from it, accept it and move on. It's not important to prove anything to anyone because failure is a key element to retain success. I wish I could have contacted him sooner.`,
      condition: "Depression and Sleeping Disorder"
    },
    {
      name: "Shikha Dadwal",
      rating: 5,
      location: "Pune",
      text: `After running from pillar to post, to the most brilliant doctors of New Delhi and Pune. Me and my family finally went to see Dr. Chhabra. He is not just a good doctor but also a thorough professional and a kind human being. They say mental illness is incurable but one can learn to manage it. He is a doctor who can help you do that with the right medication and advice. He is open to ideas and discussion. Me and family are forever thankful to him.`,
      condition: "Mental Health Counseling"
    },
    {
      name: "Abhishek Jain",
      rating: 5,
      location: "Delhi",
      text: `When I came to Dr Vishal in the year 2019 I was having continuous panic attacks and lost all my confidence that I would be able to complete my CA but after starting treatment from doctor Vishal my situation start to improve slowly and after struggling for 12 years I completed my dream of becoming CA in 2023. Really I want to say that doctor Vishal helped me alot in clearing my CA and in the last I want to say that if I can everybody can achieve their dreams Thanks sir once again for your support`,
      condition: "Panic Attacks and Anxiety"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Compassionate Care for
              <span className="text-primary"> Mental Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Dr. Vishal Chhabra brings over 24 years of expertise in psychiatry, providing 
              evidence-based treatment for depression, anxiety, bipolar disorder, and more.
            </p>
            {/* Stylish Image Placement */}
            <div className="flex justify-center">
                <div className="relative group w-full max-w-6xl mx-auto sm:-ml-22">
                  <img
                  src="/homepagepic2.png"
                  alt="Dr. Vishal Chhabra"
                  className="rounded-3xl shadow-2xl border-10 border-white/80 group-hover:scale-105 group-hover:shadow-3xl transition-all duration-300 object-cover w-full h-[420px] sm:h-[500px]"
                  style={{
                    objectPosition: "center top"
                  }}
                  />
                  {/* Stylish Overlay Text */}
                  { /* <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/90 px-8 py-3 rounded-full shadow-lg text-primary font-semibold text-xl border border-primary/20">
                  Dr. Vishal Chhabra 
                  </div>*/}
                </div>
            </div>
            {/* End Stylish Image */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button
                variant="default"
                size="lg"
                className="flex items-center space-x-2"
                onClick={() =>
                  window.open(
                    "https://wa.me/919899524050?text=Hi%20Dr.%20Chhabra%2C%20I%27d%20like%20to%20book%20an%20appointment.",
                    "_blank"
                  )
                }
              >
                <Calendar className="w-10 h-10" />
                <span>Book Appointment</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center space-x-2"
                onClick={() =>
                  window.open(
                    "https://wa.me/917840055258?text=Hi%20Dr.%20Chhabra%2C%20I%27d%20like%20to%20book%20an%20emergency%20appointment.",
                    "_blank"
                  )
                }
              >
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
                    <p className="text-sm text-muted-foreground">+91 98995 24050</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm text-muted-foreground">drvishal2010@yahoo.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-9 h-9 text-primary" />
                  <div>
                    <p className="font-semibold">Clinic Location</p>
                    <p className="text-sm text-muted-foreground">107-108, 1st Floor, RG-1 Complex, Opp. Balaji Mandir, Prashant Vihar Sector -14, Rohini, Delhi-110085</p>
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
                <Button
                  variant="hero"
                  size="lg"
                  className="flex items-center space-x-2"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919899524050?text=Hi%20Dr.%20Chhabra%2C%20I%27d%20like%20to%20book%20an%20appointment.",
                      "_blank"
                    )
                  }
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/treatment">
                    Learn More About Our Services
                  </Link>
                </Button>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.1153897650365!2d77.1323001752923!3d28.716097375619164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0164e213d981%3A0x1684409a2dd6b4e1!2sDr.%20Vishal%20Chhabra!5e0!3m2!1sen!2sin!4v1753887514557!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 10, borderColor: '#e6ebe5ff', borderRadius: '0.75rem' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-64 rounded-xl shadow-lg"
  title="Dr. Vishal Chhabra Location"
/>
<div className="flex flex-col items-center w-full mt-6 space-y-4">
  <Button
    asChild
    variant="default"
    size="lg"
    className="flex items-center space-x-2"
  >
    <a
      href="https://maps.app.goo.gl/HSPvYKSwt4E2U1dS6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapPin className="w-5 h-5" />
      <span>Get Directions on Google Maps</span>
    </a>
  </Button>
  <div className="bg-white/80 rounded-lg px-6 py-3 shadow text-center border border-primary/20">
    <span className="font-semibold text-primary text-lg">Clinic Timings:</span>
    <div className="mt-1 text-muted-foreground text-base">
      Mon, Tue, Wed, Fri: <span className="font-medium text-foreground">12:00 – 2:00 PM</span>
      <br />
      Mon, Tue, Wed, Fri, Sat: <span className="font-medium text-foreground">6:00 PM - 8:00 PM</span>
      <br />
      Sunday: <span className="font-medium text-foreground">CLOSED</span>
    </div>
  </div>
</div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
