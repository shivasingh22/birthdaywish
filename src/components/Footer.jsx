import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '40px 24px 100px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(7, 4, 15, 0.6)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
        <Sparkles size={16} color="#ffd700" />
        <span className="font-serif" style={{ fontSize: '1rem', color: '#ffd3e0', fontWeight: 600 }}>
          Crafted with love & care for Shiva Nandini
        </span>
        <Heart size={16} color="#ff5376" fill="#ff5376" />
      </div>
      <p style={{ fontSize: '0.8rem', color: '#a894bc' }}>
        Wishing you a magnificent birthday filled with joy and laughter ❤️
      </p>
    </footer>
  );
}
