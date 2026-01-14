import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Public Sector Solutions | Produx",
  description: "We Get Your World. We partner with government agencies to build digital tools that improve lives, increase transparency, and make public services more accessible to all.",
};

export default function PublicSectorSolutions() {
  const serviceAreas = [
    {
      title: "Citizen Access",
      description: "Citizens expect clarity and transparency—your systems should deliver both. We help government agencies simplify complex data and deliver services that are transparent, accessible, and easy for the public to use.",
      icon: "👥",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Education",
      description: "Your time should be spent focusing on what matters most - learning. Support your educators and administrators with the tools they need to succeed through innovative software solutions.",
      icon: "📚",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Justice & Corrections",
      description: "In corrections, structure and consistency are critical. Solutions that help corrections teams track inmate requests, improve workflows, and streamline communications.",
      icon: "⚖️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Labor & Workforce",
      description: "Your mission is to support workers—we build technology that supports you. Software that creates smarter systems for job placement, training, and workforce management.",
      icon: "💼",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Health & Human Services",
      description: "Your work impacts lives. You deserve a software platform that reduces administrative burdens and helps you make timely, informed decisions.",
      icon: "🏥",
      color: "from-red-500 to-orange-500"
    }
  ];

  const keyFocusAreas = [
    {
      title: "Legacy App Modernization",
      fact: "Outdated legacy systems can slow down your operations and limit your ability to serve citizens effectively. Modern solutions help you work smarter and deliver better results.",
      cta: "Need to update your legacy systems?",
      icon: "🔄"
    },
    {
      title: "Digital Accessibility",
      fact: "Ensuring your digital services are accessible to everyone isn't just the right thing to do—it's essential for serving all citizens effectively and meeting compliance standards.",
      cta: "See where your site needs help.",
      icon: "♿"
    },
    {
      title: "Citizen Engagement Experience",
      fact: "Transform how you connect with citizens—making government data more accessible, understandable, and actionable for everyone.",
      cta: "See how it would look for your organization.",
      icon: "🤝"
    },
    {
      title: "Human-Centered Approach",
      fact: "Build tools with real people in mind—making them effective and easy to use.",
      cta: "Want solutions that work for you?",
      icon: "❤️"
    }
  ];

  const capabilities = [
    {
      title: "Web & Mobile App Development",
      description: "Build responsive, accessible platforms that work seamlessly across devices, meeting agency needs and compliance standards.",
      icon: "🌐"
    },
    {
      title: "UX/UI Design & Research",
      description: "Conduct user research, develop intuitive interfaces, and build accessible designs using tools like Figma, tailored to government workflows.",
      icon: "🎨"
    },
    {
      title: "Data & Analytics",
      description: "Create real-time dashboards, data integrations, and performance tracking across agency systems.",
      icon: "📊"
    },
    {
      title: "AI & Automation",
      description: "Innovate with statewide AI chatbot rollouts, natural language policy tools, and predictive analytics.",
      icon: "🤖"
    },
    {
      title: "Cloud Solutions",
      description: "Stay secure with scalable hosting and cloud-native services across AWS and Azure.",
      icon: "☁️"
    },
    {
      title: "Low-Code / No-Code Development",
      description: "We are Microsoft Power Platform specialists with expertise in Power Apps and process automation.",
      icon: "⚡"
    },
    {
      title: "CMS Development",
      description: "Build ADA-compliant, flexible CMS using platforms like WordPress, tailored for content-heavy government sites.",
      icon: "📝"
    },
    {
      title: "Project & Business Analysis",
      description: "From discovery and feasibility to agile PM and stakeholder management — we offer end-to-end delivery leadership.",
      icon: "📋"
    },
    {
      title: "QA & Security",
      description: "We offer standardized quality assurance with an emphasis on accessibility and cybersecurity readiness.",
      icon: "🔒"
    }
  ];


  const processSteps = [
    {
      title: "Discovery",
      description: "Here we gather insights through research, stakeholder input, and analysis to define clear goals and guide successful project planning."
    },
    {
      title: "Design & Development",
      description: "This is where we guide projects through iterative development, stakeholder feedback, and rigorous testing to ensure a smooth and high-quality launch."
    },
    {
      title: "Support & Maintenance",
      description: "And here we provide post-launch support, training, and documentation to ensure a smooth transition, resolve issues quickly, and empower teams to manage the site confidently."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Public Sector Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center">
              You Serve the Public.<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                We Serve You.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Helping you deliver software solutions that put people—and impact—first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
              >
                Talk with an Expert
              </Link>
              <Link 
                href="/services"
                className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all inline-block text-center"
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

      {/* Service Areas Navigation */}
      <section className="py-12 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Public Sector Solutions</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <span className="text-2xl">{area.icon}</span>
                  <span className="font-semibold text-gray-700">{area.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">We Are Leaders In...</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {keyFocusAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{area.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h4>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
                        <p className="text-sm font-semibold text-blue-900 mb-2">Did You Know?</p>
                        <p className="text-gray-700">{area.fact}</p>
                      </div>
                      <p className="text-gray-600 mb-4">{area.cta}</p>
                      <Link 
                        href="/contact" 
                        className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                      >
                        {index === 0 && "Talk with an Expert"}
                        {index === 1 && "Request a Free Site Health Audit"}
                        {index === 2 && "See How It Works"}
                        {index === 3 && "See the Produx Process"}
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* We Get Your World Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">We Get Your World</h3>
              <h4 className="text-2xl font-semibold text-gray-700 mb-8">Solutions in the Public Sector</h4>
            </div>

            <div className="space-y-12">
              {serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center text-3xl`}>
                        {area.icon}
                      </div>
                      <h5 className="text-3xl font-bold text-gray-900">{area.title}</h5>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">{area.description}</p>
                    <Link 
                      href="/contact" 
                      className="text-blue-600 font-semibold hover:underline inline-flex items-center"
                    >
                      See the Results
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-64 rounded-xl flex items-center justify-center">
                    <span className="text-gray-600 font-medium">{area.title} Solution</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg inline-block"
              >
                Talk with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Message */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4">You'll Feel Like Our Top Priority — Because You Are.</h3>
          </div>
        </div>
      </section>

      {/* Public Sector Capabilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Public Sector Capabilities</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Produx</h3>
              <h4 className="text-2xl font-semibold text-gray-700">What sets us apart...</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Dedicated Partnership",
                  description: "We're not just vendors—we're partners committed to your success. Every project receives our full attention and expertise.",
                  icon: "🤝"
                },
                {
                  title: "Proven Expertise",
                  description: "Our team brings deep knowledge of public sector challenges and the technical skills to solve them effectively.",
                  icon: "💡"
                },
                {
                  title: "Transparent Communication",
                  description: "We keep you informed every step of the way, ensuring you're always in the loop and confident in the process.",
                  icon: "💬"
                },
                {
                  title: "Results-Driven Approach",
                  description: "We focus on delivering solutions that make a real difference—helping you serve citizens better and achieve your mission.",
                  icon: "🎯"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h5>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg inline-block"
              >
                Talk with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">The Produx Process</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our process combines thoughtful discovery, agile development, and ongoing support to deliver tailored software solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                    {index === 0 && "🔍"}
                    {index === 1 && "⚙️"}
                    {index === 2 && "🛠️"}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book a Meeting Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Book a Meeting, at no cost to you.</h3>
            </div>

            <div className="space-y-12">
              {[
                {
                  icon: "💡",
                  title: "Explore the Possibilities",
                  description: "We start with a free discovery call to understand your goals and challenges and to map out what's next."
                },
                {
                  icon: "🚀",
                  title: "Create the Right Solution",
                  description: "No matter where you are in the process, we partner with your team to design and develop solutions that meet your goals."
                },
                {
                  icon: "🤝",
                  title: "Lasting Partnerships, Real Results",
                  description: "Once your solution is live, we continue to support and enhance it—helping your team deliver real results."
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-100">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Promise */}
      <ROIPromise />

      {/* Creating Abundance */}
      <CreatingAbundance />

      <Footer />
    </div>
  );
}

