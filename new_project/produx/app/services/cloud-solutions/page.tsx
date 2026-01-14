import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Cloud Solutions | Produx",
  description: "Scalable cloud infrastructure and solutions to power your business growth.",
};

export default function CloudSolutions() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Solutions
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Scale without limits
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Modernize your infrastructure with scalable cloud solutions that grow with your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cloud Infrastructure That Works for You</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our cloud solutions help businesses migrate to the cloud, optimize existing cloud infrastructure, 
                and build cloud-native applications that scale effortlessly.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Cloud Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cloud Migration</h4>
                  <p className="text-gray-700">Seamless migration to AWS, Azure, or Google Cloud Platform.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cloud Architecture</h4>
                  <p className="text-gray-700">Design scalable, secure, and cost-effective cloud architectures.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">DevOps & CI/CD</h4>
                  <p className="text-gray-700">Automate deployments and streamline development workflows.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Cloud Security</h4>
                  <p className="text-gray-700">Implement robust security measures and compliance standards.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg inline-block"
              >
                Get Cloud Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



