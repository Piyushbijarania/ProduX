import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Quality Assurance & Test Automation | Produx",
  description: "Code you can trust. Your customers shouldn't have to be your software testers. We can help you develop features faster while staying on track.",
};

export default function QATA() {
  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const costMultipliers = [
    { stage: "Requirements", cost: "1x", color: "from-blue-500 to-blue-600" },
    { stage: "Design", cost: "3x", color: "from-indigo-500 to-indigo-600" },
    { stage: "Coding", cost: "7x", color: "from-purple-500 to-purple-600" },
    { stage: "Testing", cost: "15x", color: "from-pink-500 to-pink-600" },
    { stage: "Deployment", cost: "30x-100x", color: "from-red-500 to-red-600" }
  ];

  const qaServices = [
    "Functional Testing",
    "Performance Testing",
    "Security Testing",
    "Usability Testing",
    "Compatibility Testing",
    "Regression Testing",
    "Exploratory Testing",
    "API Testing"
  ];

  const automationServices = [
    "Test Automation Framework Development",
    "CI/CD Integration",
    "API Test Automation",
    "Mobile Test Automation",
    "Web Test Automation",
    "Performance Test Automation",
    "Test Data Management",
    "Test Reporting & Analytics"
  ];

  const shiftLeftApproach = [
    {
      phase: "Requirements",
      description: "Early validation of requirements to catch issues before development begins"
    },
    {
      phase: "Design",
      description: "Test planning and design review to ensure testability from the start"
    },
    {
      phase: "Development",
      description: "Unit testing, code reviews, and continuous integration during development"
    },
    {
      phase: "Pre-Production",
      description: "Comprehensive testing including integration, system, and user acceptance testing"
    },
    {
      phase: "Production",
      description: "Monitoring, production testing, and continuous feedback loops"
    }
  ];

  const qaBlogs = [
    {
      title: "The Importance of Test Automation in Modern Software Development",
      category: "QA/TA",
      author: "Sarah Johnson",
      date: "Nov 15, 2024",
      readTime: "7 minute read",
      excerpt: "Test automation has become essential for modern software development teams. Learn how automation can accelerate your testing process..."
    },
    {
      title: "Shift-Left Testing: Catching Bugs Early in the Development Cycle",
      category: "QA/TA",
      author: "Michael Chen",
      date: "Nov 10, 2024",
      readTime: "9 minute read",
      excerpt: "The shift-left approach to testing helps catch defects earlier, reducing costs and improving software quality. Discover best practices..."
    },
    {
      title: "Building a Comprehensive QA Strategy for Your Product",
      category: "QA/TA",
      author: "Emily Rodriguez",
      date: "Nov 5, 2024",
      readTime: "8 minute read",
      excerpt: "A well-defined QA strategy is crucial for delivering high-quality software. Learn how to build a comprehensive testing strategy..."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Quality Assurance & Test Automation
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-blue-100">
              Code you can trust
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-50 leading-relaxed">
              Your customers shouldn't have to be your software testers. We can help you develop features 
              faster while staying on track.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-indigo-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-200">
              <span className="text-blue-800 text-2xl font-semibold">QA & Test Automation Visualization</span>
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

      {/* Don't let the tech bugs bite */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">🐛</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Don't let the tech bugs bite</h3>
              <h4 className="text-2xl font-semibold text-indigo-600">
                Bugs bite, we don't like it either
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all">
                <div className="text-5xl mb-4">⚠️</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">Broken Applications?</h5>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nothing frustrates users more than broken software. Quality assurance ensures your applications 
                  work as intended, every time.
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="text-5xl mb-4">✨</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">Want a Fresh Start?</h5>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Let us help you build quality into your development process from the ground up. 
                  Start fresh with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creating a safety net */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Creating a safety net at every stage of the process
              </h3>
              <h4 className="text-2xl font-semibold text-indigo-600">
                Code that's clear enough for your clients to trust
              </h4>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-blue-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Quality assurance isn't just about finding bugs—it's about building confidence. 
                    We create comprehensive testing strategies that catch issues early and ensure your 
                    software meets the highest standards.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our approach integrates testing throughout the entire development lifecycle, 
                    from requirements to deployment, ensuring quality at every step.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-700 font-medium">Safety Net Visualization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <h4 className="text-2xl font-semibold text-indigo-600">
                We get it, bugs are tough to find
              </h4>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our comprehensive QA services ensure your software is thoroughly tested across all dimensions. 
                We employ a combination of manual and automated testing techniques to catch defects before they reach production.
              </p>
              
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Our QA Services:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {qaServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Automation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Test Automation</h3>
              <h4 className="text-2xl font-semibold text-purple-600">
                Cascading failures can be complex
              </h4>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Automation accelerates testing while improving consistency and coverage. We build robust 
                test automation frameworks that integrate seamlessly with your CI/CD pipeline, enabling 
                faster feedback and more reliable releases.
              </p>
              
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Our Automation Services:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {automationServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-purple-50 rounded-lg p-3 border border-purple-200">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Neglecting Your Code */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">The Cost of Neglecting Your Code</h3>
              <p className="text-xl text-gray-300">
                The earlier you catch defects, the less they cost to fix
              </p>
            </div>

            <div className="bg-gray-800 rounded-3xl p-12 border-2 border-gray-700">
              <div className="space-y-6">
                {costMultipliers.map((item, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-32 text-right">
                      <span className="text-lg font-semibold">{item.stage}</span>
                    </div>
                    <div className="flex-1">
                      <div className={`h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-between px-6 shadow-lg`}>
                        <span className="text-white font-bold text-lg">{item.cost}</span>
                        <span className="text-white/80 text-sm">Cost Multiplier</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-lg">
                  Source: NIST - The cost of fixing defects increases exponentially the later they are discovered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Detect Defects - Shift-Left Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                How We Detect Defects Within Your System
              </h3>
              <h4 className="text-2xl font-semibold text-indigo-600">
                The shift-left approach
              </h4>
            </div>

            <div className="space-y-6">
              {shiftLeftApproach.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-indigo-400 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-2xl font-bold text-gray-900 mb-3">{item.phase}</h5>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QA Expert */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white/30">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Alex Callender</h5>
                  <p className="text-xl text-indigo-100 mb-6">SDET (Software Development Engineer in Test)</p>
                  <p className="text-lg text-indigo-50 mb-6 leading-relaxed">
                    Leading our QA and test automation services with extensive experience in building robust 
                    testing frameworks and ensuring software quality. Specializing in shift-left testing 
                    approaches and comprehensive test automation strategies.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-indigo-700/50 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700/70 transition-colors backdrop-blur-sm"
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


      {/* QA Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {qaBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 hover:shadow-lg transition-all border border-blue-200 hover:border-indigo-400"
                >
                  <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-700 transition-colors line-clamp-2">
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
                  <a href="#" className="text-indigo-700 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-indigo-700 font-semibold hover:underline text-lg inline-flex items-center"
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


