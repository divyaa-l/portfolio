
import React, { useEffect, useRef } from 'react';

interface VantaNetBackgroundProps {
  className?: string;
}

const VantaNetBackground: React.FC<VantaNetBackgroundProps> = ({ className = "" }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically import VANTA to avoid SSR issues
      import('vanta/dist/vanta.net.min.js').then((VANTA) => {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xff3f81,
          backgroundColor: 0x23153c,
          points: 10,
          maxDistance: 20,
          spacing: 15,
          showDots: true
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

export default VantaNetBackground;
