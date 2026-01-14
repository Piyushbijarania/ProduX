import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import BlogSection from '@/app/components/BlogSection';
import Link from 'next/link';

export const metadata = {
  title: "Custom Software Development | Produx",
  description: "Right team, right skillset, right solution. Choosing a vendor requires tremendous trust. We are so committed to our partnership with you that until you experience ROI, you don't pay us.",
};

export default function CustomSoftwareDevelopment() {
  const serviceCategories = [
    { icon: "🌐", title: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: "📱", title: "Mobile Development", color: "from-purple-500 to-pink-500" },
    { icon: "⚙️", title: "Embedded System", color: "from-indigo-500 to-purple-500" },
    { icon: "☁️", title: "Cloud & DevOps", color: "from-green-500 to-emerald-500" },
    { icon: "👥", title: "CRM", color: "from-orange-500 to-red-500" },
    { icon: "🔄", title: "Legacy Modernization", color: "from-teal-500 to-blue-500" }
  ];

  const pillars = [
    {
      title: "Right Team",
      icon: "👥",
      description: "Don't doubt your team, bolster it. We augment your existing team or we become the team."
    },
    {
      title: "Right Skill Set",
      icon: "🎯",
      description: "The right subject matter experts with the capabilities and competency to deliver."
    },
    {
      title: "Right Solution",
      icon: "✅",
      description: "We can help you do in weeks what has been taking months; and in hours what has taken days."
    }
  ];

  const detailedServices = [
    {
      title: "Web Development",
      subtitle: "Enterprise-Grade Solutions",
      description: "Transform your business with robust, scalable web applications. We build high-performance systems that handle complex data processing and deliver exceptional user experiences.",
      features: ["Scalable architecture", "High-volume data handling", "Enterprise security", "Performance optimization"]
    },
    {
      title: "Mobile App Development",
      description: "From concept to app store, we deliver mobile experiences that users love. Our apps combine intuitive design with powerful functionality.",
      features: [
        "Cross-platform development",
        "App store optimization",
        "Ongoing maintenance & updates",
        "Performance monitoring"
      ]
    },
    {
      title: "Embedded Systems",
      description: "Expert engineering in IoT, microcontrollers, and real-time systems. We develop cutting-edge embedded solutions that drive innovation.",
      features: ["IoT integration", "Real-time processing", "Hardware optimization", "Protocol implementation"]
    },
    {
      title: "CRM Solutions",
      description: "Streamline customer relationships with powerful CRM platforms. We implement, customize, and optimize Salesforce, Dynamics 365, and HubSpot.",
      features: ["Platform integration", "Workflow automation", "Data migration", "User training"]
    },
    {
      title: "Cloud & DevOps",
      description: "Accelerate innovation with cloud-native solutions. Our DevOps practices ensure reliable, scalable infrastructure on AWS, Azure, and GCP.",
      features: ["Cloud migration", "CI/CD pipelines", "Infrastructure as code", "24/7 monitoring"]
    },
    {
      title: "Legacy Modernization",
      description: "Transform outdated systems into modern, efficient platforms. We modernize legacy applications while maintaining business continuity.",
      features: ["System analysis", "Cloud migration", "API integration", "Mobile enablement"]
    }
  ];

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Custom Software Development
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center">
              Right team, right skillset,<br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                right solution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Choosing a vendor requires tremendous trust. We are so committed to our partnership 
              with you that until you experience ROI, you don't pay us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
              >
                Contact Now
              </Link>
              <Link 
                href="/services"
                className="bg-white text-purple-600 border-2 border-purple-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all inline-block text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          ></div>
        </div>
      </section>

      {/* Client Logos - Compact */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 opacity-50">
            {clientLogos.map((logo, i) => (
              <div key={i} className="h-16 bg-gray-50 rounded flex items-center justify-center border border-gray-200">
                <span className="text-gray-500 text-xs">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories - Interactive Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Development Services</h3>
            <p className="text-xl text-gray-600">Comprehensive solutions for every technology need</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <h4 className="text-center font-bold text-gray-900">{category.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars - Visual Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Produx?</h3>
              <p className="text-xl text-gray-600">The foundation of our partnership</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-all">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections - Alternating Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Development Excellence
              </h3>
              <h4 className="text-2xl font-semibold text-gray-700">
                Trusted code that powers your business
              </h4>
            </div>

            <div className="space-y-20">
              {detailedServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    {service.subtitle && (
                      <h4 className="text-xl font-semibold text-purple-600 mb-4">{service.subtitle}</h4>
                    )}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <span className="text-purple-600 mr-2">✓</span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 h-80 rounded-2xl flex items-center justify-center shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="text-gray-600 font-medium">{service.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
              <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Cody Erben</h3>
              <p className="text-xl text-purple-100 mb-8">VP of Technology</p>
              <p className="text-lg text-purple-50 mb-8 max-w-2xl mx-auto">
                Leading our team of expert developers to deliver exceptional software solutions
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Now
                </Link>
                <a 
                  href="#" 
                  className="bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                >
                  Connect on LinkedIn
                </a>
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
