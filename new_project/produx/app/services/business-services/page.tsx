import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Business Services | Produx",
  description: "Marketing, ITSM, and ITMSP. Scale your business and experience growth without the growing pains.",
};

export default function BusinessServices() {
  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const itsmServices = [
    "Helpdesk Support",
    "On-Site Support",
    "Network Management",
    "Technology Consulting",
    "Process Diagramming",
    "Vendor Management",
    "IT Consulting",
    "Remote Management",
    "Monitoring"
  ];

  const marketingServices = [
    "Marketing Consultation",
    "Custom Web Development",
    "Video Production",
    "AI Strategy",
    "Social Media Advertising",
    "Content Messaging",
    "SEO",
    "Digital Footprint Audit",
    "Rebranding",
    "Graphic Design"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "What systems exist, what state are they in, and what complaints do you hear the most? What are your pain points?"
    },
    {
      number: "02",
      title: "Strategic planning",
      description: "How we can improve your processes and systems so they are better, faster, resilient, and recoverable?"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We ensure the seamless integration and optimal performance of essential systems within your organization."
    }
  ];

  const businessServicesBlogs = [
    {
      title: "The Best Digital Marketing Services for Your Business",
      category: "Business Services",
      author: "Rachel Wiedenmann",
      date: "Jun 28, 2024",
      readTime: "9 minute read",
      excerpt: "Can you imagine speaking at a public event without a microphone? Effective marketing amplifies your brand..."
    },
    {
      title: "Guide to IT Service Management (ITSM): Strategies and Implementation",
      category: "Business Services",
      author: "Rohit Chauhan",
      date: "Jun 28, 2024",
      readTime: "17 minute read",
      excerpt: "ITSM, or information technology services management, is the practice of designing, implementing, and managing IT services..."
    },
    {
      title: "What is an IT Managed Service Provider (MSP)?",
      category: "Business Services",
      author: "Nancy Khandelwal",
      date: "Jun 27, 2024",
      readTime: "9 minute read",
      excerpt: "Do you ever feel like your IT department is a black box? Understanding MSPs can transform your IT operations..."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Business Services
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              The right way to scale your business
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-emerald-50 leading-relaxed">
              Breaking down the barriers that keep you from configuring, optimizing, 
              and accelerating your business growth.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-emerald-200">
              <span className="text-emerald-800 text-2xl font-semibold">Business Services Visualization</span>
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

      {/* The Team You Deserve */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">The team you deserve</h3>
              <h4 className="text-2xl font-semibold text-emerald-600">
                The key to seeing an exponential rise in your ROI
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all">
                <div className="text-5xl mb-4">🖥️</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-3">ITSM & ITMSP</h5>
                <p className="text-gray-600">
                  No modern company can function without technology. Proper IT support ensures your tech works for you.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-200 hover:border-teal-400 transition-all">
                <div className="text-5xl mb-4">📢</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-3">Marketing</h5>
                <p className="text-gray-600">
                  Unlock your brand's potential and don't let your competitors get more business just because they have better marketing.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Helping businesses grow without the growing pains
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* ITSM & ITMSP Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">ITSM & ITMSP</h3>
            </div>

            {/* How much will it cost */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 mb-12 border-2 border-emerald-200">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                How much will it cost you when your network goes down?
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You deserve an expert service provider that is efficient, reliable, and hyper-scalable. 
                We can be your dedicated team or augment your current team.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-700 font-medium">ITSM Services Visualization</span>
                </div>
              </div>
            </div>

            {/* Don't get lost */}
            <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">
                  Don't get lost in your technology
                </h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The last thing you need to feel is uncertain about your hardware or software.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The market is always shifting, but our mature IT support department maintains critical skillsets 
                  in a constantly evolving landscape while also providing 24/7 global IT support.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-teal-200">
                <span className="text-teal-800 font-medium text-lg">Technology Support Visualization</span>
              </div>
            </div>

            {/* A smarter way */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                A smarter way to manage your IT
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are scalable compared to traditional ITSM offerings. Because of our existing global support network, 
                our skills and certifications support your company growth around the clock.
              </p>
              
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Specific ITSM Services:</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  {itsmServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-400 transition-all">
                  <div className="text-5xl font-bold text-emerald-600 mb-4">{step.number}</div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h5>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* ITSM Expert */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border-4 border-white/30">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Simon Williams</h5>
                  <p className="text-xl text-emerald-100 mb-6">IT Manager</p>
                  <p className="text-lg text-emerald-50 mb-6 leading-relaxed">
                    Leading our ITSM and ITMSP services with extensive experience in IT infrastructure management, 
                    network operations, and global support delivery. Ensuring your technology works seamlessly for your business.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-emerald-700/50 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700/70 transition-colors backdrop-blur-sm"
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

      {/* Marketing Section */}
      <section className="py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Marketing</h3>
            </div>

            {/* Help your business stand out */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 mb-12 border-2 border-teal-200">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                Help your business stand out in a crowded marketplace
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Without strong marketing, even the best products can be outsold by competitors. 
                Let us amplify your brand so you can enhance your voice.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                <div className="h-64 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-700 font-medium">Marketing Services Visualization</span>
                </div>
              </div>
            </div>

            {/* Low ROI Problem */}
            <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-4xl mb-4">⚠️</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Low Return on Investment (ROI)</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  According to Nielsen, businesses that fail to use data-driven marketing strategies often see a lower ROI 
                  on their marketing investments. Effective marketing allows businesses to allocate resources more efficiently 
                  and achieve better results.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-teal-200">
                <span className="text-teal-800 font-medium text-lg">ROI Impact Visualization</span>
              </div>
            </div>

            {/* We can be your dedicated marketing guide */}
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-12">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                We can be your dedicated marketing guide
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Marketing is the only way to expand your business successfully and rise above your competition. 
                We can augment, consult for, or be your team.
              </p>
              
              <div className="mb-8">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Specific Marketing Services:</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {marketingServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 bg-teal-50 rounded-lg p-3 border border-teal-200">
                      <span className="text-teal-600 font-bold">✓</span>
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Marketing Expert */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border-4 border-white/30">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold mb-2">Eric Keener</h5>
                  <p className="text-xl text-teal-100 mb-6">Director of Marketing</p>
                  <p className="text-lg text-teal-50 mb-6 leading-relaxed">
                    Leading our marketing services with extensive experience in brand development, digital marketing strategies, 
                    and market expansion. Helping businesses amplify their voice and stand out in competitive markets.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-teal-700/50 text-white border-2 border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-teal-700/70 transition-colors backdrop-blur-sm"
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


      {/* Business Services Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessServicesBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 hover:shadow-lg transition-all border border-emerald-200 hover:border-emerald-400"
                >
                  <div className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-700 transition-colors line-clamp-2">
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
                  <a href="#" className="text-emerald-700 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-emerald-700 font-semibold hover:underline text-lg inline-flex items-center"
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


