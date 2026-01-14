import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "User Experience & User Interface Design | Produx",
  description: "Elevate experiences, empower users. Enhance user engagement and satisfaction through intuitive and visually appealing interface designs.",
};

export default function UXUI() {
  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const outcomes = [
    {
      title: "Revenue Growth",
      description: "Through faster development and delighted users",
      icon: "📈"
    },
    {
      title: "Strong Brand",
      description: "Through unified documentation, design and assets",
      icon: "🎨"
    },
    {
      title: "Built to Last",
      description: "Through compliant systems and scalable solutions",
      icon: "🏗️"
    },
    {
      title: "UX-Driven Results",
      description: "Faster development, higher conversions, satisfied users and lasting growth",
      icon: "✨"
    }
  ];

  const caseStudies = [
    {
      title: "Transparent Idaho",
      description: "Built a public-facing platform to visualize complex government financial data. Designed for ease of use, enabling citizens to search and explore with zero training. Improved transparency and trust through clean design and data clarity.",
      quote: "My experience with In Time Tec has been excellent. The value we received compared to the amount we paid has been top-notch and well worth it.",
      author: "Brandon Woolf",
      role: "Idaho State Controller",
      stats: [
        { label: "Government Entities", value: "1,300+", description: "data available on Transparent Idaho" },
        { label: "Increase", value: "277%", description: "in new and active visitors to the website" },
        { label: "Ranked State", value: "Top 5", description: "in short and long-term government fiscal stability" }
      ]
    },
    {
      title: "RISE",
      description: "Led comprehensive UX research including surveys, interviews, and competitor analysis to uncover pain points and unmet needs. Restructured content hierarchy and simplified onboarding for different user roles. Designed role-based interfaces (Admin, Coach, Provider) tailored to distinct workflows and goals.",
      quote: "RISE has successfully replaced multiple databases and a partially-used IDHW and IdahoSTARS project.",
      author: "Melissa Crist",
      role: "Director of Early Childhood Programs - Idaho CDHD",
      stats: [
        { label: "Users", value: "1,200+", description: "Joined RISE in 2021 for professional development" },
        { label: "Weeks", value: "4-6", description: "In saved time to process childcare licenses" },
        { label: "Scholarships", value: "800+", description: "Processed, approved, and paid in 2021" }
      ]
    },
    {
      title: "High Sierra Custom Door",
      description: "Rebuilt the website and messaging to modernize the brand and better reflect company capabilities. Created a custom door visualizer to help users design and preview doors before contacting the team. Refreshed the brand identity and web design to create a stronger first impression while honoring the original aesthetic.",
      quote: "Their excitement in learning about our business, in understanding who we are, and in their fascination with the product we put out makes it much more not only enjoyable, but productive for us to know that the people we're working with have a vested interest - a real, genuine interest - in what we're trying to do and a respect for what we produce.",
      author: "Brad Carr",
      role: "Vice President"
    }
  ];

  const industries = [
    "Government Transparency",
    "Agriculture",
    "Corrections",
    "Transportation",
    "Aviation"
  ];

  const productShowcases = [
    {
      title: "ClearSpend: Transparency That Citizens Deserve",
      features: [
        "Designed a user-friendly, AI-powered interface to simplify access to complex government data.",
        "Established a unified visual language and built modular UI components through a robust design system.",
        "Created an accessible design compliant with WCAG 2.1 AA standards.",
        "Built dynamic content editing for stakeholder-controlled updates within the website."
      ]
    },
    {
      title: "NextGen AgTech: Bringing Technology and Innovation to Agriculture",
      features: [
        "Designed a unified product ecosystem tailored to feedlot operations.",
        "Created modular interfaces for tools used individually or as an integrated suite.",
        "Built field-ready, responsive UIs for seamless use in remote and rugged environments across any device."
      ]
    },
    {
      title: "CATS: Streamlined Legal Request and Response Management",
      features: [
        "Reorganized information hierarchy to reduce friction and surface key actions faster.",
        "Simplified complex user flows for staff managing federally mandated court access.",
        "Improved usability and clarity, leading to stronger client buy-in and increased sales conversions."
      ]
    },
    {
      title: "Roll-On Dispatch: Informed and Reliable Load Management",
      features: [
        "Designed a centralized dispatch hub for clear load and stop management.",
        "Reduced driver search time with simplified navigation and task flows.",
        "Improved dispatch efficiency through intuitive, mobile-first interfaces."
      ]
    },
    {
      title: "AeroSuite: Transforming Airport Operations with Intelligence",
      features: [
        "Designed intuitive data dashboards to eliminate redundancy.",
        "Improved decision-making workflows through user-centered automated reporting tools."
      ]
    }
  ];

  const uxServices = [
    {
      title: "Comprehensive UX/UI Solution",
      subtitle: "A Fast and Focused Foundation",
      description: "Research, design, and delivery - all in one package. We tackle the entire UX/UI process so you can operate with complete confidence.",
      deliverables: [
        "Competitive Analysis",
        "Design Systems",
        "Research Plans",
        "Stakeholder & User Interviews",
        "Usability Testing"
      ],
      icon: "🎯"
    },
    {
      title: "UX Research",
      subtitle: "Insights That Deliver",
      description: "\"What are we building? Why are we building it? What pain points need to be solved?\" We answer these questions and more by providing deep user insights through interviews, usability testing, competitive analysis, and other research methodologies.",
      deliverables: [
        "20-Second Gut Test",
        "A/B Testing",
        "Affinity Diagrams",
        "Card Sorting",
        "Heuristic Evaluation",
        "Journey Mapping",
        "Personas",
        "Surveys"
      ],
      icon: "🔍"
    },
    {
      title: "UI Design",
      subtitle: "Intuitive, Accessible, and Outcome-Driven",
      description: "From 0-to-1 experiences to full redesigns, we create modern, scalable, and high-conversion designs for websites, applications, and more.",
      deliverables: [
        "Hi-Fidelity Mockups",
        "Responsive Design",
        "Style Guides",
        "UX Prototyping",
        "Wireframes"
      ],
      icon: "💎"
    },
    {
      title: "Flex Services",
      subtitle: "What You Need and More",
      description: "Looking for something else? From discovery to launch, we're committed to an end-to-end partnership built around your desired business outcomes.",
      deliverables: [
        "Accessibility Audits & Heuristic Evaluations",
        "Brand Audits & Brand Redesigns",
        "Licensable Digital Assets",
        "Proof of Concept (PoC) Creations",
        "UX/UI Workshops",
        "UX/UI Retainer Contracts / Embedded Teams"
      ],
      icon: "🛠️"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Start the Conversation",
      description: "Meet with us to explore your technology needs and desired outcomes. We'll explore what we can achieve together at no cost to you."
    },
    {
      number: "2",
      title: "Customize Your Plan",
      description: "Get the right team for the job. If there's a good fit between our capabilities and your needs, we'll jump right in."
    },
    {
      number: "3",
      title: "Experience Results",
      description: "Elevate experiences, empower users, and enhance satisfaction. Don't worry about risk without reward - you won't pay a cent until you experience ROI."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-violet-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              User Experience & User Interface Design
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-pink-100">
              Your Users. Your Goals. Your Business Growth.
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-pink-50 leading-relaxed">
              We create digital experiences that are designed for impact, built for scale, and ready for delivery.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-rose-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-violet-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-pink-200">
              <span className="text-pink-800 text-2xl font-semibold">UX/UI Design Visualization</span>
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

      {/* Losing Revenue Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Losing Revenue? Stuck Scaling? Lacking In-House Capacity?
              </h3>
              <h4 className="text-4xl font-bold text-rose-600 mb-12">
                It's Time For a New Experience.
              </h4>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-100 hover:border-rose-300 transition-all"
                >
                  <div className="text-5xl mb-4">{outcome.icon}</div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{outcome.title}</h5>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Real Outcomes - Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Backed By Real Outcomes</h3>
              <h4 className="text-2xl font-semibold text-rose-600">
                Measureable Results, Real Impact.
              </h4>
            </div>

            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12 border-2 border-pink-200">
                  <h5 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h5>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{study.description}</p>
                  
                  <div className="bg-white rounded-xl p-6 mb-6 border border-pink-100">
                    <blockquote className="text-gray-700 italic text-lg mb-4">
                      "{study.quote}"
                    </blockquote>
                    <div className="text-gray-600">
                      <span className="font-semibold">- {study.author}</span>
                      {study.role && <span>, {study.role}</span>}
                    </div>
                  </div>

                  {study.stats && (
                    <div className="grid md:grid-cols-3 gap-6">
                      {study.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 border border-pink-100 text-center">
                          <div className="text-4xl font-bold text-rose-600 mb-2">{stat.value}</div>
                          <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                          <div className="text-sm text-gray-600">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built From the Inside Out */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Built From the Inside Out</h3>
              <h4 className="text-2xl font-semibold text-rose-600">
                Your Industry, Your Solution.
              </h4>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-full px-6 py-3 border-2 border-pink-200 hover:border-rose-400 transition-all"
                >
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcases */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {productShowcases.map((showcase, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">{showcase.title}</h5>
                    <ul className="space-y-3">
                      {showcase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-rose-600 font-bold mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="#" 
                      className="inline-block mt-6 text-rose-600 font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl h-64 flex items-center justify-center border-2 border-pink-200">
                    <span className="text-pink-700 font-medium">{showcase.title} Visualization</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI Expert */}
      <section className="py-24 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white/30">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Oscar Gonzalez</h5>
                  <p className="text-xl text-rose-100 mb-6">UX/UI Manager</p>
                  <p className="text-lg text-rose-50 mb-6 leading-relaxed">
                    Leading our UX/UI design services with extensive experience in user research, interface design, 
                    and creating digital experiences that drive business results. Specializing in user-centered 
                    design and accessibility compliance.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-rose-50 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-rose-700/50 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-rose-700/70 transition-colors backdrop-blur-sm"
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

      {/* How We Transform */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">How We Transform</h3>
              <h4 className="text-2xl font-semibold text-rose-600">
                Your Ideas into Top Digital Experiences.
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {uxServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-100 hover:border-rose-300 transition-all"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h5>
                  <h6 className="text-lg font-semibold text-rose-600 mb-4">{service.subtitle}</h6>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  
                  <div>
                    <h6 className="text-sm font-bold text-gray-900 mb-3 uppercase">Deliverable Examples:</h6>
                    <div className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="text-rose-500">•</span>
                          <span>{deliverable}</span>
                        </div>
                      ))}
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

      {/* 3 Easy Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                3 Easy Steps to Deliver With Impact
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-pink-200 hover:border-rose-400 transition-all text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                    {step.number}
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h5>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guiding You Through Every Phase */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Guiding You Through Every Phase
              </h3>
              <h4 className="text-2xl font-semibold text-rose-600">
                We Provide Structured Approach That Sets You Up For Long-Term Success.
              </h4>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-pink-200">
              <div className="grid md:grid-cols-3 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <h5 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h5>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start the Conversation */}
      <section className="py-24 bg-gradient-to-br from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-4">Start the Conversation</h3>
            <h4 className="text-2xl font-semibold text-rose-100 mb-8">At No Cost to You</h4>
            <p className="text-lg text-rose-50 mb-8 leading-relaxed max-w-2xl mx-auto">
              Meet with us to explore your technology needs and desired outcomes. 
              We'll explore what we can achieve together at no cost to you.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-rose-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-rose-50 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Creating Abundance */}
      <CreatingAbundance />

      <Footer />
    </div>
  );
}


