import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import BackgroundCanvas from '../components/BackgroundCanvas';
import JourneyProgress from '../components/JourneyProgress';
import MusicPlayer from '../components/MusicPlayer';
import Hero from '../components/Hero';
import BirthdayMessage from '../components/BirthdayMessage';
import Compliments from '../components/Compliments';
import SurpriseEnvelope from '../components/SurpriseEnvelope';
import MemorySection from '../components/MemorySection';
import BirthdayWishCard from '../components/BirthdayWishCard';
import FinalSurprise from '../components/FinalSurprise';
import Footer from '../components/Footer';

export default function BirthdayPage() {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'message', 'compliments', 'surprise', 'memories', 'wish', 'final'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const messageEl = document.getElementById('message');
    if (messageEl) {
      messageEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Dynamic Animated Particles & Bokeh Canvas Background */}
      <BackgroundCanvas />

      {/* Floating Section Progress Bar & Nav */}
      <JourneyProgress activeSection={activeSection} />

      {/* Ambient Romantic Music Toggle */}
      <MusicPlayer />

      {/* Main Birthday Journey Sections */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero onExploreClick={handleExploreClick} />
        <BirthdayMessage />
        <Compliments />
        <SurpriseEnvelope />
        <MemorySection />
        <BirthdayWishCard />
        <FinalSurprise onReplay={handleReplay} />
      </main>

      <Footer />
    </div>
  );
}
