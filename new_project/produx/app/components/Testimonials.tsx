const testimonials = [
  {
    quote: "Produx has been exceptional in delivering value for our investment. The service quality has been outstanding and well worth it. I would highly recommend their work and dedication. What we have now is a product that I'm proud to showcase.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "Tech Innovations Inc."
  },
  {
    quote: "What sets Produx apart is their unique approach to partnership. They take the time to truly understand your business and build genuine relationships. They're willing to put risk on themselves first and build trust through action, not just words.",
    author: "Michael Chen",
    role: "VP of Engineering",
    company: "Digital Solutions Group"
  },
  {
    quote: "Produx was committed to creating efficient, innovative solutions and they delivered beyond expectations. From day one, it was clear they were dedicated not only to our success, but to pushing the boundaries of what's possible. They've created products that will make a real difference.",
    author: "Emily Rodriguez",
    role: "Product Director",
    company: "NextGen Platforms"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            What our clients say
          </h3>
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">
            Trusted by industry leaders
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to excellence in everything we do. Our clients' success stories 
            reflect our dedication to delivering exceptional results and building lasting partnerships.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-purple-300">
            <span className="text-gray-600 text-xl">Client Success Video</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h4 className="text-2xl font-semibold text-gray-900 mb-8">Client Reviews</h4>
          <h5 className="text-xl font-semibold text-gray-700 mb-8">See how we deliver for our partners</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl text-purple-600 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">{testimonial.quote}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-sm mt-2">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
