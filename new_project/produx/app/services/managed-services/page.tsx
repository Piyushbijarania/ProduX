import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Managed Services | Produx",
  description: "Enhance efficiency, optimize services. Elevate your IT operations through round-the-clock monitoring, on-demand IT support, and other end-to-end solutions.",
};

export default function ManagedServices() {
  const managedServices = [
    {
      icon: "☁️",
      title: "Managed Cloud",
      description: "Comprehensive cloud management and optimization services for AWS, Azure, and GCP.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🖥️",
      title: "IT Infra Support",
      description: "24/7 infrastructure support and maintenance to keep your systems running smoothly.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔒",
      title: "Security Services",
      description: "Continuous security monitoring, threat detection, and incident response services.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "📊",
      title: "Managed Data",
      description: "Data management, backup, recovery, and optimization services for your critical data.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "💰",
      title: "Cloud Cost Optimization",
      description: "Reduce cloud costs while improving performance through intelligent resource management.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: "📋",
      title: "IT Governance",
      description: "IT governance, compliance, and best practices to ensure operational excellence.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const frameworkCategories = [
    {
      title: "Consulting",
      services: [
        "Consulting & Strategy",
        "Design Thinking",
        "Cloud First Strategy",
        "Technical Assessment & Assistance in Roadmap",
        "Compliance & IT Governance"
      ],
      icon: "💼",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Development",
      services: [
        "Digital Applications: Custom App, Cloud Native App, Mobile App Development",
        "Process Automation: Business Process Management, Robotics Process Automation",
        "Middleware, API & Integration"
      ],
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Modernization",
      services: [
        "Legacy Modernization",
        "DevSecOps",
        "Cloud Migration",
        "Cloud Centralization"
      ],
      icon: "🔄",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Managed",
      services: [
        "Managed Services Support",
        "24/7 IT Support"
      ],
      icon: "🛠️",
      color: "from-orange-500 to-red-500"
    }
  ];

  const caseStudies = [
    {
      title: "24/7 SRE Support",
      description: "Our 24/7 SRE team swiftly addresses production issues for a large global enterprise. Our proactive approach of handling user-raised issues, providing immediate fixes, and developing enhancement requests while adhering to design and release guidelines reduces production downtime and accelerates feature availability.",
      icon: "⚡"
    },
    {
      title: "Global IT Support",
      description: "We offer 24/7 support for top print solution providers globally and ensure the timely and effective resolution of all issues, adhering to the SLAs agreed upon with the customer. Our support has considerably improved service operations, automating most toil tasks and providing significant service enhancements.",
      icon: "🌐"
    },
    {
      title: "Automated IT Solutions",
      description: "We develop hotfixes and enhance code for a large global product company by making improvements and changes through a completely automated DevOps pipeline framework. Automated tools like Jira and GitHub Copilot are utilized for incident management and optimized fixes.",
      icon: "🤖"
    },
    {
      title: "Seamless IT Support",
      description: "We provide turnkey support and queue monitoring for one of our large clients to ensure there are no misrouted tickets. By assessing priorities and adjusting accordingly, we gather the required information using provided templates to replicate and address customer challenges.",
      icon: "✅"
    }
  ];

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const managedServicesBlogs = [
    {
      title: "How Managed IT Services Can Transform Your Business",
      category: "Managed Services",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "8 minute read",
      excerpt: "Are you spending too much time and resources on troubleshooting IT issues? Managed services can transform your business..."
    },
    {
      title: "Top Benefits of Managed IT Services You Should Know",
      category: "Managed Services",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "10 minute read",
      excerpt: "According to reports, managed services are becoming more popular as businesses seek to optimize their IT operations..."
    },
    {
      title: "How to Migrate your Existing IT Landscape into an Automated Managed Service Environment",
      category: "Managed Services",
      author: "Nancy Khandelwal",
      date: "Oct 10, 2024",
      readTime: "11 minute read",
      excerpt: "The shift from traditional IT infrastructure to an automated managed service environment requires careful planning..."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 via-gray-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              Managed IT Services
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-200">
              Enhance efficiency, optimize services
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Elevate your IT operations through round-the-clock monitoring, on-demand IT support, 
              and other end-to-end solutions.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-slate-800 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-slate-300">
              <span className="text-gray-700 text-2xl font-semibold">Managed Services Visualization</span>
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

      {/* Our Amplified Managed IT Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Amplified Managed IT Services</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managedServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-slate-400 hover:shadow-xl transition-all"
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

      {/* Managed Services Framework */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Managed Services Framework</h3>
              <p className="text-xl text-gray-600">Comprehensive IT services across the entire lifecycle</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {frameworkCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100 hover:border-slate-300 transition-all"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4 mx-auto`}>
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-slate-600 mr-2 mt-1">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Powerful Partner */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-4">Your powerful partner</h3>
                <h4 className="text-2xl font-semibold text-slate-300 mb-6">
                  IT services that boost efficiency and security
                </h4>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Unlock seamless productivity and peace of mind with our managed IT services - 
                  where your technology works as hard as you do.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 h-96 rounded-xl flex items-center justify-center border-2 border-slate-600">
                <span className="text-slate-300 font-medium">Managed Services Framework Visualization</span>
              </div>
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
                Our Managed IT Services in Action
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-slate-200 hover:border-slate-400 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl flex-shrink-0">{study.icon}</div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h5>
                      <p className="text-gray-700 leading-relaxed">{study.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Expert */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-slate-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold text-gray-900 mb-2">Vijaya Arucapalli</h5>
                  <p className="text-xl text-gray-600 mb-6">Vice President of Client Delivery</p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Leading our managed services delivery with extensive experience in IT operations, 
                    infrastructure management, and client success. Ensuring seamless service delivery 
                    and exceptional client satisfaction.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors shadow-lg"
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


      {/* Managed Services Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {managedServicesBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-slate-400"
                >
                  <div className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-slate-700 transition-colors line-clamp-2">
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
                  <a href="#" className="text-slate-700 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-slate-700 font-semibold hover:underline text-lg inline-flex items-center"
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


