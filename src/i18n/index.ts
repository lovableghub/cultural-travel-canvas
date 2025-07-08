import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        destinations: 'Destinations',
        experiences: 'Experiences',
        about: 'About',
        startJourney: 'Start Your Journey'
      },
      // Hero Section
      hero: {
        greeting: 'Welcome',
        title: 'Journey Through Timeless Cultures',
        subtitle: 'Discover the mystical landscapes, ancient traditions, and vibrant cultures of India and the Middle East through expertly curated experiences.',
        exploreDestinations: 'Explore Destinations',
        planJourney: 'Plan Your Journey',
        destinations: 'Destinations',
        travelers: 'Happy Travelers',
        experience: 'Years Experience',
        discoverMore: 'Discover More'
      },
      // Destinations
      destinations: {
        title: 'Curated Cultural Journeys',
        subtitle: 'Each destination tells a story. Each journey becomes a memory. Discover handpicked experiences that celebrate the rich heritage of our regions.',
        exploreJourney: 'Explore Journey',
        viewAll: 'View All Destinations',
        planCustom: 'Plan Custom Journey',
        highlights: 'Highlights',
        reviews: 'reviews',
        readyTitle: 'Ready to Begin Your Cultural Adventure?',
        readySubtitle: 'Join thousands of travelers who have discovered the magic of our curated experiences.'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        destinations: 'गंतव्य',
        experiences: 'अनुभव',
        about: 'हमारे बारे में',
        startJourney: 'यात्रा शुरू करें'
      },
      hero: {
        greeting: 'नमस्ते',
        title: 'कालातीत संस्कृतियों की यात्रा',
        subtitle: 'भारत और मध्य पूर्व की रहस्यमय भूमि, प्राचीन परंपराओं और जीवंत संस्कृतियों की खोज करें।',
        exploreDestinations: 'गंतव्य देखें',
        planJourney: 'यात्रा की योजना बनाएं',
        destinations: 'गंतव्य',
        travelers: 'खुश यात्री',
        experience: 'वर्षों का अनुभव',
        discoverMore: 'और खोजें'
      },
      destinations: {
        title: 'सांस्कृतिक यात्राएं',
        subtitle: 'हर गंतव्य एक कहानी कहता है। हर यात्रा एक यादगार बन जाती है।',
        exploreJourney: 'यात्रा देखें',
        viewAll: 'सभी गंतव्य देखें',
        planCustom: 'कस्टम यात्रा',
        highlights: 'मुख्य आकर्षण',
        reviews: 'समीक्षाएं',
        readyTitle: 'अपना सांस्कृतिक साहसिक कार्य शुरू करने के लिए तैयार?',
        readySubtitle: 'हजारों यात्रियों से जुड़ें जिन्होंने हमारे अनुभवों का जादू खोजा है।'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        destinations: 'الوجهات',
        experiences: 'التجارب',
        about: 'عنا',
        startJourney: 'ابدأ رحلتك'
      },
      hero: {
        greeting: 'مرحبا',
        title: 'رحلة عبر الثقافات الخالدة',
        subtitle: 'اكتشف المناظر الطبيعية الساحرة والتقاليد القديمة والثقافات النابضة بالحياة في الهند والشرق الأوسط.',
        exploreDestinations: 'استكشف الوجهات',
        planJourney: 'خطط لرحلتك',
        destinations: 'وجهات',
        travelers: 'مسافرون سعداء',
        experience: 'سنوات من الخبرة',
        discoverMore: 'اكتشف المزيد'
      },
      destinations: {
        title: 'رحلات ثقافية مختارة',
        subtitle: 'كل وجهة تحكي قصة. كل رحلة تصبح ذكرى.',
        exploreJourney: 'استكشف الرحلة',
        viewAll: 'عرض جميع الوجهات',
        planCustom: 'خطط رحلة مخصصة',
        highlights: 'النقاط المميزة',
        reviews: 'المراجعات',
        readyTitle: 'هل أنت مستعد لبدء مغامرتك الثقافية؟',
        readySubtitle: 'انضم إلى آلاف المسافرين الذين اكتشفوا سحر تجاربنا.'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
