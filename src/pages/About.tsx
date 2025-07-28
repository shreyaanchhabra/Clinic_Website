import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Calendar, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  const qualifications = [
    "MBBS - King George Medical University, Lucknow",
    "MD Psychiatry - All India Institute of Medical Sciences, Delhi",
    "Fellowship in Child & Adolescent Psychiatry - NIMHANS, Bangalore",
    "Diploma in Psychological Medicine - Royal College of Physicians, UK"
  ];

  const experience = [
    {
      title: "Senior Consultant Psychiatrist",
      organization: "Apollo Hospitals, Mumbai",
      duration: "2018 - Present",
      description: "Leading the mental health department and specialized treatment programs"
    },
    {
      title: "Associate Professor",
      organization: "Grant Medical College, Mumbai",
      duration: "2015 - 2018",
      description: "Teaching and research in psychiatry and mental health"
    },
    {
      title: "Consultant Psychiatrist",
      organization: "Fortis Healthcare, Delhi",
      duration: "2012 - 2015",
      description: "Clinical practice and patient care in general psychiatry"
    }
  ];

  const achievements = [
    "Published 25+ research papers in international journals",
    "Speaker at 15+ national and international conferences",
    "Recipient of 'Best Psychiatrist Award' - Indian Medical Association 2022",
    "Successfully treated 2000+ patients with various mental health conditions",
    "Established innovative treatment protocols for bipolar disorder"
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              About Dr. Rajesh Kumar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A compassionate psychiatrist dedicated to providing comprehensive mental health care 
              with over 15 years of experience in treating various psychiatric conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Image & Quick Info */}
            <div className="lg:col-span-1">
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-white">DK</span>
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="font-display font-semibold text-xl">Dr. Rajesh Kumar</h3>
                    <p className="text-muted-foreground">MD Psychiatry, MBBS</p>
                    <Badge variant="secondary" className="mx-auto">15+ Years Experience</Badge>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Mumbai, Maharashtra</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>dr.rajesh@drmindcare.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Philosophy */}
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Professional Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in a holistic approach to mental health, combining evidence-based treatments 
                    with compassionate care. My practice focuses on understanding each patient's unique 
                    circumstances and creating personalized treatment plans that address not just symptoms, 
                    but the whole person. Mental health is not just the absence of illness, but the presence 
                    of well-being, resilience, and the ability to cope with life's challenges.
                  </p>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-xl mb-4">Areas of Specialization</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Depression & Anxiety Disorders",
                      "Bipolar Disorder",
                      "Schizophrenia & Psychotic Disorders",
                      "Child & Adolescent Psychiatry",
                      "Addiction & Substance Abuse",
                      "Personality Disorders",
                      "PTSD & Trauma Therapy",
                      "Cognitive Behavioral Therapy"
                    ].map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education & Qualifications */}
          <Card className="shadow-soft hover:shadow-medium transition-shadow mb-8">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education & Qualifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-hero">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">{qual}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-soft hover:shadow-medium transition-shadow mb-8">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-soft hover:shadow-medium transition-shadow">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Achievements & Recognition
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-hero">
                    <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;