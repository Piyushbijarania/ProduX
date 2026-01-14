import Link from 'next/link';

const products = [
  "ProSuite",
  "CloudSync Pro",
  "DataFlow",
  "SecureNet",
  "AppBuilder",
  "Analytics Plus",
  "MobileFirst"
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/">
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer">
                Produx
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Produx is a leading software development and technology solutions company. 
              We deliver innovative solutions that drive business growth and digital transformation 
              for clients worldwide.
            </p>
            <div className="bg-gray-800 h-12 w-32 rounded flex items-center justify-center mb-4 border border-purple-500/20">
              <span className="text-xs text-purple-400">Award Winner</span>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href="/about/our-products" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/custom-software-development" className="hover:text-purple-400 transition-colors">Our Services</Link></li>
              <li><Link href="/about/our-story" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="/resources/blogs" className="hover:text-purple-400 transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/about/careers" className="hover:text-purple-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all w-full shadow-lg inline-block text-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>Copyright © 2026 Produx, LLC. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
