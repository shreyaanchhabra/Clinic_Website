import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon, Instagram } from "lucide-react";
import { useState } from "react";
const Gallery = () => {
  const clinicPhotos = [
    {
      id: 1,
      title: "Reception Area",
      description: "Welcoming space for all visitors.",
      image: "ClinicPhotos/clinicreception.png"
    },
    {
      id: 2,
      title: "Waiting Room",
      description: "Comfortable seating for patients.",
      image: "ClinicPhotos/waitingroom.png",
    },
    {
      id: 3,
      title: "Clinic Exterior",
      description: "Modern and accessible entrance.",
      image: "ClinicPhotos/clinicoutside.png"
    },
    {
      id: 4,
      title: "Clinic Entrance",
      description: "Easy access for everyone.",
      image: "ClinicPhotos/clinicgate.jpg"
    },
    {
      id: 5,
      title: "Consultation Room",
      description: "Private and relaxing environment.",
      image: "ClinicPhotos/Consultationroom.png"
    },
    {
      id: 6,
      title: "Logo",
      description: "Our clinic's identity.",
      image: "ClinicPhotos/logo.png"
    },
    {
      id: 7,
      title: "Reception Desk",
      description: "Friendly staff to assist you.",
      image: "ClinicPhotos/dadquote.png"
    },
    {
      id: 8,
      title: "Dr Vishal Chhabra",
      description: "Meet our lead psychiatrist.",
      image: "ClinicPhotos/dad.png"
    }
  ];

  const [enlargedPhoto, setEnlargedPhoto] = useState<null | typeof clinicPhotos[0]>(null);

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
              A look inside our comfortable, patient-friendly clinic.

            </p>
          </div>

          {/* Clinic Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {clinicPhotos.map((photo) => (
              <Card
              key={photo.id}
              className="shadow-lg hover:shadow-2xl transition-all overflow-hidden group p-0 cursor-pointer rounded-xl border-2 border-gray-200 hover:border-primary"
              onClick={() => setEnlargedPhoto(photo)}
              style={{ minHeight: 250, minWidth: 0, aspectRatio: "4/3", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
              >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                src={photo.image} 
                alt={photo.title}
                className="block object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-xl"
                style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-xl" />
                <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
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

            {/* Enlarged Image Modal */}
            {enlargedPhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={() => setEnlargedPhoto(null)}
            >
              <div
              className="relative bg-white rounded-xl shadow-2xl p-6 max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
              >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                onClick={() => setEnlargedPhoto(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={enlargedPhoto.image}
                alt={enlargedPhoto.title}
                className="w-full h-auto rounded-xl mb-4"
                style={{ maxHeight: "70vh", objectFit: "contain" }}
              />
              <h3 className="font-semibold text-xl mb-2">{enlargedPhoto.title}</h3>
              <p className="text-base text-muted-foreground">{enlargedPhoto.description}</p>
              </div>
            </div>
            )}

          {/* Instagram Button */}
          <div className="text-center">
            <Button 
              variant="hero" 
              className="flex items-center space-x-5 mx-auto"
              onClick={() => window.open("https://www.instagram.com/drvishal2010", "_blank")}
            >
              <Instagram className="w-40 h-40" />
              <span>Visit our Instagram</span>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
