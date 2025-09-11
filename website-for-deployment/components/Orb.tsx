import React, { useRef, useEffect } from 'react';

interface OrbProps {
  hoverIntensity?: number;
  rotateOnHover?: boolean;
  hue?: number;
  forceHoverState?: boolean;
  className?: string;
}

const Orb: React.FC<OrbProps> = ({
  hoverIntensity = 0.5,
  rotateOnHover = true,
  hue = 0,
  forceHoverState = false,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let rotation = 0;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };

    const createOrb = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = Math.min(canvas.width, canvas.height) * 0.15;
      
      return {
        x: centerX,
        y: centerY,
        baseRadius,
        radius: baseRadius,
        glowRadius: baseRadius * 2,
        particles: Array.from({ length: 50 }, () => ({
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * baseRadius * 0.8,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.02 + 0.01,
          opacity: Math.random() * 0.5 + 0.3
        }))
      };
    };

    let orb = createOrb();

    const updateOrb = () => {
      // 更新 ORB 大小和發光效果
      const hoverEffect = isHoveredRef.current ? hoverIntensity : 0;
      orb.radius = orb.baseRadius * (1 + hoverEffect * 0.3);
      orb.glowRadius = orb.baseRadius * 2 * (1 + hoverEffect * 0.5);

      // 更新旋轉
      if (rotateOnHover && isHoveredRef.current) {
        rotation += 0.02;
      } else {
        rotation += 0.005;
      }

      // 更新粒子
      orb.particles.forEach(particle => {
        particle.angle += particle.speed;
        if (particle.angle > Math.PI * 2) {
          particle.angle -= Math.PI * 2;
        }
      });
    };

    const drawOrb = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 繪製外層光暈
      const glowGradient = ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.glowRadius
      );
      
      const hueColor = `hsl(${hue}, 70%, 60%)`;
      glowGradient.addColorStop(0, `${hueColor}40`);
      glowGradient.addColorStop(0.5, `${hueColor}20`);
      glowGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // 繪製 ORB 核心
      const coreGradient = ctx.createRadialGradient(
        orb.x - orb.radius * 0.3, orb.y - orb.radius * 0.3, 0,
        orb.x, orb.y, orb.radius
      );
      coreGradient.addColorStop(0, '#ffffff');
      coreGradient.addColorStop(0.3, hueColor);
      coreGradient.addColorStop(1, `${hueColor}80`);

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();

      // 繪製高光
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(
        orb.x - orb.radius * 0.3,
        orb.y - orb.radius * 0.3,
        orb.radius * 0.2,
        0, Math.PI * 2
      );
      ctx.fill();

      // 繪製粒子
      ctx.save();
      ctx.translate(orb.x, orb.y);
      ctx.rotate(rotation);

      orb.particles.forEach(particle => {
        const x = Math.cos(particle.angle) * particle.distance;
        const y = Math.sin(particle.angle) * particle.distance;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = hueColor;
        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      // 繪製 "Avocado AI" 文字
      ctx.globalAlpha = 0.1;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 10;
      ctx.fillText('Avocado AI', canvas.width / 2, canvas.height / 2);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      updateOrb();
      drawOrb();
      time += 0.01;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;

        // 檢查是否懸停在 ORB 上
        const dx = mouseRef.current.x - orb.x;
        const dy = mouseRef.current.y - orb.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        isHoveredRef.current = distance < orb.glowRadius;
      }
    };

    const handleMouseEnter = () => {
      if (forceHoverState) {
        isHoveredRef.current = true;
      }
    };

    const handleMouseLeave = () => {
      if (forceHoverState) {
        isHoveredRef.current = false;
      }
    };

    resizeCanvas();
    animate();

    // 監聽事件
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // 監聽容器大小變化
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      orb = createOrb();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      resizeObserver.disconnect();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [hoverIntensity, rotateOnHover, hue, forceHoverState]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default Orb;














