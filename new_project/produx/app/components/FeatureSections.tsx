export default function FeatureSections() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section 1 */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Build Your Own Brand
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Turn your audience into a thriving community without any coding skills, with a digital platform that's unique
              </p>
              <a href="/contact" className="text-purple-600 font-semibold hover:underline inline-flex items-center">
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="bg-gray-50 h-80 rounded-xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">Scale Without Limits</span>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-gray-50 h-80 rounded-xl border border-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">Diversify Your Revenue</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Diversify Your Revenue
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Unlock your content's full potential, reap the rewards
              </p>
              <a href="/services" className="text-purple-600 font-semibold hover:underline inline-flex items-center">
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
