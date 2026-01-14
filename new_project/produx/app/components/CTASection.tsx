import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how Produx can help you achieve your goals. 
            We're committed to your success—results or you don't pay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
            >
              Get Started Today
            </Link>
            <Link
              href="/services/custom-software-development"
              className="bg-white text-purple-600 border-2 border-purple-600 px-10 py-5 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all inline-block text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
