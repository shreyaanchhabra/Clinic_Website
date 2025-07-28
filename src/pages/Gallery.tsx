import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Share,
  Instagram,
  Video,
  Image as ImageIcon,
  Award
} from "lucide-react";

const Gallery = () => {
  const instagramReels = [
    {
      id: 1,
      title: "Understanding Bipolar Disorder",
      description: "Quick tips on recognizing bipolar symptoms and when to seek help.",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=600&fit=crop",
      views: "12.5K",
      likes: "892",
      category: "Education"
    },
    {
      id: 2,
      title: "5 Daily Habits for Mental Wellness",
      description: "Simple practices that can improve your mental health every day.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      views: "8.3K",
      likes: "654",
      category: "Wellness"
    },
    {
      id: 3,
      title: "Dealing with Anxiety at Work",
      description: "Practical strategies to manage workplace anxiety and stress.",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
      views: "15.2K",
      likes: "1.1K",
      category: "Tips"
    },
    {
      id: 4,
      title: "Meditation for Beginners",
      description: "Step-by-step guide to start your meditation practice today.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      views: "9.7K",
      likes: "743",
      category: "Wellness"
    },
    {
      id: 5,
      title: "Supporting a Loved One with Depression",
      description: "How to be there for someone struggling with depression.",
      thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=600&fit=crop",
      views: "11.8K",
      likes: "925",
      category: "Support"
    },
    {
      id: 6,
      title: "Sleep Hygiene for Better Mental Health",
      description: "The connection between quality sleep and mental wellness.",
      thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=600&fit=crop",
      views: "7.4K",
      likes: "512",
      category: "Health"
    }
  ];

  const clinicPhotos = [
    {
      id: 1,
      title: "Reception Area",
      description: "Welcoming and comfortable reception with soothing ambiance.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Consultation Room",
      description: "Private consultation space designed for comfort and confidentiality.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Group Therapy Room",
      description: "Spacious room for group sessions and workshops.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Relaxation Area",
      description: "Peaceful space for patients to relax before appointments.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop"
    }
  ];

  const awards = [
    {
      title: "Best Psychiatrist Award 2022",
      organization: "Indian Medical Association",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=400&fit=crop"
    },
    {
      title: "Excellence in Mental Health Care",
      organization: "National Healthcare Awards",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop"
    },
    {
      title: "Community Service Recognition",
      organization: "Mumbai Medical Council",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba4fed8?w=300&h=400&fit=crop"
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
              Gallery & Social Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our educational content, clinic facilities, and achievements. 
              Follow us on social media for daily mental health tips and insights.
            </p>
          </div>

          {/* Instagram Reels Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-display font-bold">
                Instagram Reels
              </h2>
              <Button variant="outline" className="flex items-center space-x-2">
                <Instagram className="w-4 h-4" />
                <span>Follow @drmindcare</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramReels.map((reel) => (
                <Card key={reel.id} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={reel.thumbnail} 
                      alt={reel.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      <Video className="w-3 h-3 mr-1" />
                      {reel.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-1">{reel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {reel.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{reel.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{reel.views}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Clinic Photos */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Our Clinic
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {clinicPhotos.map((photo) => (
                <Card key={photo.id} className="shadow-soft hover:shadow-medium transition-all overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={photo.image} 
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                    <Badge className="absolute top-3 right-3" variant="secondary">
                      <ImageIcon className="w-3 h-3 mr-1" />
                      Photo
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all text-center">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img 
                        src={award.image} 
                        alt={award.title}
                        className="w-24 h-32 object-cover rounded-lg mx-auto"
                      />
                      <div className="absolute -top-2 -right-2">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-accent-foreground" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-display font-semibold mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Media CTA */}
          <div className="mt-16 text-center">
            <Card className="shadow-soft bg-gradient-hero">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Stay Connected
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Follow us on social media for daily mental health tips, educational content, 
                  and updates about our services. Join our community of mental wellness advocates.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" className="flex items-center space-x-2">
                    <Instagram className="w-4 h-4" />
                    <span>Follow on Instagram</span>
                  </Button>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Join Community</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;