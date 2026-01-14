import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Product Manager Services | Produx",
  description: "End-to-end product management services from idea to launch to growth. Strategic product leadership that drives results.",
};

export default function ProductManagerServices() {
  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const coreServices = [
    {
      id: 1,
      title: "Product Strategy & Discovery",
      icon: "🎯",
      color: "from-purple-500 to-indigo-500",
      description: "Define your product vision, validate opportunities, and create strategic roadmaps that drive business growth.",
      services: [
        "Product vision, mission & roadmap creation",
        "Market research & competitive analysis",
        "User research (interviews, surveys, personas, JTBD)",
        "Problem validation & opportunity sizing",
        "MVP definition & prioritization (RICE, MoSCoW, Kano)"
      ]
    },
    {
      id: 2,
      title: "Product Planning & Execution",
      icon: "📋",
      color: "from-blue-500 to-cyan-500",
      description: "Transform strategy into actionable plans with clear requirements, prioritized backlogs, and coordinated execution.",
      services: [
        "PRD / BRD creation",
        "Feature definition & backlog grooming",
        "Sprint planning with engineering teams",
        "Stakeholder alignment (business, tech, design, QA)",
        "Dependency & risk management"
      ]
    },
    {
      id: 3,
      title: "UX & Design Collaboration",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      description: "Work closely with design teams to create intuitive, accessible, and user-centered product experiences.",
      services: [
        "User flows & wireframe reviews",
        "UX usability validation",
        "Design handoff support",
        "Accessibility & experience consistency checks"
      ]
    },
    {
      id: 4,
      title: "Development & Delivery Management",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      description: "Lead agile development teams, coordinate releases, and ensure quality delivery across all product components.",
      services: [
        "Agile/Scrum facilitation support",
        "Release planning & go-to-market coordination",
        "UAT planning & acceptance criteria definition",
        "Cross-team coordination (frontend, backend, QA, DevOps)"
      ]
    },
    {
      id: 5,
      title: "Analytics & Growth",
      icon: "📊",
      color: "from-orange-500 to-amber-500",
      description: "Define metrics, analyze user behavior, and optimize for growth through data-driven product decisions.",
      services: [
        "Define product KPIs & success metrics",
        "Funnel analysis & conversion optimization",
        "A/B testing & experimentation",
        "User behavior analysis (GA, Mixpanel, Amplitude)",
        "Retention & engagement strategies"
      ]
    },
    {
      id: 6,
      title: "Post-Launch & Scaling",
      icon: "🚀",
      color: "from-teal-500 to-cyan-500",
      description: "Monitor performance, gather feedback, and continuously iterate to scale your product successfully.",
      services: [
        "Feedback loops (NPS, CSAT, support insights)",
        "Feature iteration & roadmap updates",
        "Performance monitoring",
        "Cost-optimization & tech-debt prioritization"
      ]
    },
    {
      id: 7,
      title: "Documentation & Communication",
      icon: "📝",
      color: "from-violet-500 to-purple-500",
      description: "Maintain clear documentation and effective communication to keep all stakeholders aligned and informed.",
      services: [
        "Product roadmaps & release notes",
        "Executive updates & dashboards",
        "Stakeholder presentations",
        "Product playbooks & SOPs"
      ]
    },
    {
      id: 8,
      title: "Specialized PM Services",
      icon: "⭐",
      color: "from-indigo-500 to-blue-500",
      description: "Tailored product management services for specific contexts, industries, and product types.",
      services: [
        "Startup PM (0 → 1): Idea validation, MVP, early traction",
        "AI / GenAI Product PM: Model selection, prompt design, evaluation metrics",
        "Platform PM: APIs, integrations, scalability",
        "Enterprise PM: Compliance, security, multi-tenant products",
        "Growth PM: Monetization, pricing, experiments"
      ]
    }
  ];

  const engagementModels = [
    {
      title: "Hourly / Daily Consulting",
      description: "Flexible consulting for specific product challenges or strategic guidance",
      icon: "⏱️"
    },
    {
      title: "Monthly Retainer",
      description: "Ongoing product management support with dedicated PM time",
      icon: "📅"
    },
    {
      title: "Project-Based",
      description: "Fixed-scope engagements for MVP development or feature launches",
      icon: "🎯"
    },
    {
      title: "Fractional Product Manager",
      description: "Part-time PM services for startups and growing companies",
      icon: "👤"
    }
  ];

  const deliverables = [
    "Product roadmap",
    "PRDs & user stories",
    "Wireframes (low-fidelity)",
    "KPI dashboards",
    "Launch & GTM plan"
  ];

  const pmProcess = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Understand your product vision, market position, and strategic goals. Assess current state and identify opportunities."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Develop comprehensive product strategy, create roadmaps, and align stakeholders on priorities and timelines."
    },
    {
      number: "03",
      title: "Execution & Delivery",
      description: "Lead product development, coordinate cross-functional teams, and ensure quality delivery on schedule."
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "Monitor performance, analyze data, gather feedback, and continuously optimize for growth and success."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider">PRODUCT MANAGER SERVICES</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              End-to-End Product Management
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-purple-100">
              From Idea to Launch to Growth
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-purple-50 leading-relaxed">
              Strategic product leadership that guides your product through every stage—discovery, 
              planning, execution, and scaling. We own the product lifecycle so you can focus on growth.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-purple-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all shadow-2xl inline-block"
            >
              Connect with a Product Manager
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-purple-200">
              <span className="text-purple-800 text-2xl font-semibold">Product Management Visualization</span>
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

      {/* Core PM Services - Comprehensive Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Product Management Services</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end product ownership covering strategy, planning, execution, and growth
              </p>
            </div>

            <div className="space-y-12">
              {coreServices.map((service, index) => (
                <div 
                  key={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-purple-600 font-bold mt-1 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br ${service.color} opacity-10 h-80 rounded-2xl flex items-center justify-center border-2 border-gray-200 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`text-center bg-gradient-to-br ${service.color} text-white p-8 rounded-xl shadow-xl`}>
                      <div className="text-6xl mb-4">{service.icon}</div>
                      <div className="text-xl font-bold">{service.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Flexible Engagement Models</h3>
              <p className="text-xl text-gray-600">
                Choose the engagement model that fits your needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementModels.map((model, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all"
                >
                  <div className="text-5xl mb-4">{model.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h4>
                  <p className="text-gray-600 text-sm">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Deliverables You Can Expect</h3>
              <p className="text-xl text-gray-600">
                Tangible outputs that guide your product development and strategy
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 border-2 border-purple-200">
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                {deliverables.map((deliverable, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-purple-100 hover:border-purple-300 transition-all"
                  >
                    <div className="text-3xl mb-3">📄</div>
                    <h5 className="font-bold text-gray-900 text-sm">{deliverable}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Process */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Product Management Process</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach that guides your product from concept to market success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pmProcess.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Manager Expert Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold mb-4">Work with Expert Product Managers</h3>
                <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                  Our product managers combine strategic thinking, technical understanding, and leadership 
                  to drive product success across all stages of the product lifecycle
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <div className="w-40 h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white/30">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Michael Rodriguez</h5>
                  <p className="text-xl text-purple-100 mb-6">Senior Product Manager</p>
                  <p className="text-lg text-purple-50 mb-6 leading-relaxed">
                    With over 12 years of product management experience, Michael has led product teams 
                    at startups and enterprises, delivering successful products from 0→1 and scaling them 
                    to millions of users. Specializes in B2B SaaS, AI products, and platform development.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg"
                    >
                      Schedule a Consultation
                    </Link>
                    <a 
                      href="#" 
                      className="bg-purple-700/50 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-purple-700/70 transition-colors backdrop-blur-sm"
                    >
                      View Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Produx PM Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Produx Product Managers?</h3>
              <p className="text-xl text-gray-600">The advantages of working with our product management team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-purple-100 hover:border-purple-300 transition-all">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">End-to-End Ownership</h4>
                <p className="text-gray-600">
                  Complete product lifecycle management from discovery to launch to growth. 
                  We own the product so you can focus on your business.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-indigo-100 hover:border-indigo-300 transition-all">
                <div className="text-5xl mb-4">📊</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Decisions</h4>
                <p className="text-gray-600">
                  Analytics, metrics, user research, and experimentation inform every product decision 
                  for maximum impact and ROI.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border-2 border-blue-100 hover:border-blue-300 transition-all">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Cross-Functional Leadership</h4>
                <p className="text-gray-600">
                  Bridge gaps between teams, align stakeholders, and drive collaboration across 
                  engineering, design, marketing, and business teams.
                </p>
              </div>
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
