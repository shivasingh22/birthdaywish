import React, { useState } from 'react';
import { Mail, Heart, Sparkles, Lock, CheckCircle2 } from 'lucide-react';

export default function SurpriseEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="surprise"
      style={{
        padding: '100px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700 }}>
          A Little Something For You
        </h2>
        <p style={{ color: '#c3b5d2', fontSize: '1.1rem', marginTop: '10px' }}>
          Tap the sealed letter to open your secret note
        </p>
      </div>

      {/* Interactive Envelope Container */}
      <div
        className="reveal-on-scroll"
        style={{
          perspective: '1200px',
          width: 'min(90vw, 560px)',
          minHeight: '380px',
          position: 'relative',
        }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            cursor: 'pointer',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Main Envelope Outer Glass Shell */}
          <div
            className="glass-card"
            style={{
              padding: '40px 32px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '360px',
              background: isOpen
                ? 'linear-gradient(135deg, rgba(255, 83, 118, 0.15), rgba(43, 17, 56, 0.85))'
                : 'rgba(255, 255, 255, 0.05)',
              border: isOpen
                ? '1px solid rgba(255, 158, 170, 0.5)'
                : '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: isOpen
                ? '0 20px 60px rgba(255, 83, 118, 0.35)'
                : '0 12px 40px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.6s ease',
              borderRadius: '28px',
            }}
          >
            {!isOpen ? (
              /* Sealed Envelope View */
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div
                  className="animate-pulse-glow"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(255, 215, 0, 0.4)',
                    position: 'relative',
                  }}
                >
                  <Mail size={36} color="#4a154b" />
                  <Heart
                    size={20}
                    color="#ff5376"
                    fill="#ff5376"
                    style={{ position: 'absolute', bottom: '-4px', right: '-4px' }}
                  />
                </div>

                <p
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                    color: '#ffd3e0',
                    fontWeight: 600,
                    maxWidth: '400px',
                  }}
                >
                  "There's something I wanted to tell you... 💌"
                </p>

                <div
                  className="btn-primary"
                  style={{
                    padding: '12px 28px',
                    fontSize: '0.95rem',
                    marginTop: '8px',
                  }}
                >
                  <Lock size={16} />
                  <span>Click To Unseal Note</span>
                </div>
              </div>
            ) : (
              /* Opened Secret Message View */
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px',
                  animation: 'fadeInUp 0.6s ease-out',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    background: 'rgba(255, 215, 0, 0.15)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    color: '#ffd700',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={16} />
                  <span>Unsealed Note</span>
                </div>

                <div style={{ position: 'relative', padding: '0 10px' }}>
                  <p
                    className="font-script"
                    style={{
                      fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                      color: '#ffffff',
                      lineHeight: 1.4,
                      fontWeight: 600,
                      textShadow: '0 4px 15px rgba(255, 101, 132, 0.5)',
                    }}
                  >
                    "Some people make life brighter simply by being themselves."
                  </p>

                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                      color: '#ffd3e0',
                      marginTop: '20px',
                      fontWeight: 700,
                    }}
                  >
                    You're one of those people. ❤️
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', color: '#ff9eaa', fontSize: '0.9rem', alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="#ff5376" />
                  <span>Revealed with love</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
