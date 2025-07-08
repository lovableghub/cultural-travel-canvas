import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import DestinationsShowcase from '@/components/DestinationsShowcase';
import '../i18n';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DestinationsShowcase />
      
      {/* Spacer for more content to come */}
      <div className="h-20 bg-gradient-to-b from-muted/30 to-background"></div>
    </div>
  );
};

export default Index;
