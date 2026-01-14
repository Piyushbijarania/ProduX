import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Contact Us | Produx",
  description: "Get in touch with Produx. Start the conversation today, at no cost to you.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Let's Start the Conversation
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Start the conversation today, at no cost to you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:contact@produx.com" className="text-purple-600 hover:underline">
                      contact@produx.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-purple-600 hover:underline">
                      +1 (234) 567-8900
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Contact Us?</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Free consultation
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Custom solutions
                      </li>
                      <li className="flex items-center">
                        <span className="text-purple-600 mr-2">✓</span>
                        Expert guidance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



