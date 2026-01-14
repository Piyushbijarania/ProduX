import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Case Studies | Produx",
  description: "Explore success stories and case studies from Produx clients.",
};

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration Success",
      client: "Tech Innovations Inc.",
      industry: "Technology",
      challenge: "Migrating legacy systems to cloud infrastructure",
      solution: "Comprehensive cloud migration strategy with zero downtime",
      results: "50% cost reduction, 3x performance improvement"
    },
    {
      title: "AI-Powered Customer Service Transformation",
      client: "Digital Solutions Group",
      industry: "Retail",
      challenge: "Improving customer service efficiency and response times",
      solution: "AI chatbot implementation with natural language processing",
      results: "80% faster response times, 60% reduction in support costs"
    },
    {
      title: "Mobile App Development for Healthcare",
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Creating a secure, HIPAA-compliant mobile application",
      solution: "Cross-platform mobile app with advanced security features",
      results: "100K+ downloads, 4.8 star rating, full HIPAA compliance"
    },
    {
      title: "Data Analytics Platform Implementation",
      client: "Finance Corp",
      industry: "Finance",
      challenge: "Building a real-time analytics platform for business intelligence",
      solution: "Custom data analytics platform with predictive capabilities",
      results: "Real-time insights, 40% improvement in decision-making speed"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Success Stories from Our Clients
            </p>
            <p className="text-xl text-gray-600">
              See how we've helped businesses achieve their goals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h2>
                      <div className="flex gap-4 text-gray-600 mb-4">
                        <span className="font-semibold">{study.client}</span>
                        <span>•</span>
                        <span>{study.industry}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                      <p className="text-gray-700 text-sm">{study.solution}</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                      <p className="text-gray-700 text-sm font-semibold">{study.results}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a href="/contact" className="text-purple-600 font-semibold hover:underline">
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



