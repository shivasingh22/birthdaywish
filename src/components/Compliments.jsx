import React, { useState } from 'react';
import { Heart, Sun, Sparkles, Smile, Star, Compass } from 'lucide-react';

const complimentList = [
  {
    id: 1,
    text: "Your smile can brighten even the simplest moment.",
    icon: Sun,
    badge: "Pure Sunshine ☀️",
    color: "#ffd700",
  },
  {
    id: 2,
    text: "You have a way of making moments feel special.",
    icon: Sparkles,
    badge: "Magic Touch ✨",
    color: "#ff9eaa",
  },
  {
    id: 3,
    text: "Your presence brings a beautiful kind of warmth.",
    icon: Heart,
    badge: "Warm Heart ❤️",
    color: "#ff5376",
  },
  {
    id: 4,
    text: "You deserve all the happiness in the world.",
    icon: Star,
    badge: "Infinite Joy 🌟",
    color: "#ffb703",
  },
  {
    id: 5,
    text: "Never forget how wonderfully unique you are.",
    icon: Compass,
    badge: "One of a Kind 💎",
    color: "#e85d75",
  },
];

export default function Compliments() {
  const [likes, setLikes] = useState({});

  const handleCardClick = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section
      id="compliments"
      style={{
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '20px',
            background: 'rgba(255, 83, 118, 0.15)',
            border: '1px solid rgba(255, 158, 170, 0.3)',
            marginBottom: '16px',
          }}
        >
          <Smile size={16} color="#ff9eaa" />
          <span style={{ fontSize: '0.85rem', color: '#ffd3e0', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Things That Make You Amazing
          </span>
        </div>
        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700 }}>
          Little Reminders For You
        </h2>
        <p style={{ color: '#c3b5d2', fontSize: '1.1rem', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0' }}>
          Tap any card to send a heart reaction! ❤️
        </p>
      </div>

      {/* Responsive Compliment Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}
      >
        {complimentList.map((item, idx) => {
          const IconComponent = item.icon;
          const likeCount = likes[item.id] || 0;

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="glass-card reveal-on-scroll"
              style={{
                padding: '32px 28px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${idx * 100}ms`,
                transform: likeCount > 0 ? 'scale(1.02)' : 'none',
              }}
            >
              {/* Top Accent Icon & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '16px',
                    background: `rgba(255, 255, 255, 0.08)`,
                    border: `1px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 15px ${item.color}25`,
                  }}
                >
                  <IconComponent size={24} color={item.color} />
                </div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: item.color,
                    fontWeight: 600,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              {/* Compliment Quote Text */}
              <p
                className="font-sans"
                style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  color: '#fcf8ff',
                  fontWeight: 500,
                  marginBottom: '28px',
                }}
              >
                "{item.text}"
              </p>

              {/* Bottom Heart Reaction Button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Heart
                    size={20}
                    color="#ff5376"
                    fill={likeCount > 0 ? '#ff5376' : 'none'}
                    style={{
                      transform: likeCount > 0 ? 'scale(1.2)' : 'scale(1)',
                      transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                  />
                  <span style={{ fontSize: '0.9rem', color: '#d4c5e2', fontWeight: 500 }}>
                    {likeCount > 0 ? `${likeCount} Hearts` : 'Send Love'}
                  </span>
                </div>

                <Sparkles size={16} color="rgba(255,255,255,0.3)" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
