import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Instagram } from "lucide-react";

const Gallery = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Navbar />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Clinic Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A look inside our comfortable, patient-friendly clinic spaces.
            </p>
          </div>

          {/* Clinic Photos */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
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

          {/* Instagram Button */}
          <div className="text-center">
            <Button 
              variant="hero" 
              className="flex items-center space-x-2 mx-auto"
              onClick={() => window.open("https://www.instagram.com/drvishal2010", "_blank")}
            >
              <Instagram className="w-4 h-4" />
              <span>Visit Instagram</span>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
