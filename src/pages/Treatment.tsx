import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Shield, 
  Users, 
  Calendar,
  CheckCircle,
  Phone,
  MessageCircle,
  Clock
} from "lucide-react";

const Treatment = () => {
  const conditions = [
    {
      title: "Bipolar Disorder",
      description: "Comprehensive treatment for mood episodes, including mania and depression phases.",
      symptoms: ["Extreme mood swings", "Energy fluctuations", "Sleep disturbances", "Impulsive behavior"],
      treatments: ["Mood stabilizers", "Psychotherapy", "Lifestyle counseling", "Family therapy"],
      icon: Brain,
      color: "bg-blue-500"
    },
    {
      title: "Depression",
      description: "Evidence-based treatment approaches for major depressive disorder and chronic depression.",
      symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Concentration problems"],
      treatments: ["Antidepressants", "CBT therapy", "Mindfulness training", "Support groups"],
      icon: Heart,
      color: "bg-rose-500"
    },
    {
      title: "Anxiety Disorders",
      description: "Specialized care for generalized anxiety, panic disorder, and social anxiety.",
      symptoms: ["Excessive worry", "Panic attacks", "Avoidance behavior", "Physical tension"],
      treatments: ["Anti-anxiety medication", "Exposure therapy", "Relaxation techniques", "Lifestyle changes"],
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "Schizophrenia",
      description: "Comprehensive care for psychotic disorders with focus on rehabilitation.",
      symptoms: ["Hallucinations", "Delusions", "Disorganized thinking", "Social withdrawal"],
      treatments: ["Antipsychotics", "Rehabilitation therapy", "Social skills training", "Family support"],
      icon: Users,
      color: "bg-purple-500"
    }
  ];

  const treatmentApproaches = [
    {
      title: "Individual Psychotherapy",
      description: "One-on-one sessions tailored to your specific needs and goals.",
      duration: "45-60 minutes",
      frequency: "Weekly or bi-weekly"
    },
    {
      title: "Group Therapy",
      description: "Peer support sessions for shared experiences and collective healing.",
      duration: "90 minutes",
      frequency: "Weekly sessions"
    },
    {
      title: "Family Counseling",
      description: "Involving family members in the treatment process for better outcomes.",
      duration: "60 minutes",
      frequency: "Bi-weekly or monthly"
    },
    {
      title: "Medication Management",
      description: "Careful monitoring and adjustment of psychiatric medications.",
      duration: "30 minutes",
      frequency: "Monthly or as needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Treatment & Counselling
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive mental health care with evidence-based treatments tailored to your unique needs. 
              We provide compassionate care for a wide range of psychiatric conditions.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Emergency Consultation</span>
            </Button>
            <Button variant="appointment" size="lg" className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Chat Support</span>
            </Button>
          </div>

          {/* Conditions We Treat */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Conditions We Treat
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {conditions.map((condition, index) => {
                const IconComponent = condition.icon;
                return (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${condition.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-display">{condition.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">Specialized Care</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {condition.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Common Symptoms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {condition.symptoms.map((symptom, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Treatment Options:</h4>
                        <div className="space-y-1">
                          {condition.treatments.map((treatment, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{treatment}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Treatment Approaches */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Our Treatment Approaches
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentApproaches.map((approach, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h3 className="font-display font-semibold mb-3">{approach.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {approach.description}
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-3 h-3 text-primary" />
                        <span>Duration: {approach.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span>{approach.frequency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Treatment Process */}
          <Card className="shadow-soft hover:shadow-medium transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-center">
                Your Treatment Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Initial Assessment",
                    description: "Comprehensive evaluation of your mental health concerns and medical history."
                  },
                  {
                    step: "2",
                    title: "Diagnosis & Planning",
                    description: "Accurate diagnosis and development of a personalized treatment plan."
                  },
                  {
                    step: "3",
                    title: "Treatment Implementation",
                    description: "Beginning therapy sessions and/or medication as recommended."
                  },
                  {
                    step: "4",
                    title: "Progress Monitoring",
                    description: "Regular follow-ups to track progress and adjust treatment as needed."
                  }
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                      {phase.step}
                    </div>
                    <h3 className="font-semibold mb-2">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
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

export default Treatment;