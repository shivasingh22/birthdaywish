import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system: Floating glowing soft bokeh orbs, stars, and tiny floating hearts
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 50);
    const particles = [];

    const heartSvgPath = (ctx, x, y, size) => {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(
        x, y, 
        x - size / 2, y, 
        x - size / 2, y + topCurveHeight
      );
      // bottom left curve
      ctx.bezierCurveTo(
        x - size / 2, y + (size + topCurveHeight) / 2, 
        x, y + (size + topCurveHeight) / 1.4, 
        x, y + size
      );
      // bottom right curve
      ctx.bezierCurveTo(
        x, y + (size + topCurveHeight) / 1.4, 
        x + size / 2, y + (size + topCurveHeight) / 2, 
        x + size / 2, y + topCurveHeight
      );
      // top right curve
      ctx.bezierCurveTo(
        x + size / 2, y, 
        x, y, 
        x, y + topCurveHeight
      );
      ctx.closePath();
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.6 - 0.2,
        opacity: Math.random() * 0.7 + 0.3,
        type: Math.random() > 0.6 ? 'heart' : 'sparkle',
        size: Math.random() * 8 + 6,
        color: ['#ff9eaa', '#ff6584', '#ffd3e0', '#ffd700', '#ffffff'][Math.floor(Math.random() * 5)],
        pulse: Math.random() * Math.PI,
      });
    }

    // Mouse interaction hearts
    const interactiveParticles = [];
    const handleMouseMove = (e) => {
      if (Math.random() > 0.75) {
        interactiveParticles.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 12 + 8,
          speedY: -Math.random() * 1.5 - 0.5,
          speedX: (Math.random() - 0.5) * 1.2,
          opacity: 1,
          color: ['#ff5376', '#ff8da1', '#ffd700', '#ff9eaa'][Math.floor(Math.random() * 4)]
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient glowing particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.03;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        const currentOpacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.globalAlpha = currentOpacity;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;

        if (p.type === 'heart') {
          heartSvgPath(ctx, p.x, p.y, p.size);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Render mouse interactive trailing hearts
      for (let i = interactiveParticles.length - 1; i >= 0; i--) {
        const ip = interactiveParticles[i];
        ip.x += ip.speedX;
        ip.y += ip.speedY;
        ip.opacity -= 0.015;

        if (ip.opacity <= 0) {
          interactiveParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = ip.opacity;
        ctx.fillStyle = ip.color;
        ctx.shadowColor = ip.color;
        ctx.shadowBlur = 12;
        heartSvgPath(ctx, ip.x, ip.y, ip.size);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
