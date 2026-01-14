import Link from 'next/link';

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions built for your unique business needs. We deliver scalable, maintainable software that drives your success.",
    link: "/services/custom-software-development"
  },
  {
    title: "Artificial Intelligence",
    description: "Harness the power of AI and machine learning to transform your business processes and unlock new possibilities.",
    link: "/services/artificial-intelligence"
  },
  {
    title: "Public Sector Solutions",
    description: "We partner with government agencies to build digital tools that improve lives, increase transparency, and make public services more accessible.",
    link: "/services/public-sector-solutions"
  },
  {
    title: "Product Development",
    description: "End-to-end product development services from concept to launch. Build innovative products that users love.",
    link: "/services/product-development"
  },
  {
    title: "Product Manager Services",
    description: "Expert product management services to guide your product strategy, roadmap, and execution.",
    link: "/services/product-manager-services"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions. Stay ahead of threats with proactive defense strategies.",
    link: "/services/cybersecurity"
  },
  {
    title: "Data",
    description: "Unlock the value of your data. We create more opportunities for you by using data-driven strategies for business growth and optimization.",
    link: "/services/data"
  },
  {
    title: "Power Apps & Data",
    description: "Modernize your business and optimize growth through our Power Apps and data services.",
    link: "/services/power-apps-data"
  },
  {
    title: "Managed Services",
    description: "Focus on your core business while we handle your IT operations. 24/7 monitoring and support included.",
    link: "/services/managed-services"
  },
  {
    title: "Business Services",
    description: "Marketing, ITSM, and ITMSP. Scale your business and experience growth without the growing pains.",
    link: "/services/business-services"
  },
  {
    title: "QA/TA",
    description: "Ensure quality at every stage. Comprehensive testing services that guarantee reliable, bug-free software.",
    link: "/services/qa-ta"
  },
  {
    title: "UX/UI",
    description: "Create beautiful, intuitive interfaces that users love. Design experiences that drive engagement and conversions.",
    link: "/services/ux-ui"
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business thrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-purple-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <span className="text-purple-600 font-semibold flex items-center group-hover:underline text-sm">
                Learn More
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
