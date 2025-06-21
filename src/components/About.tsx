
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AboutProps {
  setActiveSection: (section: string) => void;
  darkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ setActiveSection, darkMode = false }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) setActiveSection('about');
    },
  });

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current!;
    const spans = section.querySelectorAll<HTMLSpanElement>('span.highlight');
    const total = spans.length;
    const scrollDistance = total * 50; // 50px per word

    // Set initial color
    gsap.set(spans, { color: '#9CA3AF' }); // Tailwind text-gray-400

    // Create timeline linked to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: 0.5,
        pin: true,
      },
    });

    // Animate each word to white
    tl.to(spans, {
      color: '#FFFFFF',
      duration: 0.3,
      stagger: scrollDistance / total,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const aboutText = `I'm a passionate Data Engineer and Full-Stack Developer who transforms raw data into powerful, scalable solutions that drive business impact. With 4+ years of experience building enterprise-grade data pipelines, modern web applications, and intelligent analytics platforms, I specialize in bridging the gap between complex data challenges and elegant user experiences. From architecting cloud native ETL frameworks that process terabytes of data to developing responsive React applications serving hundreds of thousands of users, I thrive on turning ambitious ideas into production-ready solutions. My expertise spans the entire data lifecycle from ingestion and processing to visualization and deployment, always with a focus on performance, scalability, and innovation.`;

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-[#181a2e] px-6"
    >
      <section
        ref={sectionRef}
        className="max-w-4xl flex flex-wrap text-xl font-medium leading-relaxed"
      >
        {aboutText.split(' ').map((word, i) => (
          <span key={i} className="highlight mr-2 mb-2">
            {word}
          </span>
        ))}
      </section>
    </section>
  );
};

export default About;
