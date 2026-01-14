import Link from 'next/link';

export default function CreatingAbundance() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="block">Ignite Your Digital Journey</span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Take the Leap Today!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's build your platform today!
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
