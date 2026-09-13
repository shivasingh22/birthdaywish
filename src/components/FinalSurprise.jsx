import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PartyPopper, Heart, Sparkles, RotateCcw, Cake, Gift } from 'lucide-react';

export default function FinalSurprise({ onReplay }) {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const triggerCelebration = () => {
    setHasCelebrated(true);

    // Launch confetti cannon 1 (Hearts & Gold)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff5376', '#ffd700', '#ff9eaa', '#ffffff', '#e85d75'],
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    // Launch side sparkles cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ff5376', '#ffffff'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffd700', '#ff5376', '#ffffff'],
      });
    }, 250);
  };

  return (
    <section
      id="final"
      style={{
        padding: '100px 24px 140px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="reveal-on-scroll" style={{ maxWidth: '720px', width: '100%' }}>
        {!hasCelebrated ? (
          /* Initial Trigger View */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div
              className="animate-float"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff5376, #ffd700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(255, 83, 118, 0.4)',
              }}
            >
              <PartyPopper size={36} color="#fff" />
            </div>

            <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700 }}>
              The Grand Finale
            </h2>
            <p style={{ color: '#c3b5d2', fontSize: '1.15rem', maxWidth: '480px' }}>
              One last special moment to conclude your birthday journey!
            </p>

            <button
              onClick={triggerCelebration}
              className="btn-primary animate-pulse-glow"
              style={{
                fontSize: '1.25rem',
                padding: '20px 48px',
                marginTop: '12px',
              }}
            >
              <Gift size={22} />
              <span>One Last Surprise 💖</span>
              <Sparkles size={20} />
            </button>
          </div>
        ) : (
          /* Celebration Revealed View */
          <div
            className="glass-card"
            style={{
              padding: 'clamp(32px, 5vw, 56px)',
              background: 'linear-gradient(135deg, rgba(255, 83, 118, 0.15), rgba(31, 17, 51, 0.9))',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              boxShadow: '0 25px 60px rgba(255, 83, 118, 0.4), 0 0 50px rgba(255, 215, 0, 0.3)',
              borderRadius: '32px',
              animation: 'scaleUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <Cake size={36} color="#ffd700" />
              <Heart size={36} color="#ff5376" fill="#ff5376" />
              <Sparkles size={36} color="#ffd700" />
            </div>

            <h2
              className="font-script text-gradient"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              Happy Birthday, Shiva Nandini! 🎂❤️
            </h2>

            <p
              className="font-serif"
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                color: '#fcf8ff',
                lineHeight: 1.6,
                fontWeight: 500,
                marginBottom: '16px',
              }}
            >
              Keep smiling and keep shining.
            </p>

            <p
              className="font-sans"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#ffd3e0',
                fontWeight: 600,
                marginBottom: '40px',
              }}
            >
              You deserve a beautiful year ahead. ✨
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={triggerCelebration}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '0.95rem' }}
              >
                <PartyPopper size={18} />
                <span>More Confetti! 🎉</span>
              </button>

              <button
                onClick={onReplay}
                className="btn-secondary"
                style={{ padding: '12px 28px', fontSize: '0.95rem' }}
              >
                <RotateCcw size={18} />
                <span>Start Journey Again ↺</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
