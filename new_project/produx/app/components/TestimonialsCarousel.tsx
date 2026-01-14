'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    quote: "Produx has been exceptional in delivering value for our investment. The service quality has been outstanding and well worth it. I would highly recommend their work and dedication. What we have now is a product that I'm proud to showcase.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Tech Innovations Inc.",
    rating: 5
  },
  {
    quote: "What sets Produx apart is their unique approach to partnership. They take the time to truly understand your business and build genuine relationships. They're willing to put risk on themselves first and build trust through action, not just words.",
    author: "Michael Chen",
    role: "VP of Engineering",
    company: "Digital Solutions Group",
    rating: 5
  },
  {
    quote: "Produx was committed to creating efficient, innovative solutions and they delivered beyond expectations. From day one, it was clear they were dedicated not only to our success, but to pushing the boundaries of what's possible.",
    author: "Emily Rodriguez",
    role: "Product Director",
    company: "NextGen Platforms",
    rating: 5
  },
  {
    quote: "Working with Produx transformed our technology infrastructure. Their expertise in AI and data solutions helped us achieve results we never thought possible. The ROI has been exceptional.",
    author: "David Kim",
    role: "Chief Technology Officer",
    company: "Enterprise Solutions Ltd.",
    rating: 5
  },
  {
    quote: "The team at Produx doesn't just deliver code—they deliver solutions that drive real business value. Their commitment to excellence is evident in every interaction and every deliverable.",
    author: "Lisa Anderson",
    role: "VP of Product",
    company: "Innovation Labs",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Don't just take our word
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read what our clients have to say
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Testimonial Content */}
            <div className="relative min-h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl italic font-medium">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-200 pt-6 w-full max-w-md">
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-purple-600 font-semibold mt-2">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-purple-600'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
