import React from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px 60px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Background Glowing Ambient Aura */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(90vw, 550px)',
          height: 'min(90vw, 550px)',
          background: 'radial-gradient(circle, rgba(255, 83, 118, 0.25) 0%, rgba(232, 93, 117, 0.1) 50%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          borderRadius: '50%',
          animation: 'pulseGlow 4s ease-in-out infinite',
        }}
      />

      {/* Top Floating Badge */}
      <div
        className="animate-float"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          borderRadius: '30px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 158, 170, 0.3)',
          boxShadow: '0 4px 20px rgba(255, 83, 118, 0.25)',
          marginBottom: '28px',
        }}
      >
        <Sparkles size={16} color="#ffd700" />
        <span style={{ fontSize: '0.9rem', color: '#ffd3e0', fontWeight: 500, letterSpacing: '0.5px' }}>
          A Birthday Journey Written Just For You
        </span>
        <Heart size={16} color="#ff5376" fill="#ff5376" />
      </div>

      {/* Main Heading with Animated Glowing Heart Surround */}
      <div style={{ position: 'relative', maxWidth: '850px', marginBottom: '24px' }}>
        {/* Heart Glow Outer Frame */}
        <div
          style={{
            position: 'absolute',
            inset: '-20px -30px',
            borderRadius: '40px',
            border: '1px solid rgba(255, 158, 170, 0.2)',
            boxShadow: '0 0 35px rgba(255, 83, 118, 0.25), inset 0 0 25px rgba(255, 83, 118, 0.15)',
            pointerEvents: 'none',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        />

        <h1
          className="font-script text-gradient"
          style={{
            fontSize: 'clamp(3.2rem, 7.5vw, 6.2rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            padding: '10px 0',
            textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 30px rgba(255, 101, 132, 0.4)',
          }}
        >
          Happy Birthday, <br />
          <span style={{ color: '#ffd3e0', textShadow: '0 0 20px rgba(255,211,224,0.6)' }}>
            Shiva Nandini
          </span>{' '}
          <span
            style={{
              display: 'inline-block',
              animation: 'float 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 15px rgba(255, 83, 118, 0.8))',
            }}
          >
            ❤️
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="font-sans"
        style={{
          fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
          color: '#d4c5e2',
          maxWidth: '620px',
          lineHeight: 1.6,
          fontWeight: 400,
          marginBottom: '44px',
          textShadow: '0 2px 10px rgba(0,0,0,0.4)',
        }}
      >
        Today is all about celebrating someone truly special.
      </p>

      {/* Animated Action Button */}
      <button
        onClick={onExploreClick}
        className="btn-primary animate-pulse-glow"
        style={{
          fontSize: '1.15rem',
          padding: '18px 42px',
        }}
      >
        <span>Open Your Birthday Surprise ✨</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Scroll indicator prompt */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.6,
          fontSize: '0.85rem',
          color: '#c3b5d2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>Scroll down to begin</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
