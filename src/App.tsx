import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Linkedin, Phone, ExternalLink, Expand } from 'lucide-react';
import { ImageGallery } from './components/ImageGallery';
import { SocialLink } from './components/SocialLink';
import { Achievement } from './components/Achievement';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 md:px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm John Doe
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              As a passionate photographer, I believe every frame tells a unique story. Through my lens, 
              I capture moments that speak volumes, whether it's the raw emotion of street photography 
              or the calculated precision of studio work. My journey in photography has been about 
              pushing boundaries and finding beauty in unexpected places.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
              alt="Portrait of photographer"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageGallery 
              title="Mobile Photography"
              images={[
                "https://images.unsplash.com/photo-1551650975-87deedd944c3",
                "https://images.unsplash.com/photo-1604537466158-719b1972feb8",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              ]}
            />
            <ImageGallery 
              title="DSLR Photography"
              images={[
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
                "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2",
                "https://images.unsplash.com/photo-1682687982501-1e58ab814714"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <Achievement 
            title="Global Ability Photography Challenge Winner"
            description="Honored to be recognized in a competition that celebrates the power of visual storytelling. This achievement has fueled my passion to capture more compelling narratives through my lens."
            image="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800/50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Featured In</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={20} />
                  <span>Photography Today Magazine</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  <ExternalLink size={20} />
                  <span>Digital Arts Quarterly</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1554151228-14d9def656e4"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold mb-4">John Doe</h4>
            <div className="flex gap-4">
              <SocialLink icon={Mail} href="mailto:contact@johndoe.com" />
              <SocialLink icon={Linkedin} href="https://linkedin.com/in/johndoe" />
              <SocialLink icon={Phone} href="tel:+1234567890" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;