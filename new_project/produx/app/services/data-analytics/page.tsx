import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Data Analytics | Produx",
  description: "Unlock the value of your data. We create more opportunities for you by using data-driven strategies for business growth.",
};

export default function DataAnalytics() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Analytics
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Unlock the value of your data
            </p>
            <p className="text-xl text-gray-600 mb-8">
              We create more opportunities for you by using data-driven strategies for business growth and optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Data Into Insights</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Data is one of your most valuable assets. Our analytics solutions help you extract meaningful 
                insights, make informed decisions, and drive business growth through data-driven strategies.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Analytics Services</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Business Intelligence</h4>
                  <p className="text-gray-700">Comprehensive BI solutions with interactive dashboards and reports.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h4>
                  <p className="text-gray-700">Forecast trends and make predictions using advanced ML models.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Data Warehousing</h4>
                  <p className="text-gray-700">Build scalable data warehouses for centralized data management.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h4>
                  <p className="text-gray-700">Process and analyze data in real-time for immediate insights.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg inline-block"
              >
                Start Your Analytics Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



