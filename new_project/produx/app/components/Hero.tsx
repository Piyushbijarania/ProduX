'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight text-center">
            <span className="block">Technology Solutions</span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              for Your Business
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-8 text-center">
            <span className="block">Earn via</span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
            >
              Get Started
            </Link>
            <Link
              href="/services/custom-software-development"
              className="bg-white text-purple-600 border-2 border-purple-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all inline-block text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
