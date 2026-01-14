import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Power Apps & Data | Produx",
  description: "Enhanced Collaboration, Unified Data. Modernize your business and optimize growth through our Power Apps and data services.",
};

export default function PowerAppsData() {
  const powerAppsServices = [
    {
      icon: "📦",
      title: "Data Migration",
      description: "Seamless data migration to Power Platform with zero downtime and complete data integrity.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛠️",
      title: "Support & Management",
      description: "Ongoing support, maintenance, and optimization of your Power Apps solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Power Automation",
      description: "Automate workflows and business processes with Power Automate for increased efficiency.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Power Apps",
      description: "Build custom business applications quickly with low-code/no-code Power Apps platform.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🔄",
      title: "Optimize Legacy Apps",
      description: "Modernize and optimize existing legacy applications using Power Platform.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "💼",
      title: "MS Dynamics",
      description: "Implement and customize Microsoft Dynamics 365 for comprehensive business management.",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const pillars = [
    {
      title: "Right Team",
      description: "Don't doubt your team, bolster it. We augment your existing team or we become the team.",
      icon: "👥"
    },
    {
      title: "Right Skill Set",
      description: "The right subject matter experts with the capabilities and competency to deliver.",
      icon: "🎯"
    },
    {
      title: "Right Solution",
      description: "We can help you do in weeks what has been taking months; and in hours what has taken days.",
      icon: "✅"
    }
  ];

  const caseStudies = [
    {
      title: "Saving Time and Costs",
      description: "We delivered a multi-year modernization project for a key client using Microsoft Dynamics 365, automating manual processes like compliance and benefit processing to reduce administrative time and costs. By leveraging Rapid Application Development (RAD) and integrating Power BI, we improved data management, workflow efficiency, and reporting, replacing all manual processes and existing applications to enhance operational efficiency.",
      icon: "💰"
    },
    {
      title: "Improved CRM and Sales Processes",
      description: "We streamlined sales management and enhanced system performance for a US-based engineered wood products company by implementing Microsoft Dynamics 365. By leveraging out-of-the-box features, flows, plugins, and JavaScript, we optimized the application and delivered a scalable and efficient solution that boosted customer satisfaction and improved sales process automation.",
      icon: "📈"
    },
    {
      title: "Ease of Maintenance and Automation",
      description: "We managed Microsoft Dynamics 365 for a client in the U.S. public sector (U.S. government) by transforming their decentralized election data storage into a centralized system. By leveraging Microsoft's no-code/low-code technology, the new cloud solution streamlines the tracking, submission, and retrieval of election information, including staff, equipment, and more.",
      icon: "⚙️"
    }
  ];

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const powerAppsBlogs = [
    {
      title: "Top Benefits of Microsoft Power Apps",
      category: "Power Apps & Data",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "7 minute read",
      excerpt: "As per the studies, organizations using Power Apps have seen an increase in productivity..."
    },
    {
      title: "The Future of Power Apps: Upcoming Features and Trends to Watch",
      category: "Power Apps & Data",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "8 minute read",
      excerpt: "In recent years, Power Apps have become increasingly popular due to their ease of use..."
    },
    {
      title: "Building Scalable Solutions: How to Use Power Apps in Large Enterprises",
      category: "Power Apps & Data",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "9 minute read",
      excerpt: "As enterprises grow, so do their operational needs. The demand for scalable solutions increases..."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              Power Apps & Data
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-100">
              Enhanced Collaboration,<br />
              Unified Data
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-50 leading-relaxed">
              Modernize your business and optimize growth through our Power Apps and data services.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-blue-600 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-200">
              <span className="text-gray-700 text-2xl font-semibold">Power Apps Visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-60">
            {clientLogos.map((logo, i) => (
              <div key={i} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <span className="text-gray-600 text-xs font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise in Power Apps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise in Power Apps</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {powerAppsServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Partner Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Your powerful partner</h3>
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                In accomplishing your business goals
              </h4>
              <p className="text-xl text-gray-600 mb-8">
                You can't get what you want until you know what you need.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-300">
                <span className="text-gray-600 text-xl">Video player - Click to play video</span>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all"
                >
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}:</h4>
                  <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development You Can Depend On */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Development You Can Depend On
              </h3>
              <h4 className="text-2xl font-semibold text-gray-700">
                Our Power Apps & Data Services On Demand
              </h4>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl flex-shrink-0">{study.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h4>
                      <p className="text-gray-700 leading-relaxed text-lg">{study.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Power Apps Expert Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold text-gray-900 mb-2">Ritesh Soni</h5>
                  <p className="text-xl text-gray-600 mb-6">Distinguished Technologist</p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Leading our Power Platform initiatives with deep expertise in Microsoft Power Apps, 
                    Dynamics 365, and low-code/no-code solutions. Helping organizations modernize and 
                    automate their business processes.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-gray-100 text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Promise */}
      <ROIPromise />


      {/* Power Apps Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {powerAppsBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300"
                >
                  <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="text-gray-500 text-xs mb-4 flex items-center gap-2">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-blue-600 font-semibold hover:underline text-lg inline-flex items-center"
              >
                See More Solutions
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Abundance */}
      <CreatingAbundance />

      <Footer />
    </div>
  );
}


