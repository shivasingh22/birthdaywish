import React from 'react';
import { Camera, Sparkles, Heart, Calendar, MapPin } from 'lucide-react';

const memoryItems = [
  {
    id: 1,
    title: "The Warmest Smile",
    caption: "Every time you laugh, the whole room feels a little brighter.",
    date: "A Special Moment",
    tag: "Cherished",
    gradient: "linear-gradient(135deg, #ff9eaa 0%, #e85d75 100%)",
    icon: Heart,
    rotate: "-2deg",
  },
  {
    id: 2,
    title: "Simple Joy & Laughter",
    caption: "Celebrating the little conversations that turn into unforgettable memories.",
    date: "Everyday Magic",
    tag: "Unforgettable",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    icon: Sparkles,
    rotate: "3deg",
  },
  {
    id: 3,
    title: "Shining Bright",
    caption: "Your positive energy and warmth are contagious in the sweetest way.",
    date: "Golden Moments",
    tag: "Pure Light",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    icon: Camera,
    rotate: "-1deg",
  },
  {
    id: 4,
    title: "Beautiful Journey Ahead",
    caption: "Here's to all the laughter we've shared and all the happy days waiting ahead.",
    date: "Always & Today",
    tag: "Forever Special",
    gradient: "linear-gradient(135deg, #ff5376 0%, #ffd700 100%)",
    icon: MapPin,
    rotate: "2deg",
  },
];

export default function MemorySection() {
  return (
    <section
      id="memories"
      style={{
        padding: '100px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Section Header */}
      <div className="reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '64px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '20px',
            background: 'rgba(255, 215, 0, 0.12)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            marginBottom: '16px',
          }}
        >
          <Camera size={16} color="#ffd700" />
          <span style={{ fontSize: '0.85rem', color: '#ffd700', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Memory Gallery
          </span>
        </div>

        <h2 className="font-serif text-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700 }}>
          Little Moments, Big Smiles ✨
        </h2>
        <p style={{ color: '#c3b5d2', fontSize: '1.1rem', marginTop: '12px', maxWidth: '550px', margin: '12px auto 0' }}>
          Polaroid snapshots of genuine happiness and warm memories.
        </p>
      </div>

      {/* Memory Polaroid Gallery Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px',
        }}
      >
        {memoryItems.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="reveal-on-scroll"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '16px 16px 24px 16px',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                transform: `rotate(${item.rotate})`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                transitionDelay: `${idx * 120}ms`,
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) rotate(0deg)';
                e.currentTarget.style.zIndex = '10';
                e.currentTarget.style.borderColor = 'rgba(255, 158, 170, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${item.rotate})`;
                e.currentTarget.style.zIndex = '1';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {/* Tape Sticker Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '24px',
                  background: 'rgba(255, 255, 255, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                  borderRadius: '2px',
                }}
              />

              {/* Photo Image Frame Placeholder */}
              <div
                style={{
                  height: '220px',
                  borderRadius: '12px',
                  background: item.gradient,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '18px',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.15)',
                }}
              >
                {/* Decorative Vector Silhouette */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  <IconComp size={30} color="#fff" />
                </div>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#fff',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    background: 'rgba(0,0,0,0.2)',
                    padding: '4px 12px',
                    borderRadius: '12px',
                  }}
                >
                  {item.tag}
                </span>

                {/* Subtitle replace tip */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Photo Placeholder
                </span>
              </div>

              {/* Polaroid Caption Info */}
              <div style={{ padding: '0 6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 className="font-serif" style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>
                    {item.title}
                  </h4>
                  <span style={{ fontSize: '0.75rem', color: '#ffd3e0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                <p className="font-sans" style={{ fontSize: '0.9rem', color: '#d4c5e2', lineHeight: 1.5 }}>
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
