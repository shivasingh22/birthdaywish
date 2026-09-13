import React, { useState, useEffect, useRef } from 'react';
import { Heart, RefreshCw, Quote, Sparkles } from 'lucide-react';

export default function BirthdayMessage() {
  const fullTextLines = [
    "Happy Birthday, Shiva Nandini ❤️",
    "May your day be filled with beautiful moments, genuine smiles and all the happiness you deserve.",
    "You make ordinary moments feel a little more special, and today I just want you to know how wonderful you are.",
    "Keep smiling, keep shining, and never stop being the beautiful person you are."
  ];

  const [typedText, setTypedText] = useState(['', '', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  // IntersectionObserver to auto-start typing when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter logic
  useEffect(() => {
    if (!hasStarted || isTypingComplete) return;

    if (currentLine < fullTextLines.length) {
      const lineTarget = fullTextLines[currentLine];
      if (currentChar < lineTarget.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => {
            const copy = [...prev];
            copy[currentLine] = lineTarget.substring(0, currentChar + 1);
            return copy;
          });
          setCurrentChar((c) => c + 1);
        }, 32); // smooth typing speed

        return () => clearTimeout(timeout);
      } else {
        // Line completed, move to next line after brief pause
        const linePause = setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCurrentChar(0);
        }, 350);

        return () => clearTimeout(linePause);
      }
    } else {
      setIsTypingComplete(true);
    }
  }, [hasStarted, currentLine, currentChar, isTypingComplete]);

  const replayTyping = () => {
    setTypedText(['', '', '', '']);
    setCurrentLine(0);
    setCurrentChar(0);
    setIsTypingComplete(false);
    setHasStarted(true);
  };

  return (
    <section
      id="message"
      ref={containerRef}
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        className="glass-card reveal-on-scroll"
        style={{
          maxWidth: '780px',
          width: '100%',
          padding: 'clamp(28px, 5vw, 56px)',
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 158, 170, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 83, 118, 0.15)',
        }}
      >
        {/* Top Decorative Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff5376, #e85d75)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(255, 83, 118, 0.4)',
              }}
            >
              <Heart size={20} color="#fff" fill="#fff" />
            </div>
            <div>
              <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600 }}>
                From The Heart
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#c3b5d2' }}>A special note for Shiva Nandini</p>
            </div>
          </div>

          <Sparkles size={20} color="#ffd700" />
        </div>

        <Quote size={40} color="rgba(255, 158, 170, 0.2)" style={{ position: 'absolute', top: '40px', right: '40px' }} />

        {/* Message Content Container */}
        <div style={{ minHeight: '220px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Line 1 - Main Greeting */}
          <h2
            className="font-script text-gradient"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 700,
              minHeight: '50px',
              margin: 0,
            }}
          >
            {typedText[0]}
            {currentLine === 0 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </h2>

          {/* Line 2 */}
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.7,
              color: '#f3e8fc',
              minHeight: '30px',
              margin: 0,
            }}
          >
            {typedText[1]}
            {currentLine === 1 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </p>

          {/* Line 3 */}
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.7,
              color: '#f3e8fc',
              minHeight: '30px',
              margin: 0,
            }}
          >
            {typedText[2]}
            {currentLine === 2 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </p>

          {/* Line 4 - Closing */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
              lineHeight: 1.7,
              color: '#ffd3e0',
              fontWeight: 600,
              fontStyle: 'italic',
              minHeight: '30px',
              marginTop: '10px',
            }}
          >
            {typedText[3]}
            {currentLine === 3 && !isTypingComplete && <span className="typing-cursor">|</span>}
          </p>
        </div>

        {/* Bottom Actions */}
        <div
          style={{
            marginTop: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: '#a894bc' }}>
            {isTypingComplete ? 'Written with warm thoughts ✨' : 'Typing message...'}
          </span>

          <button onClick={replayTyping} className="btn-secondary" title="Replay typewriter message">
            <RefreshCw size={14} />
            <span>Replay Note</span>
          </button>
        </div>
      </div>

      <style>{`
        .typing-cursor {
          display: inline-block;
          color: #ff5376;
          font-weight: 300;
          margin-left: 2px;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
