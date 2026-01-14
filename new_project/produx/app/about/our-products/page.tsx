import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Our Products | Produx",
  description: "Explore Produx's innovative product portfolio designed to meet your business needs.",
};

export default function OurProducts() {
  const products = [
    {
      name: "ProSuite",
      description: "Comprehensive business management suite with integrated modules for operations, finance, and customer management.",
      features: ["CRM Integration", "Financial Management", "Analytics Dashboard"]
    },
    {
      name: "CloudSync Pro",
      description: "Enterprise-grade cloud synchronization and collaboration platform for distributed teams.",
      features: ["Real-time Sync", "Team Collaboration", "Secure Storage"]
    },
    {
      name: "DataFlow",
      description: "Advanced data integration and ETL platform for seamless data pipeline management.",
      features: ["Data Integration", "ETL Pipelines", "Real-time Processing"]
    },
    {
      name: "SecureNet",
      description: "Comprehensive cybersecurity platform with threat detection and prevention capabilities.",
      features: ["Threat Detection", "Network Security", "Compliance Management"]
    },
    {
      name: "AppBuilder",
      description: "Low-code platform for rapid application development and deployment.",
      features: ["Visual Builder", "Pre-built Templates", "API Integration"]
    },
    {
      name: "Analytics Plus",
      description: "Powerful business intelligence and analytics platform with advanced visualization tools.",
      features: ["Data Visualization", "Custom Reports", "Predictive Analytics"]
    },
    {
      name: "MobileFirst",
      description: "Cross-platform mobile development framework for iOS and Android applications.",
      features: ["Native Performance", "Cross-platform", "Offline Support"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Solutions Built for Your Business Needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="text-purple-600 font-semibold hover:underline">
                    Learn More →
                  </a>
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



