import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  // Soft romantic synth arpeggiator chord melody fallback (Cmaj7 / G / Am / F)
  const notes = [
    261.63, 329.63, 392.00, 493.88, // Cmaj7
    196.00, 246.94, 293.66, 392.00, // G
    220.00, 261.63, 329.63, 440.00, // Am
    174.61, 220.00, 261.63, 349.23  // F
  ];

  const startRomanticSynth = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      gainNodeRef.current = ctx.createGain();
      gainNodeRef.current.gain.value = 0.08; // soft ambient volume
      gainNodeRef.current.connect(ctx.destination);

      let step = 0;
      intervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || ctx.state === 'suspended') return;
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], ctx.currentTime);
        
        oscGain.gain.setValueAtTime(0.05, ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        
        osc.connect(oscGain);
        oscGain.connect(gainNodeRef.current);
        
        osc.start();
        osc.stop(ctx.currentTime + 1.2);
        
        step++;
      }, 400);

      setIsPlaying(true);
    } catch (e) {
      console.log('Audio init notice:', e);
    }
  };

  const stopRomanticSynth = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopRomanticSynth();
    } else {
      startRomanticSynth();
    }
  };

  useEffect(() => {
    return () => {
      stopRomanticSynth();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      <button
        onClick={toggleAudio}
        style={{
          background: isPlaying
            ? 'linear-gradient(135deg, rgba(255, 83, 118, 0.9), rgba(232, 93, 117, 0.9))'
            : 'rgba(20, 12, 35, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          borderRadius: '50px',
          padding: '10px 18px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: isPlaying
            ? '0 0 20px rgba(255, 83, 118, 0.6)'
            : '0 6px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
        title={isPlaying ? 'Mute romantic ambient music' : 'Play romantic ambient music'}
      >
        {isPlaying ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
        <span style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline' } }}>
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>
        {isPlaying && (
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center', height: '12px' }}>
            <span style={{ width: '3px', height: '100%', background: '#fff', borderRadius: '2px', animation: 'bounce 0.6s ease infinite alternate' }}></span>
            <span style={{ width: '3px', height: '70%', background: '#fff', borderRadius: '2px', animation: 'bounce 0.8s ease infinite alternate' }}></span>
            <span style={{ width: '3px', height: '90%', background: '#fff', borderRadius: '2px', animation: 'bounce 0.5s ease infinite alternate' }}></span>
          </div>
        )}
      </button>

      <style>{`
        @keyframes bounce {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
