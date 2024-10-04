"use client"
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';

const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle logo scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Use effect to handle visibility for fade-in effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight;
      const sectionTop = document.getElementById('trusted-by-section')?.offsetTop || 0;
      if (offset > sectionTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="trusted-by-section"
      className={`bg-gray-50 py-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Trusted By Leading Companies</h2>
        <p className="font-semibold text-xl text-gray-700 mb-8">More than 2M+ Satified User and we get on an average 25 new users by every 15 minutes!</p>

        {/* Scrolling Logos Container */}
        <div className="relative w-full">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
          >
            &lt;
          </button>

          {/* Logo Container */}
          <div
            ref={scrollRef}
            className="whitespace-nowrap overflow-x-auto flex items-center space-x-10 scrollbar-hide transition-transform duration-500"
          >
            {/* List of Logos */}
            <div className="flex space-x-8 md:space-x-16">
              {/* Map through logos to render them */}
              {Array.from({ length: 9 }).map((_, index) => (
                <Image
                  key={index}
                  src={`/logo${(index % 9) + 1}.png`} // Assuming logos are named logo1.png, logo2.png, etc.
                  alt={`Company ${index + 1}`}
                  width={120}
                  height={50}
                  className="inline-block transition-transform duration-300 hover:scale-105"
                />
              ))}
              {/* Repeat logos to create an infinite loop */}
              {Array.from({ length: 9 }).map((_, index) => (
                <Image
                  key={index + 9}
                  src={`/logo${(index % 9) + 1}.png`}
                  alt={`Company ${index + 10}`}
                  width={120}
                  height={50}
                  className="inline-block transition-transform hover:scale-205 duration-400 ease-in-out"
                />
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
