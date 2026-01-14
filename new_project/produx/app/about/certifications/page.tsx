import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Certifications | Produx",
  description: "Produx certifications and industry recognition for excellence in technology solutions.",
};

export default function Certifications() {
  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security, Availability, and Confidentiality" },
    { name: "AWS Partner", description: "Amazon Web Services Certified" },
    { name: "Microsoft Partner", description: "Microsoft Certified Partner" },
    { name: "Google Cloud Partner", description: "Google Cloud Platform Certified" },
    { name: "CMMI Level 5", description: "Capability Maturity Model Integration" },
    { name: "PMI Certified", description: "Project Management Institute" },
    { name: "Scrum Alliance", description: "Agile and Scrum Certifications" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Certifications
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Recognized Excellence in Technology
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-12 text-center">
              We are proud to receive prestigious awards and certifications that recognize our commitment 
              to excellence, security, and industry best practices.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Award-Winning Excellence</h3>
              <p className="text-gray-700">
                Our certifications and awards reflect our dedication to delivering exceptional technology 
                solutions and maintaining the highest standards of quality and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



