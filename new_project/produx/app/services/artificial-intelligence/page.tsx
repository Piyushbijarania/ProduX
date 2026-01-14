import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Artificial Intelligence Solutions | Produx",
  description: "Don't get left behind in the AI revolution. Stay ahead of the curve with our state-of-the-art Gen-AI solutions.",
};

export default function ArtificialIntelligence() {
  const aiServices = [
    {
      icon: "💼",
      title: "Consulting & Strategy",
      description: "Comprehensive consultancy services and enterprise-level generative AI adoption strategies addressing unique industry challenges.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Data Science & AI Engineering",
      description: "Advanced data analytics and predictive modeling along with the development of AI models that tailor to your business needs.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🏗️",
      title: "AI Architecture & Development",
      description: "Scalable AI architectures and robust AI solutions that solve complex problems.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🤖",
      title: "Specialized Language Models",
      description: "Models that deliver precise and actionable insights directly from your enterprise data.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const specializedModels = [
    {
      title: "Marketing SLM",
      description: "Built on our Gen-AI platform called DataInsightAI, Marketing SLM leverages AI and large language models (LLMs) to empower marketers with self-service capabilities. It allows users to extract meaningful insights from enterprise datasets through natural language queries, eliminating the need for deep technical expertise. The platform integrates seamlessly with various data sources, including internal datasets, external data from third parties, and real-time data streams.",
      icon: "📈",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Healthcare SLM",
      description: "Enhance patient outcomes and streamline clinical workflows with AI-driven insights and automation. Our Receptionist SLM can assist patients in booking appointments and more.",
      icon: "🏥",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Banking SLM",
      description: "Detect fraud, manage risk, and deliver personalized financial services with advanced AI and machine learning capabilities. Our Front-Desk-Officer SLM can help with answering calls, scheduling appointments, and handling basic customer service inquiries.",
      icon: "🏦",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Impact-Based Forecast SLM",
      description: "Traditional weather forecasts predict what the weather will be like. Impact-Based Forecasting (IBF), on the other hand, warns about potential impacts like road closures or transportation disruptions in addition to the weather. This shift in showing how the weather affects people and communities helps them understand what actions they need to take to stay safe and protect their property.",
      icon: "🌦️",
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      title: "Voice SLM",
      description: "Unleash the power of advanced speech recognition with Voice SLM. Our Gen-AI platform's smart UI enables seamless interaction with your data through voice commands in 99 languages and dynamic real-time view changes.",
      icon: "🎤",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const aiBlogs = [
    {
      title: "Data Quality in AI: Challenges, Importance, and Best Practices",
      category: "Artificial Intelligence",
      author: "Nancy Khandelwal",
      date: "Sep 25, 2024",
      readTime: "9 minute read",
      excerpt: "Ever heard the concept 'Garbage in, garbage out'? It's a common principle in data science..."
    },
    {
      title: "DataInsightAI: Benefits, Key Components and Real-World Applications",
      category: "Artificial Intelligence",
      author: "Nancy Khandelwal",
      date: "Sep 25, 2024",
      readTime: "10 minute read",
      excerpt: "Why are data insights so important in today's world? Well, in a data-driven era..."
    },
    {
      title: "Why Data Matters in the AI Revolution",
      category: "Artificial Intelligence",
      author: "Nancy Khandelwal",
      date: "Sep 25, 2024",
      readTime: "8 minute read",
      excerpt: "As we witness organizations increasingly relying on AI, it's crucial to understand..."
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
              <span className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Artificial Intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center">
              Don't get left behind<br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                in the AI revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Stay ahead of the curve with our state-of-the-art Gen-AI solutions. Let's embark on a journey together 
              with a pilot project to explore the immense value Gen-AI can add to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center"
              >
                Explore AI Solutions
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

      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-200 via-indigo-200 to-pink-200 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-gray-700 text-2xl font-semibold">AI Technology Visualization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Styled Differently */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {clientLogos.map((logo, i) => (
              <div key={i} className="h-16 w-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 hover:opacity-100 transition-opacity">
                <span className="text-gray-600 text-xs font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services - Large Cards */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">
                Powering Your Industry with AI
              </h3>
              <h4 className="text-3xl font-semibold text-gray-700 mb-4">
                Our AI Services
              </h4>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to transform your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-300 group"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Language Models - Colorful Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">
                Our Specialized Language Models
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry-specific AI solutions that understand your unique challenges
              </p>
            </div>

            <div className="space-y-8">
              {specializedModels.map((model, index) => (
                <div 
                  key={index} 
                  className={`${model.color} rounded-2xl p-8 border-2 shadow-md hover:shadow-xl transition-all`}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-6xl flex-shrink-0">{model.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-3xl font-bold text-gray-900 mb-4">{model.title}</h4>
                      <p className="text-gray-700 leading-relaxed text-lg">{model.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Section - Different Layout */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  A Partner You Can Trust
                </h3>
                <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                  Talk to a Generative AI Expert
                </h4>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Choosing the right AI solution provider is crucial for your success. Our dedicated team of AI experts, 
                  data scientists, and industry specialists are committed to delivering tailored AI solutions that drive 
                  real business value. Trust us to be the right team for your AI journey.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold text-gray-900 mb-2">Rajeev Kumar</h5>
                  <p className="text-xl text-gray-600 mb-6">AI Specialist</p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
                    >
                      Contact Now
                    </Link>
                    <a 
                      href="#" 
                      className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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


      {/* AI Blog Section - Custom Styling */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Insights and Growth Tools
              </h3>
              <p className="text-xl text-gray-600">Stay informed with the latest AI trends and best practices</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all border border-gray-200 hover:border-purple-300 group"
                >
                  <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
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
                  <a href="#" className="text-purple-600 font-semibold hover:underline flex items-center group-hover:gap-2 transition-all">
                    Read More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="inline-flex items-center text-purple-600 font-semibold hover:underline text-lg"
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
