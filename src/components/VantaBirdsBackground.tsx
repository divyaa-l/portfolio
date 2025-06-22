
import React, { useEffect, useRef } from 'react';

interface VantaBirdsBackgroundProps {
  className?: string;
}

const VantaBirdsBackground: React.FC<VantaBirdsBackgroundProps> = ({ className = "" }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically import VANTA Birds to avoid SSR issues
      import('vanta/dist/vanta.birds.min.js').then((VANTA) => {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xf8fafc,
          color1: 0xa855f7,
          color2: 0xec4899,
          colorMode: 'variance',
          birdSize: 1.00,
          wingSpan: 20.00,
          speedLimit: 5.00,
          separation: 20.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 3.00
        });
      }).catch(console.error);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`fixed inset-0 z-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default VantaBirdsBackground;
