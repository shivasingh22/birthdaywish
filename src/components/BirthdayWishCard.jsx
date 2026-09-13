import React, { useState } from 'react';
import { Flame, Sparkles, Heart, FlameKindling } from 'lucide-react';

export default function BirthdayWishCard() {
  const [isLit, setIsLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);

  const handleCandleClick = () => {
    setIsLit(!isLit);
    if (isLit) {
      setWishMade(true);
    }
  };

  return (
    <section
      id="wish"
      style={{
        padding: '100px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(90vw, 600px)',
          height: 'min(90vw, 600px)',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 83, 118, 0.15) 40%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      {/* Large Glowing Birthday Wish Card */}
      <div
        className="glass-card reveal-on-scroll"
        style={{
          maxWidth: '750px',
          width: '100%',
          padding: 'clamp(36px, 6vw, 64px)',
          textAlign: 'center',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 215, 0, 0.35)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), 0 0 40px rgba(255, 215, 0, 0.2)',
          borderRadius: '32px',
        }}
      >
        {/* Floating Heart & Sparkle Badge Ornaments */}
        <div style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)' }}>
          <div
            style={{
              padding: '6px 22px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #ffd700, #ff9eaa)',
              color: '#1a0f2e',
              fontSize: '0.85rem',
              fontWeight: 700,
              boxShadow: '0 6px 20px rgba(255, 215, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Sparkles size={16} />
            <span>MAKE A WISH</span>
            <Sparkles size={16} />
          </div>
        </div>

        {/* Interactive Candle Feature */}
        <div style={{ marginTop: '16px', marginBottom: '32px' }}>
          <div
            onClick={handleCandleClick}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            title="Click to blow out / light the birthday candle!"
          >
            {/* Candle Flame */}
            <div style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {isLit ? (
                <div
                  className="animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 15px #ffd700) drop-shadow(0 0 25px #ff5376)',
                    animation: 'float 2s ease-in-out infinite',
                  }}
                >
                  <Flame size={36} color="#ffd700" fill="#ff9eaa" />
                </div>
              ) : (
                <div style={{ opacity: 0.6, fontSize: '0.8rem', color: '#c3b5d2' }}>
                  <FlameKindling size={24} color="#a894bc" />
                </div>
              )}
            </div>

            {/* Candle Body */}
            <div
              style={{
                width: '16px',
                height: '50px',
                background: 'linear-gradient(to bottom, #ffd3e0, #ff5376)',
                borderRadius: '8px 8px 4px 4px',
                boxShadow: isLit ? '0 0 15px rgba(255, 215, 0, 0.5)' : 'none',
                marginTop: '4px',
              }}
            />

            <span style={{ fontSize: '0.8rem', color: '#ffd3e0', marginTop: '10px', fontWeight: 500 }}>
              {isLit ? 'Tap candle to blow out & make a wish! 🕯️' : '✨ Wish Granted! (Tap to relight) ❤️'}
            </span>
          </div>
        </div>

        {/* Main Wish Text */}
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h3
            className="font-script text-gradient"
            style={{
              fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
              lineHeight: 1.3,
              fontWeight: 700,
              marginBottom: '20px',
            }}
          >
            "Today, I hope you smile a little more, <br />
            laugh a little louder, <br />
            and make some beautiful memories." ❤️
          </h3>

          {wishMade && (
            <p
              className="font-serif"
              style={{
                fontSize: '1.15rem',
                color: '#ffd700',
                marginTop: '16px',
                fontStyle: 'italic',
                animation: 'fadeIn 0.5s ease',
              }}
            >
              May every single wish in your heart come true this year, Shiva Nandini! ✨
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
