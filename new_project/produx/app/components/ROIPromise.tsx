export default function ROIPromise() {
  const certifications = [
    "Microsoft", "AWS", "Google Cloud", "Salesforce", "SOC2", "ISO 27001", "Scrum", "CSPO", 
    "HubSpot", "CSM", "CMMI", "PMI", "Kubernetes", "Docker", "Terraform", "GitHub"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Promise:</h3>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                ROI OR YOU DON'T PAY
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to your success. Our goal is to see you reach your full potential. 
              We invest in your success and are confident we can help you achieve your goals, 
              providing a space for you to be more, do more, and have more.
            </p>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                We are backed by the best
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-20 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
                >
                  <span className="text-xs font-semibold text-gray-700 text-center">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
