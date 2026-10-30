import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * Renders an animated interactive matrix-dot grid on an HTML5 canvas.
 * Gently ripples and shifts perspective based on mouse movement and time.
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & smoothed target for fluid parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
      radius: 170, // Proximity ripple radius
    };

    // Grid spacing configuration
    const spacing = 36; // spacing between dots
    let cols = Math.ceil(width / spacing) + 2;
    let rows = Math.ceil(height / spacing) + 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric radial gradient centered on mouse for high-end depth
      const glowGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 2
      );
      glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(163, 230, 53, 0.02)');
      glowGrad.addColorStop(1, 'rgba(13, 17, 23, 0)');

      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Matrix Dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = c * spacing;
          const originY = r * spacing;

          // Distance to mouse
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle natural breathing wave
          const wave = Math.sin(time + originX * 0.008 + originY * 0.008) * 1.5;

          // Mouse proximity ripple effect
          let rippleX = 0;
          let rippleY = 0;
          let dotRadius = 1.2;
          let alpha = 0.16;
          let isNeon = false;

          if (dist < mouse.radius) {
            const factor = (1 - dist / mouse.radius);
            // Ripple push away slightly + sine wave shift
            const angle = Math.atan2(dy, dx);
            const force = Math.sin(factor * Math.PI) * 12;
            rippleX = -Math.cos(angle) * force;
            rippleY = -Math.sin(angle) * force;

            // Enlarge dot and boost brightness
            dotRadius = 1.2 + factor * 2.4;
            alpha = 0.2 + factor * 0.8;
            isNeon = true;
          }

          // Gentle perspective tilt based on mouse center
          const perspectiveOffsetX = ((mouse.x - width / 2) / width) * (originY / height) * 10;
          const perspectiveOffsetY = ((mouse.y - height / 2) / height) * (originX / width) * 10;

          const finalX = originX + rippleX + perspectiveOffsetX;
          const finalY = originY + rippleY + wave + perspectiveOffsetY;

          // Draw the dot
          ctx.beginPath();
          ctx.arc(finalX, finalY, dotRadius, 0, Math.PI * 2);

          if (isNeon) {
            // Bright emerald to lime transition near cursor
            const limeRatio = Math.max(0, 1 - dist / (mouse.radius * 0.6));
            if (limeRatio > 0.4) {
              ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`; // Lime #a3e635
            } else {
              ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`; // Emerald #10b981
            }
          } else {
            // Subtle carbon-emerald idle matrix dot
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
          }

          ctx.fill();

          // Connect nearby dots with very faint cyber lines when mouse is close
          if (dist < mouse.radius * 0.55 && c % 2 === 0 && r % 2 === 0) {
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.08 * (1 - dist / (mouse.radius * 0.55))})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}

