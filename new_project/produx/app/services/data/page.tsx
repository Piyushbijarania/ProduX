import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ROIPromise from '@/app/components/ROIPromise';
import CreatingAbundance from '@/app/components/CreatingAbundance';
import Link from 'next/link';

export const metadata = {
  title: "Data Services | Produx",
  description: "Unlock the value of your data. Produx creates more opportunities for your company by using data-driven strategies for business growth and optimization.",
};

export default function Data() {
  const dataServices = [
    {
      icon: "⚙️",
      title: "Data Engineering",
      description: "Take control of your data with secure and efficient access for easy management.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Business Intelligence & Reporting",
      description: "Reveal key insights in your data to drive business decisions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔬",
      title: "Data Science",
      description: "Predict the future and grow your business using existing and real-time data.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const dataStats = [
    {
      number: "97%",
      label: "of gathered data goes unused by organizations",
      icon: "📦"
    },
    {
      number: "21",
      label: "Quintillion Bytes produced every day",
      icon: "🌐"
    },
    {
      number: "71%",
      label: "of executives expect revenue growth from data science",
      icon: "📈"
    }
  ];

  const toolkit = {
    platforms: ["Databricks", "Spark", "Delta Lake", "ML Flow", "AWS RDS", "AWS Redshift", "Azure Synapse", "MongoDB"],
    languages: ["Python", "SQL", "R", "Scala"],
    dataAnalysis: ["NumPy", "Pandas", "SciPy", "Statsmodels"],
    mlTools: ["XGBoost", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "Prophet"],
    reportingTools: ["Power BI", "SSRS", "QlikView", "Tableau", "WebFocus", "Cognos", "BRIO"]
  };

  const clientLogos = [
    'Group 98952', 'mimo-1', 'Group 98954', 'Group 1387', 'Group 98779', 
    'netacent', 'red', 'balsam', 'Layer_1', 'IdahoStars'
  ];

  const dataBlogs = [
    {
      title: "Data Science: What, Why, and How?",
      category: "Data",
      author: "Harshita Singh",
      date: "Mar 13, 2024",
      readTime: "12 minute read",
      excerpt: "Data science is a broad field that extracts knowledge and insights from structured and unstructured data..."
    },
    {
      title: "How Can Data Science Help Businesses Make Better Decisions?",
      category: "Data",
      author: "Nancy Khandelwal",
      date: "Mar 13, 2024",
      readTime: "10 minute read",
      excerpt: "The saga of data science is a transformative epic; not confined to any single industry..."
    },
    {
      title: "What are the Emerging Trends in Data Science?",
      category: "Data",
      author: "Nancy Khandelwal",
      date: "Mar 13, 2024",
      readTime: "9 minute read",
      excerpt: "The world of data science is a hotbed of innovation. Data scientists are constantly exploring new frontiers..."
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
            <h1 className="text-7xl md:text-8xl font-bold mb-6">
              Data
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-emerald-100">
              Unlock the value of your data
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-emerald-50 leading-relaxed">
              Create more opportunities for your company by partnering with Produx, and employ data-driven strategies 
              for business growth and optimization.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-emerald-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl inline-block"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-emerald-600 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 h-[500px] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-emerald-200">
              <span className="text-gray-700 text-2xl font-semibold">Data Services Visualization</span>
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

      {/* Don't Get Lost Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Don't get lost</h3>
              <h4 className="text-3xl font-semibold text-gray-700 mb-8">
                We'll clear the way, you choose the path
              </h4>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {dataServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-emerald-300"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mb-6 mx-auto`}>
                    {service.icon}
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h5>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Statistics */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {dataStats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-100 text-center"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-bold text-emerald-600 mb-3">{stat.number}</div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Data Usage */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
              <h3 className="text-4xl font-bold mb-4">Ethical data usage and governance</h3>
              <h4 className="text-2xl font-semibold text-emerald-100 mb-6">
                We are your partner; we will speak the truth and recommend your best path forward.
              </h4>
              <p className="text-lg text-emerald-50 leading-relaxed max-w-3xl">
                We believe in responsible data practices that protect privacy, ensure compliance, and build trust. 
                Our data governance approach ensures ethical usage while maximizing value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Life Cycle & Organization */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Data Life Cycle</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Proper data tracking can help you learn where you need to improve by analyzing your historical data 
                  and enabling you with the power to predict more cost-effective initiatives in the future.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                  <p className="text-gray-700">
                    From collection to analysis to action, we help you manage your data throughout its entire lifecycle 
                    for maximum value and compliance.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 h-64 rounded-xl flex items-center justify-center">
                <span className="text-gray-600 font-medium">Data Life Cycle Visualization</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 h-64 rounded-xl flex items-center justify-center order-2 md:order-1">
                <span className="text-gray-600 font-medium">Data Organization Visualization</span>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Organization & Optimization</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  All the data and records you keep can be safely and securely profiled and organized so that you can 
                  easily access information and historical data to achieve optimal results.
                </p>
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-lg">
                  <p className="text-gray-700">
                    We help you structure, clean, and optimize your data infrastructure for better accessibility, 
                    performance, and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tool Kit */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Tool Kit</h3>
              <p className="text-xl text-gray-600">The technologies and platforms we use to unlock your data's potential</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4">Platforms</h4>
                <div className="space-y-2">
                  {toolkit.platforms.map((tool, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white/50 px-3 py-2 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-100">
                <h4 className="font-bold text-gray-900 mb-4">Languages</h4>
                <div className="space-y-2">
                  {toolkit.languages.map((tool, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white/50 px-3 py-2 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-100">
                <h4 className="font-bold text-gray-900 mb-4">Data Analysis</h4>
                <div className="space-y-2">
                  {toolkit.dataAnalysis.map((tool, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white/50 px-3 py-2 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-100">
                <h4 className="font-bold text-gray-900 mb-4">ML Tools</h4>
                <div className="space-y-2">
                  {toolkit.mlTools.map((tool, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white/50 px-3 py-2 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-100">
                <h4 className="font-bold text-gray-900 mb-4">Reporting Tools</h4>
                <div className="space-y-2">
                  {toolkit.reportingTools.map((tool, idx) => (
                    <div key={idx} className="text-sm text-gray-700 bg-white/50 px-3 py-2 rounded">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Expert Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl">👤</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h5 className="text-3xl font-bold text-gray-900 mb-2">Wes Dockstader</h5>
                  <p className="text-xl text-gray-600 mb-6">Director of Data and AI</p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Leading our data and AI initiatives with deep expertise in data engineering, analytics, 
                    and machine learning. Helping organizations transform data into strategic advantages.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link 
                      href="/contact" 
                      className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
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


      {/* Data Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Insights and growth tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-gray-200 hover:border-emerald-300"
                >
                  <div className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {blog.category}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors line-clamp-2">
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
                  <a href="#" className="text-emerald-600 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/resources/blogs" 
                className="text-emerald-600 font-semibold hover:underline text-lg inline-flex items-center"
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


