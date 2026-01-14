'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 500, suffix: "+", label: "Projects Delivered" },
  { number: 200, suffix: "+", label: "Happy Clients" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 50, suffix: "+", label: "Team Members" }
];

export default function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const interval = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(increment * currentStep), stat.number);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">We let the numbers talk</h2>
            <p className="text-xl text-gray-600">One platform, boundless possibilities</p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-2">
                  {isVisible ? counts[index] : 0}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.suffix}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
