import Link from 'next/link';

const caseStudies = [
  {
    title: "Transparent Government Platform",
    category: "Public Sector",
    description: "Built a comprehensive platform for government transparency, enabling citizens to access and explore complex financial data with ease.",
    results: [
      { metric: "1,300+", label: "Government Entities" },
      { metric: "277%", label: "Increase in Visitors" },
      { metric: "Top 5", label: "State Ranking" }
    ],
    link: "/services/public-sector-solutions",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI-Powered Business Intelligence",
    category: "Artificial Intelligence",
    description: "Developed a cutting-edge AI solution that transformed business operations through intelligent automation and predictive analytics.",
    results: [
      { metric: "40%", label: "Cost Reduction" },
      { metric: "3x", label: "Faster Processing" },
      { metric: "95%", label: "Accuracy Rate" }
    ],
    link: "/services/artificial-intelligence",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Enterprise Product Suite",
    category: "Product Development",
    description: "Created a comprehensive product ecosystem that streamlined operations and improved user experience across multiple platforms.",
    results: [
      { metric: "50K+", label: "Active Users" },
      { metric: "4.8/5", label: "User Rating" },
      { metric: "200%", label: "Growth Rate" }
    ],
    link: "/services/product-development",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const CaseStudyIcon = ({ gradient }: { gradient: string }) => {
  return (
    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </div>
  );
};

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real partnerships. See how we've helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-lg group"
              >
                <div className="mb-6">
                  <CaseStudyIcon gradient={study.gradient} />
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-100">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold text-purple-600 mb-1">{result.metric}</div>
                      <div className="text-xs text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={study.link}
                  className="text-purple-600 font-semibold hover:underline inline-flex items-center text-sm group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resources/case-studies"
              className="text-purple-600 font-semibold hover:underline text-lg inline-flex items-center"
            >
              View All Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
