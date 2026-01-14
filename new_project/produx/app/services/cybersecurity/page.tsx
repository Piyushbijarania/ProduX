import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Cybersecurity Solutions | Produx",
  description: "Secure your data, secure your future. Don't leave yourself vulnerable. Produx can help you reduce your risk.",
};

export default function Cybersecurity() {
  const securityServices = [
    {
      icon: "🌐",
      title: "Web App Security Testing",
      description: "Comprehensive security testing for web applications to identify vulnerabilities and protect against threats.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: "📱",
      title: "Mobile App Security Testing",
      description: "Security assessment for mobile applications across iOS and Android platforms.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🔗",
      title: "Network Security Testing",
      description: "Evaluate network infrastructure security and identify potential entry points for attackers.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "📄",
      title: "Source Code Review",
      description: "Thorough code analysis to identify security flaws, vulnerabilities, and compliance issues.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const securityApproaches = [
    {
      type: "Offensive",
      title: "Don't leave your door unlocked",
      subtitle: "Hackers look for an open door in your system",
      description: "A methodical and controlled simulation of real-world cyberattacks conducted by our certified cybersecurity experts. It involves attempting to exploit potential weaknesses within your software systems, networks, and applications to assess their susceptibility to various cyber threats and attacks.",
      icon: "🎯",
      color: "from-red-600 to-orange-600"
    },
    {
      type: "Defensive",
      title: "Strengthen your defenses",
      subtitle: "Compliance and security standards protection",
      description: "A meticulous evaluation of an organization's IT infrastructure and software systems to ensure they comply with relevant industry regulations and security standards. These standards may include industry-specific mandates such as GDPR, HIPAA, PCI DSS, ISO 27001, or other cybersecurity requirements.",
      icon: "🛡️",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  const securityReports = [
    {
      title: "Penetration Testing",
      subtitle: "Sample Reports",
      description: "Strengthening Defenses through Ethical Hacking: Pen Testing is a controlled and simulated cybersecurity assessment aimed at evaluating an organization's security posture. The primary objective is to identify potential vulnerabilities and weaknesses in an organization.",
      example: {
        title: "Possible Username Enumeration",
        description: "Any user (hacker) can query the /api/common/user/get-all API and get information about other registered users in the application.",
        severity: "High",
        confidence: "High",
        solution: "Ensure the proper access control is implemented for the API call, allowing only users with Admin role to access the users list."
      },
      icon: "🔓"
    },
    {
      title: "Threat Model",
      subtitle: "Sample Reports",
      description: "Understanding and Mitigating Cyber Risks: A threat model is a systematic approach used to identify and assess potential threats and vulnerabilities that may impact assets, data, and systems. By creating a detailed representation of potential threats, organizations can effectively prioritize resources to safeguard against attacks.",
      icon: "🎯"
    },
    {
      title: "Vulnerability Scan",
      subtitle: "Sample Reports",
      description: "Identifying weaknesses before they are exploited: Our systematic process of identifying weaknesses and security flaws within an organization's IT infrastructure, applications, networks, and systems.",
      icon: "🔍"
    }
  ];

  const costOfInsecurity = [
    {
      title: "Financial Loss",
      description: "Data breaches can cost millions in damages, fines, and recovery expenses.",
      icon: "💰"
    },
    {
      title: "Time & Productivity",
      description: "Security incidents disrupt operations and require significant time to resolve.",
      icon: "⏱️"
    },
    {
      title: "Reputation Damage",
      description: "Loss of customer trust and brand reputation can be devastating and long-lasting.",
      icon: "📉"
    },
    {
      title: "Client Trust",
      description: "Once trust is lost, it's extremely difficult to regain customer confidence.",
      icon: "🤝"
    }
  ];

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const cyberBlogs = [
    {
      title: "Comprehensive Overview: What is Cybersecurity?",
      category: "Cybersecurity",
      author: "Harshita Singh",
      date: "Mar 13, 2024",
      readTime: "19 minute read",
      excerpt: "When we think of technology, various integral parts of our daily lives come to mind..."
    },
    {
      title: "What is a Phishing Attack and How Can I Avoid Falling for Phishing Scams?",
      category: "Cybersecurity",
      author: "Rachel Wiedenmann",
      date: "Mar 13, 2024",
      readTime: "6 minute read",
      excerpt: "Picture this: You receive an email from your bank warning you about suspicious activity..."
    },
    {
      title: "What are the Main Types of Cyber Threats?",
      category: "Cybersecurity",
      author: "Nancy Khandelwal",
      date: "Mar 13, 2024",
      readTime: "7 minute read",
      excerpt: "According to a Forbes survey, 48.8% of C-suite executives are concerned about cyber threats..."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-black text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              Cybersecurity
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-red-200">
              Secure your data, secure your future
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Don't leave yourself vulnerable. Produx can help you reduce your risk.
            </p>
            <Link 
              href="/contact" 
              className="bg-red-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-100 via-gray-100 to-gray-200 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-red-200">
              <span className="text-gray-700 text-2xl font-semibold">Cybersecurity Visualization</span>
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

      {/* Our Expertise in Cybersecurity */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise in Cybersecurity</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-400 hover:shadow-xl transition-all"
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

      {/* Offensive vs Defensive */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {securityApproaches.map((approach, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${approach.color} text-white rounded-2xl p-8 shadow-2xl`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{approach.icon}</div>
                    <div>
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {approach.type}
                      </div>
                      <h4 className="text-2xl font-bold mb-2">{approach.title}</h4>
                      <h5 className="text-lg text-white/90">{approach.subtitle}</h5>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Inadequate Cybersecurity */}
      <section className="py-24 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">The Cost of Inadequate Cybersecurity</h3>
              <p className="text-xl text-gray-700 mb-8">
                Finding and putting into practice a quick, automated, and adaptive cybersecurity strategy 
                is the only way to prepare for what's ahead.
              </p>
              <Link 
                href="/resources/case-studies" 
                className="text-red-600 font-semibold hover:underline text-lg inline-flex items-center"
              >
                See Our Case Studies
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {costOfInsecurity.map((cost, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border-2 border-red-100 hover:border-red-300 transition-all"
                >
                  <div className="text-4xl mb-4">{cost.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{cost.title}</h4>
                  <p className="text-gray-600 text-sm">{cost.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Take the Target Off Your Back */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Take the target off your back
                </h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-6">
                  Hackers feed off of your vulnerabilities
                </h4>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cybersecurity protects your business from unauthorized access or exposure to data. 
                  We work closely with your internal security teams to protect and monitor your data 
                  so you can relax knowing that everything is taken care of.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-gray-100 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 font-medium">Security Protection Visualization</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h5 className="text-xl font-bold text-gray-900 mb-3">What hackers will cost you</h5>
                <p className="text-gray-700 font-semibold mb-4">Money, time, credit, and trust with your clients</p>
                <p className="text-gray-600 text-sm">
                  We use penetration testing and monitoring tools to make sure you don't have to compromise 
                  when it comes to protecting your data.
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
                <h5 className="text-xl font-bold text-gray-900 mb-3">Is your security enough?</h5>
                <p className="text-gray-700 font-semibold mb-4">We don't want you to lose any sleep over it</p>
                <p className="text-gray-600 text-sm">
                  We'll make sure you're set up for success without insecurities or fears of losing to hackers.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h5 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity can save you</h5>
                <p className="text-gray-700 font-semibold mb-4">From financial loss while ensuring you don't lose data</p>
                <p className="text-gray-600 text-sm">
                  Data loss is often associated with mass financial loss, but the biggest cost is the loss of your client's trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Reports Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Security Assessment Services</h3>
            </div>

            <div className="space-y-12">
              {securityReports.map((report, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-red-300 transition-all"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">{report.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h4 className="text-3xl font-bold text-gray-900">{report.title}</h4>
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {report.subtitle}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">{report.description}</p>
                      
                      {report.example && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                          <h5 className="font-bold text-gray-900 mb-2">{report.example.title}</h5>
                          <p className="text-gray-700 text-sm mb-4">{report.example.description}</p>
                          <div className="flex gap-4 mb-4">
                            <div>
                              <span className="text-xs font-semibold text-gray-600">Severity:</span>
                              <span className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                {report.example.severity}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs font-semibold text-gray-600">Confidence:</span>
                              <span className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                {report.example.confidence}
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-gray-900">Solution:</span>
                            <p className="text-gray-700 text-sm mt-1">{report.example.solution}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Expert Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Kuldeep Mathur</h5>
                  <p className="text-xl text-gray-300 mb-6">Head - IT & Cybersecurity</p>
                  <p className="text-lg text-gray-200 mb-6">
                    Leading our cybersecurity team with extensive experience in security assessments, 
                    penetration testing, and enterprise security architecture.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-white/20 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
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


      {/* Cybersecurity Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cyberBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-red-300"
                >
                  <div className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors line-clamp-2">
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
                  <a href="#" className="text-red-600 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-red-600 font-semibold hover:underline text-lg inline-flex items-center"
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
