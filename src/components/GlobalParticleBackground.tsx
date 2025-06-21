
import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

const GlobalParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#A855F7', '#EC4899', '#F472B6', '#DB2777', '#C084FC'],
      },
      links: {
        color: '#A855F7',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.6,
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={particlesInit}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default GlobalParticleBackground;
