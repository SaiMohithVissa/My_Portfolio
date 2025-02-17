import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface ImageGalleryProps {
  title: string;
  images: string[];
}

export function ImageGallery({ title, images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
        />
        
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <button
          onClick={() => setIsExpanded(true)}
          className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
        >
          <Expand className="w-6 h-6" />
        </button>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black/90 z-50 p-4 md:p-8 overflow-auto">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            Close
          </button>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full aspect-video object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}