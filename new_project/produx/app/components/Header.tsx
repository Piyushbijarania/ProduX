'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Produx
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-purple-600 font-medium flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Our Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-white shadow-xl rounded-lg p-4 grid grid-cols-1 gap-2 border border-gray-100">
                    <Link 
                      href="/services/custom-software-development" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Custom Software Development
                    </Link>
                    <Link 
                      href="/services/artificial-intelligence" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Artificial Intelligence
                    </Link>
                    <Link 
                      href="/services/public-sector-solutions" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Public Sector Solutions
                    </Link>
                    <Link 
                      href="/services/product-development" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Product Development
                    </Link>
                    <Link 
                      href="/services/product-manager-services" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Product Manager Services
                    </Link>
                    <Link 
                      href="/services/cybersecurity" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Cybersecurity
                    </Link>
                    <Link 
                      href="/services/data" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Data
                    </Link>
                    <Link 
                      href="/services/power-apps-data" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Power Apps & Data
                    </Link>
                    <Link 
                      href="/services/managed-services" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Managed Services
                    </Link>
                    <Link 
                      href="/services/business-services" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      Business Services
                    </Link>
                    <Link 
                      href="/services/qa-ta" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      QA/TA
                    </Link>
                    <Link 
                      href="/services/ux-ui" 
                      className="hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50 uppercase text-sm font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      UX/UI
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us
              </button>
              {aboutOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <div className="bg-white shadow-xl rounded-lg p-4 border border-gray-100">
                    <Link 
                      href="/about/our-story" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setAboutOpen(false)}
                    >
                      Our Story
                    </Link>
                    <Link 
                      href="/about/our-products" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setAboutOpen(false)}
                    >
                      Our Products
                    </Link>
                    <Link 
                      href="/about/certifications" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setAboutOpen(false)}
                    >
                      Certifications
                    </Link>
                    <Link 
                      href="/about/careers" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setAboutOpen(false)}
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button 
                className="text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
              </button>
              {resourcesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <div className="bg-white shadow-xl rounded-lg p-4 border border-gray-100">
                    <Link 
                      href="/resources/blogs" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setResourcesOpen(false)}
                    >
                      Blogs
                    </Link>
                    <Link 
                      href="/resources/case-studies" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setResourcesOpen(false)}
                    >
                      Case Studies
                    </Link>
                    <Link 
                      href="/resources" 
                      className="block hover:text-purple-600 py-2 px-3 rounded transition-colors hover:bg-purple-50"
                      onClick={() => setResourcesOpen(false)}
                    >
                      Resources
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact Us</Link>
            
            {/* Language Switcher */}
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Global (English)</option>
              <option>Australia (English)</option>
              <option>Korea (Korean)</option>
              <option>Europe (English)</option>
              <option>UAE (English)</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
