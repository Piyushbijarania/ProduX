import Link from 'next/link';

const steps = [
  {
    icon: "💬",
    title: "Start the Conversation",
    description: "Meet with us to explore your technology needs and desired outcomes. We'll explore what we can achieve together at no cost to you."
  },
  {
    icon: "🎯",
    title: "Customize Your Plan",
    description: "Get the right team for the job. If there's a good fit between our capabilities and your needs, we'll jump right in."
  },
  {
    icon: "🚀",
    title: "Experience Results",
    description: "Elevate experiences, empower users, and enhance satisfaction. Don't worry about risk without reward - you won't pay a cent until you experience ROI."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Easy Steps to Deliver<br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                With Impact
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl mb-6">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
            >
              See what's possible
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
