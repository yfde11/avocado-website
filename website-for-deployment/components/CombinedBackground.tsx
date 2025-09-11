import React from 'react';
import Aurora from './Aurora';
import SecurityParticles from './SecurityParticles';

interface CombinedBackgroundProps {
  showAurora?: boolean;
  showParticles?: boolean;
  auroraProps?: {
    colorStops?: string[];
    blend?: number;
    amplitude?: number;
    speed?: number;
  };
  particlesProps?: {
    particleCount?: number;
    speed?: number;
    colors?: string[];
  };
  className?: string;
}

const CombinedBackground: React.FC<CombinedBackgroundProps> = ({
  showAurora = true,
  showParticles = true,
  auroraProps = {},
  particlesProps = {},
  className = ""
}) => {
  return (
    <div className={`fixed inset-0 w-full h-full pointer-events-none z-0 ${className}`}>
      {showAurora && (
        <Aurora
          colorStops={auroraProps.colorStops || ["#8BBF9F", "#A39BBE", "#92A8C0"]}
          blend={auroraProps.blend || 0.5}
          amplitude={auroraProps.amplitude || 1.0}
          speed={auroraProps.speed || 0.5}
        />
      )}
      
      {showParticles && (
        <SecurityParticles
          particleCount={particlesProps.particleCount || 150}
          speed={particlesProps.speed || 0.5}
          colors={particlesProps.colors || ["#8BBF9F", "#A39BBE", "#92A8C0", "#FF94B4"]}
        />
      )}
    </div>
  );
};

export default CombinedBackground;














