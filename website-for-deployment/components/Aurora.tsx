import React, { useRef, useEffect } from 'react';

interface AuroraProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
  className?: string;
}

const Aurora: React.FC<AuroraProps> = ({
  colorStops = ["#8BBF9F", "#A39BBE", "#92A8C0"],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (ctx: CanvasRenderingContext2D, time: number) => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      colorStops.forEach((color, index) => {
        const offset = (index / (colorStops.length - 1)) + Math.sin(time * speed + index) * 0.1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });
      
      return gradient;
    };

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = createGradient(ctx, time);
      ctx.fillStyle = gradient;
      
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      // 創建流動的曲線路徑
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = canvas.height * 0.3 + 
                  Math.sin(x * 0.01 + time * speed) * amplitude * 100 +
                  Math.sin(x * 0.02 + time * speed * 0.7) * amplitude * 50 +
                  Math.sin(x * 0.005 + time * speed * 0.3) * amplitude * 150;
        
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
      
      // 添加第二層流動效果
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = canvas.height * 0.4 + 
                  Math.sin(x * 0.008 + time * speed * 1.2) * amplitude * 80 +
                  Math.sin(x * 0.015 + time * speed * 0.9) * amplitude * 40 +
                  Math.sin(x * 0.003 + time * speed * 0.5) * amplitude * 120;
        
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
      
      ctx.globalAlpha = 1.0;
      
      time += 0.02;
      animationId = requestAnimationFrame(drawAurora);
    };

    resizeCanvas();
    drawAurora();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [colorStops, blend, amplitude, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default Aurora;














