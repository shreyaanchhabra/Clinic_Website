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
      title: "Comprehensive Psychiatric Evaluation",
      description: "Thorough mental health assessments to diagnose conditions and create personalized treatment plans.",
      duration: "25-30 minutes",
      frequency: "Weekly or bi-weekly"
    },
    {
      title: "Individual Psychotherapy",
      description: "Supportive one-on-one sessions to address personal challenges and improve emotional well-being. Handled by a trained therapist.",
      duration: "40 minutes",
      frequency: "Weekly sessions"
    },
    {
      title: "Crisis Intervention & Emergency Consultations",
      description: "Immediate support for acute mental health crises including sucidal ideation or panic eposodes. Can be done via phone or in-person. ",
      duration: "20-30 minutes",
      frequency: "As needed"
    },
    {
      title: "Medication Management",
      description: "Careful monitoring and adjustment of psychiatric medications. Medicines are prescribed based on individual needs and can be shipped to your home.",
      duration: "15 minutes",
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
            <Button variant="hero" size="lg" className="flex items-center space-x-2"
            onClick={() =>
                  window.open(
                    "https://wa.me/917840055258?text=Hi%20Dr.%20Chhabra%2C%20I%27d%20like%20to%20book%20an%20emergency%20appointment.",
                    "_blank"
                  )
                }>
              <Phone className="w-5 h-5" />
              <span>Emergency Consultation</span>
            </Button>
            <Button variant="appointment" size="lg" className="flex items-center space-x-2"
            onClick={() =>
                  window.open(
                    "https://wa.me/919899524050?text=Hi%20Dr.%20Chhabra%2C%20I%27d%20like%20to%20book%20an%20appointment.",
                    "_blank"
                  )
                }>
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Button>
          </div>

          {/* Conditions We Treat */}
          {/* 
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
          */}

                {/* Carousel for Conditions We Treat */}
                <div className="mb-16">
                <h2 className="text-3xl font-display font-bold text-center mb-12">
                  Conditions We Treat
                </h2>
                {/* Simple carousel implementation */}
                {/* <ConditionCarousel /> */}
                <ConditionCarousel />
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
/**
 * Carousel component for "Conditions We Treat"
 * Shows 9 cards, 3 at a time, with next/prev buttons.
 */
import React, { useState } from "react";

// Define ConditionCards array based on the conditions data above
const ConditionCards = [
    {
        title: "Mood Disorders",
            description: "Comprehensive treatment for depression, bipolar disorder, dysthymia, and other mood-related illnesses using a balanced psychiatric approach.",
                commonSymptoms: ["Extreme mood swings", "Low Energy or Fatigue", "Persistent sadness or emptiness", "Hopelessness or irritability"],
                    howWeHelp: ["Antidepressants and Mood stabilizers", "Psychotherapy", "Lifestyle counseling", "Long-term medication management"]
                      },
                        {
                            title: "Psychosis",
                                description: "Diagnosis and management of schizophrenia, delusional disorders, and other psychotic conditions with a focus on long-term recovery and stability.",
                                    commonSymptoms: ["Hallucinations(seeing/hearing things)", "Delusions or False Beliefs", "Disorganised thinking or behaviour", "Social withdrawal or isolation"],
                                        howWeHelp: ["Antipsychotic medications", "Individualised rehabilitation plans", "Mindfulness training", "Regular psychiatric evaluations"]
                                          },
                                            {
                                                title: "Headaches and Somatoform Disorders",
                                                    description: "Evaluation of chronic headaches and psychosomatic symptoms that have no clear medical cause but are linked to emotional distress.",
                                                        commonSymptoms: ["Tension headaches", "Migraines", "Unexplained body pain or fatigue", "Gastrointestinal issues with no medical basis"],
                                                            howWeHelp: ["Anti-anxiety medication", "Biofeedback and stress management", "Relaxation techniques", "Lifestyle changes"]
                                                              },
                                                                {
                                                                    title: "Alcohol and other Addiction Disorders",
                                                                        description: "Evidence-based treatment for alcohol, drug, and behavioral addictions with a focus on medical detox, relapse prevention, and support systems.",
                                                                            commonSymptoms: ["Cravings and loss of Control", "Neglecting responsibilities", "Withdrawal symptoms, Continued use despite harm", "Social or relationship problems"],
                                                                                howWeHelp: ["Detoxification support", "Anti-craving medicines", "Social skills training", "Family counselling"]
                                                                                  },
                                                                                  {
                                                                    title: "Anxiety Disorders",
                                                                        description: "Specialized psychiatric care for generalized anxiety, panic attacks, phobias, OCD, and social anxiety disorders.",
                                                                            commonSymptoms: ["Excessive worry or tension", "Avoidance of situations", "Panic attacks and restlessness, Compulsive behaviors"],
                                                                                howWeHelp: ["SSRIs and anti-anxiety medications", "Lifestyle Coa", "Social skills training", "Family counselling"]

                                                                                  },
                                                                                    {
                                                                                        title: "Sleep Disorders",
                                                                                            description: "Treatment for insomnia, hypersomnia, parasomnias, and sleep disruptions caused by stress, anxiety, or psychiatric illness.",
                                                                                                commonSymptoms: ["Difficulty falling or staying asleep", "Daytime fatigue and poor focus", "Nightmares or sleep walking", "Sleep related anxiety"],
                                                                                                    howWeHelp: ["Melatonin and other medications)", "Addressing underlying mental health issues", "Sleep hygiene training", "Supportive counseling"] },
                                                                                                      {
                                                                                                          title: "Childhood Disorders",
                                                                                                              description: "Evaluation and treatment of ADHD, Autism Spectrum Disorders, behavioral problems, and school-related mental health concerns.",
                                                                                                                  commonSymptoms: ["Inattention or hyperactivity", "Social withdrawal", "Emotional outbursts", "Learning difficulties","Repetitive behaviors (in Autism)"],
                                                                                                                      howWeHelp: ["Behavioral therapy", "Parent management and training", "Medication management", "School support and accommodations"]
                                                                                                                        },
                                                                                                                        { title : "Neuropsychiatric Disorders",
                                                                                                                          description: "Integrated psychiatric support for patients with neurological conditions like epilepsy, dementia, or Parkinson’s disease with psychiatric symptoms.",
                                                                                                                            commonSymptoms: ["Seizures or convulsions", "Cognitive impairments", "Mood changes or irritability", "Sleep disturbances"],
                                                                                                                              howWeHelp: ["Antiepileptic medications", "Cognitive rehabilitation", "Psychiatric evaluation for behavioural changes", "Lifestyle modifications"]
                                                                                                                            }
];

const ConditionCarousel: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const cardsToShow = 3;
  const total = ConditionCards.length;

  const prev = () => setStartIdx((prev) => (prev - cardsToShow + total) % total);
  const next = () => setStartIdx((prev) => (prev + cardsToShow) % total);

  const visibleCards = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleCards.push(ConditionCards[(startIdx + i) % total]);
  }

  return (
    <div className="relative">
      <div className="flex justify-center gap-8 mb-6">
        <button
          className="p-3 rounded-full bg-muted hover:bg-accent transition shadow-lg flex items-center justify-center"
          onClick={prev}
          aria-label="Previous"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#e0e7ff" />
            <path d="M18 10l-6 6 6 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="p-3 rounded-full bg-muted hover:bg-accent transition shadow-lg flex items-center justify-center"
          onClick={next}
          aria-label="Next"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#e0e7ff" />
            <path d="M14 10l6 6-6 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleCards.map((card, idx) => (
          <Card
            key={idx}
            className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 min-h-[420px] flex flex-col"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-display font-bold mb-2">{card.title}</CardTitle>
              <p className="text-muted-foreground text-base mb-2">{card.description}</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wide">Common Symptoms</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-2">
                    {card.commonSymptoms.map((symptom, i) => (
                      <li key={i}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 text-sm uppercase tracking-wide">How We Help</h4>
                  <ul className="list-disc list-inside text-sm text-foreground space-y-1 pl-2">
                    {card.howWeHelp.map((help, i) => (
                      <li key={i}>{help}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Treatment;