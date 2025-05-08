
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images
  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Rehearsal session for Earth's Origins dance" },
    { src: "/images/gallery-2.jpg", alt: "Stage design for Harmony Restored" },
    { src: "/images/gallery-3.jpg", alt: "Student musicians practicing natural sounds" },
    { src: "/images/gallery-4.jpg", alt: "Costume design for the elements" },
    { src: "/images/gallery-5.jpg", alt: "Behind the scenes of prop making" },
    { src: "/images/gallery-6.jpg", alt: "Lighting rehearsal for Act II" }
  ];

  return (
    <section id="gallery" className="py-20 bg-nbdk-neutral-light text-nbdk-neutral-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-nbdk-blue-dark">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <p className="text-white p-4 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Dialog */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
