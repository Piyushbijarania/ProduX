import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import BlogSection from '@/app/components/BlogSection';
import Link from 'next/link';

export const metadata = {
  title: "Product Development | Produx",
  description: "From concept to market, we build innovative products that users love. End-to-end product development services that drive business growth.",
};

export default function ProductDevelopment() {
  const productPhases = [
    {
      icon: "💡",
      title: "Ideation & Strategy",
      description: "Product vision, market research, competitive analysis, and strategic planning",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "📐",
      title: "Design & Prototyping",
      description: "User experience design, wireframing, prototyping, and design validation",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: "⚙️",
      title: "Development & Engineering",
      description: "Agile development, quality engineering, and scalable architecture",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🚀",
      title: "Launch & Growth",
      description: "Product launch, market entry, growth strategies, and optimization",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const productServices = [
    {
      title: "MVP Development",
      subtitle: "Fast to Market",
      description: "Build and launch your Minimum Viable Product quickly to validate ideas and start generating value. We help you prioritize features and get to market faster.",
      features: [
        "Rapid prototyping",
        "Feature prioritization",
        "Quick market validation",
        "Iterative development"
      ],
      icon: "🎯"
    },
    {
      title: "Full-Stack Product Development",
      description: "Complete product development from frontend to backend. We build scalable, maintainable products using modern technologies and best practices.",
      features: [
        "Frontend & backend development",
        "API design & integration",
        "Database architecture",
        "Cloud deployment"
      ],
      icon: "🔄"
    },
    {
      title: "Product Strategy & Roadmap",
      description: "Define your product vision, create actionable roadmaps, and align your team around clear goals. Strategic planning that drives product success.",
      features: [
        "Market analysis",
        "User research",
        "Roadmap planning",
        "Success metrics"
      ],
      icon: "🗺️"
    },
    {
      title: "Product Design & UX",
      description: "Create intuitive, beautiful products that users love. User-centered design that drives engagement and conversions.",
      features: [
        "User research",
        "UI/UX design",
        "Design systems",
        "Usability testing"
      ],
      icon: "🎨"
    },
    {
      title: "Product Analytics & Optimization",
      description: "Measure what matters and optimize for growth. Data-driven insights that help you improve your product continuously.",
      features: [
        "Analytics implementation",
        "A/B testing",
        "Performance monitoring",
        "Growth optimization"
      ],
      icon: "📈"
    },
    {
      title: "Product Maintenance & Support",
      description: "Keep your product running smoothly with ongoing maintenance, updates, and support. We ensure your product evolves with your users' needs.",
      features: [
        "Bug fixes & updates",
        "Feature enhancements",
        "Performance optimization",
        "24/7 support"
      ],
      icon: "🛠️"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "Iterative development with continuous feedback and rapid delivery cycles.",
      icon: "⚡"
    },
    {
      title: "Lean Startup",
      description: "Build, measure, learn approach to validate ideas quickly and efficiently.",
      icon: "🚀"
    },
    {
      title: "Design Thinking",
      description: "Human-centered approach to innovation and problem-solving.",
      icon: "🧠"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated testing, deployment, and continuous integration for faster releases.",
      icon: "🔄"
    }
  ];

  const successMetrics = [
    {
      metric: "200+",
      label: "Products Launched",
      icon: "📦"
    },
    {
      metric: "95%",
      label: "Client Satisfaction",
      icon: "⭐"
    },
    {
      metric: "50%",
      label: "Faster Time to Market",
      icon: "⏱️"
    },
    {
      metric: "3x",
      label: "ROI Improvement",
      icon: "💰"
    }
  ];

  const clientLogos = [
    'TechStart', 'InnovateLab', 'DigitalFlow', 'CloudSync', 'DataVault', 
    'SecureNet', 'AppWorks', 'DevStream', 'CodeForge', 'NextGen'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">PRODUCT DEVELOPMENT</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              Build Products<br />
              That Matter
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-8 text-orange-100">
              From concept to market, we turn your vision into successful products
            </p>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-orange-50 leading-relaxed">
              End-to-end product development services that combine strategy, design, engineering, 
              and growth to create products users love and businesses depend on.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl inline-block"
            >
              Start Your Product Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{item.metric}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Development Phases */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">Our Product Development Process</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A comprehensive approach from idea to market success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productPhases.map((phase, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-orange-300"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-4xl mb-6 mx-auto`}>
                    {phase.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{phase.title}</h4>
                  <p className="text-gray-600 text-sm text-center">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Product Services
              </h3>
              <h4 className="text-2xl font-semibold text-gray-700">
                Everything you need to build successful products
              </h4>
            </div>

            <div className="space-y-16">
              {productServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                        {service.subtitle && (
                          <h4 className="text-xl font-semibold text-orange-600 mt-1">{service.subtitle}</h4>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <span className="text-orange-600 mr-2 font-bold">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 h-80 rounded-2xl flex items-center justify-center shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="text-gray-600 font-medium text-lg">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodologies */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Methodologies</h3>
              <p className="text-xl text-gray-600">Proven approaches that drive product success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 text-center"
                >
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h5>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {clientLogos.map((logo, i) => (
              <div key={i} className="h-16 w-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:opacity-100 transition-opacity">
                <span className="text-gray-600 text-xs font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Expert Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-12 text-white">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold mb-4">Meet Your Product Partner</h3>
                <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                  Our product development experts are here to guide you through every stage of your product journey
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Sarah Chen</h5>
                  <p className="text-xl text-orange-100 mb-6">Head of Product Development</p>
                  <p className="text-lg text-orange-50 mb-6">
                    Leading product strategy and development for over 10 years, helping companies 
                    bring innovative products to market successfully.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      Schedule a Consultation
                    </Link>
                    <a 
                      href="#" 
                      className="bg-orange-600 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Produx for Product Development */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Produx?</h3>
              <p className="text-xl text-gray-600">The advantages of working with our product development team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-orange-100">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Product-Focused</h4>
                <p className="text-gray-600">
                  We think like product owners, not just developers. Every decision is made with your product's success in mind.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-pink-100">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Fast Iteration</h4>
                <p className="text-gray-600">
                  Rapid development cycles mean you can test ideas quickly and adapt to market feedback faster.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-purple-100">
                <div className="text-5xl mb-4">📊</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven</h4>
                <p className="text-gray-600">
                  We use analytics and user feedback to make informed decisions and optimize your product continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Promise */}
      <ROIPromise />


      {/* Blog Section */}
      <BlogSection />

      {/* Creating Abundance */}
      <CreatingAbundance />

      <Footer />
    </div>
  );
}


