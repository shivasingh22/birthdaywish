import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Gift, Image, Award, PartyPopper, Mail } from 'lucide-react';

const sections = [
  { id: 'hero', name: 'Start', icon: Heart },
  { id: 'message', name: 'Message', icon: Mail },
  { id: 'compliments', name: 'Compliments', icon: Award },
  { id: 'surprise', name: 'Secret Note', icon: Gift },
  { id: 'memories', name: 'Moments', icon: Image },
  { id: 'wish', name: 'Make a Wish', icon: Sparkles },
  { id: 'final', name: 'Celebration', icon: PartyPopper },
];

export default function JourneyProgress({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Fixed Progress Line */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #ff5376, #ff9eaa, #ffd700)',
            boxShadow: '0 0 12px rgba(255, 101, 132, 0.8)',
            transition: 'width 0.15s ease-out',
          }}
        />
      </div>

      {/* Floating Bottom / Right Navigation Bar */}
      <nav
        aria-label="Birthday Journey Navigation"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          background: 'rgba(15, 10, 28, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '40px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 101, 132, 0.2)',
          maxWidth: '92vw',
          overflowX: 'auto',
        }}
      >
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              title={sec.name}
              style={{
                background: isActive
                  ? 'linear-gradient(135deg, rgba(255, 83, 118, 0.8), rgba(232, 93, 117, 0.8))'
                  : 'transparent',
                border: isActive
                  ? '1px solid rgba(255, 255, 255, 0.4)'
                  : '1px solid transparent',
                borderRadius: '30px',
                color: isActive ? '#fff' : '#c3b5d2',
                padding: isActive ? '8px 14px' : '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                whiteSpace: 'nowrap',
              }}
            >
              <Icon size={16} color={isActive ? '#fff' : '#ff8da1'} />
              {isActive && <span>{sec.name}</span>}
            </button>
          );
        })}
      </nav>
    </>
  );
}
