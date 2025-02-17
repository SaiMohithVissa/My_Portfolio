import React from 'react';

interface AchievementProps {
  title: string;
  description: string;
  image: string;
}

export function Achievement({ title, description, image }: AchievementProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
        <div className="relative aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}