import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Careers | Produx",
  description: "Join the Produx team and help build innovative technology solutions.",
};

export default function Careers() {
  const positions = [
    {
      title: "Senior Software Engineer",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "UX/UI Designer",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Product Manager",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Data Scientist",
      location: "Remote / Hybrid",
      type: "Full-time"
    },
    {
      title: "Cloud Architect",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Careers
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Join Our Team
            </p>
            <p className="text-xl text-gray-600 mb-8">
              It takes a special kind of person to stand with us. We're looking for talented individuals 
              who share our passion for innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
            
            <div className="space-y-4 mb-12">
              {positions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex gap-4 text-gray-600">
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <a 
                      href="/contact" 
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Work at Produx?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-purple-600 mr-3">✓</span>
                  Competitive salary and benefits package
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-3">✓</span>
                  Flexible remote and hybrid work options
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-3">✓</span>
                  Opportunities for professional growth and development
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-3">✓</span>
                  Collaborative and innovative work environment
                </li>
                <li className="flex items-center">
                  <span className="text-purple-600 mr-3">✓</span>
                  Work on cutting-edge technologies and projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



