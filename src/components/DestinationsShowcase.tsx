import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import palaceImage from '@/assets/palace-india.jpg';
import marketplaceImage from '@/assets/marketplace-middle-east.jpg';

const destinations = [
  {
    id: 1,
    title: "Rajasthan Royal Heritage",
    subtitle: "राजस्थान की शाही विरासत",
    location: "Rajasthan, India",
    duration: "8 Days, 7 Nights",
    groupSize: "6-12 People",
    price: "₹45,000",
    rating: 4.9,
    reviews: 245,
    image: palaceImage,
    description: "Journey through the land of kings and explore magnificent palaces, vibrant markets, and the golden Thar Desert.",
    highlights: ["Amber Fort", "City Palace Udaipur", "Camel Safari", "Traditional Cuisine"],
    cultural: "Mughal & Rajput Architecture"
  },
  {
    id: 2,
    title: "Arabian Nights Experience",
    subtitle: "تجربة الليالي العربية",
    location: "Dubai & Abu Dhabi, UAE",
    duration: "6 Days, 5 Nights",
    groupSize: "4-10 People",
    price: "AED 3,200",
    rating: 4.8,
    reviews: 189,
    image: marketplaceImage,
    description: "Immerse yourself in the magic of Arabian culture, from bustling souks to serene desert landscapes.",
    highlights: ["Traditional Souk", "Desert Safari", "Burj Khalifa", "Cultural Villages"],
    cultural: "Islamic Art & Architecture"
  }
];

const DestinationsShowcase = () => {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gradient-royal mb-6">
            Curated Cultural Journeys
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            Each destination tells a story. Each journey becomes a memory. 
            Discover handpicked experiences that celebrate the rich heritage of our regions.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="card-immersive overflow-hidden h-full">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `linear-gradient(
                        45deg, 
                        rgba(0,0,0,0.3) 0%, 
                        rgba(255,140,0,0.2) 50%, 
                        rgba(0,0,0,0.3) 100%
                      ), url(${destination.image})`
                    }}
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-playfair font-bold mb-1">
                      {destination.title}
                    </h3>
                    <p className="text-primary-light text-sm font-amiri">
                      {destination.subtitle}
                    </p>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-800">{destination.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Location & Details */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-primary" />
                      {destination.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-secondary" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-accent" />
                      {destination.groupSize}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground mb-4 font-inter leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Cultural Theme */}
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-sunset text-white text-xs px-3 py-1 rounded-full font-medium">
                      {destination.cultural}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 font-inter">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-playfair font-bold text-primary">
                        {destination.price}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {destination.reviews} reviews
                      </div>
                    </div>
                    <Button className="btn-cultural">
                      Explore Journey
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
            Ready to Begin Your Cultural Adventure?
          </h3>
          <p className="text-muted-foreground mb-8 font-inter">
            Join thousands of travelers who have discovered the magic of our curated experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-cultural text-lg px-8 py-4">
              View All Destinations
            </Button>
            <Button size="lg" variant="outline" className="btn-royal text-lg px-8 py-4">
              Plan Custom Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;