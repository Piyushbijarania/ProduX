import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Our Story | Produx",
  description: "Learn about Produx's journey and our mission to deliver innovative technology solutions that drive excellence.",
};

export default function OurStory() {
  const founders = [
    {
      name: "Alexandra Chen",
      role: "CEO | President | Founder",
      tagline: "Building Excellence Through Innovation",
      quote: "I founded Produx with a vision to bridge the gap between cutting-edge technology and real-world business solutions. Our commitment to excellence isn't just a tagline—it's the foundation of everything we do. We believe that exceptional technology should be accessible, reliable, and transformative.",
      bio: "Alexandra brings over 18 years of experience in technology leadership and software development. Prior to founding Produx, she led product teams at Fortune 500 companies and has been instrumental in launching over 50 successful products to market.",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO | Co-founder",
      tagline: "Technology That Transforms",
      quote: "Technology is only as powerful as the problems it solves. At Produx, we're not just building software—we're crafting solutions that make a real difference in how businesses operate and grow. Every line of code we write is driven by purpose.",
      bio: "Marcus is a technology visionary with 20+ years of experience in software architecture and engineering. He has led technical teams at startups and enterprises, specializing in scalable systems and innovative technology solutions.",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      role: "COO | Co-founder",
      tagline: "Excellence in Execution",
      quote: "Our clients trust us with their most critical projects because we deliver results. We've built Produx on a foundation of operational excellence, where every process is optimized for quality, efficiency, and client success.",
      bio: "Sarah brings extensive experience in operations and project management, having overseen the delivery of hundreds of successful projects. Her expertise in process optimization and team leadership drives our operational excellence.",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "VP of Strategy | Co-founder",
      tagline: "Strategic Vision, Real Results",
      quote: "Strategy without execution is just a plan. At Produx, we combine strategic thinking with hands-on execution to deliver solutions that not only meet but exceed our clients' expectations. We're partners in your success.",
      bio: "David has over 15 years of experience in business strategy and technology consulting. He specializes in helping businesses align technology initiatives with strategic goals and has worked with clients across multiple industries.",
      linkedin: "#"
    },
    {
      name: "Emily Watson",
      role: "VP of Client Success | Co-founder",
      tagline: "Your Success Is Our Mission",
      quote: "Every client relationship is a partnership. We're committed to understanding your unique challenges and delivering solutions that drive real business value. Your success is the measure of our success.",
      bio: "Emily has dedicated her career to client success and relationship management. With over 12 years of experience, she has built and led client success teams that consistently deliver exceptional results and maintain long-term partnerships.",
      linkedin: "#"
    }
  ];

  const values = [
    {
      title: "EXCELLENCE",
      description: "We pursue excellence in everything we do. From code quality to client relationships, we set the highest standards and consistently deliver beyond expectations.",
      icon: "⭐",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "INNOVATION",
      description: "We stay at the forefront of technology, continuously learning and adopting new tools and methodologies to deliver cutting-edge solutions that give our clients a competitive edge.",
      icon: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "INTEGRITY",
      description: "We operate with complete transparency and honesty. We say what we do and do what we say, building trust through consistent action and reliable delivery.",
      icon: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "PARTNERSHIP",
      description: "We view every client relationship as a true partnership. We invest in understanding your business, your goals, and your challenges to deliver solutions that drive real value.",
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center">
              We're a Platform Dedicated to<br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Building Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto text-center leading-relaxed">
              We Just Happen to Build Software.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
              In 2015, a group of passionate technologists and business leaders came together with a shared vision: 
              to create a technology company that doesn't just deliver software, but builds excellence into every solution, 
              every relationship, and every outcome.
            </p>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          ></div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-semibold">
                <strong>In 2015, a group of passionate technologists and business leaders came together with a shared vision:</strong> 
                to create a technology company that doesn't just deliver software, but builds excellence into every solution, 
                every relationship, and every outcome.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These founders left the security of established careers to pursue something greater—a company built on the 
                principles of excellence, innovation, integrity, and true partnership. They committed to creating a platform 
                where technology serves as a catalyst for business transformation and growth.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our story is what happens when experienced professionals combine their expertise with a relentless commitment 
                to quality. Our team is full of passionate individuals who are dedicated to making a meaningful impact through 
                the work we do and the solutions we deliver.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Produx stands as a testament to what's possible when you combine technical excellence with business 
                acumen, strategic thinking with hands-on execution, and innovation with reliability. We're not just building 
                software—we're building the foundation for our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Founders</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The visionaries who built Produx on a foundation of excellence and innovation
              </p>
            </div>

            <div className="space-y-16">
              {founders.map((founder, index) => (
                <div 
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 border-2 border-purple-200">
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h4>
                      <p className="text-xl text-purple-700 font-semibold mb-4">{founder.role}</p>
                      <p className="text-lg text-purple-600 font-medium mb-6 italic">
                        "{founder.tagline}"
                      </p>
                      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 border-l-4 border-purple-500 pl-4">
                        "{founder.quote}"
                      </blockquote>
                      <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                      <a 
                        href={founder.linkedin} 
                        className="text-purple-600 font-semibold hover:underline inline-flex items-center"
                      >
                        See More on LinkedIn →
                      </a>
                    </div>
                  </div>
                  <div className={`bg-gradient-to-br from-purple-200 to-indigo-200 rounded-2xl h-80 flex items-center justify-center border-2 border-purple-300 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <span className="text-6xl">👤</span>
                      </div>
                      <div className="text-gray-700 font-semibold">{founder.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Does Building Excellence Mean? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                What does building excellence mean?
              </h3>
              <p className="text-2xl font-semibold text-purple-600 mb-8">
                When we say building excellence, we mean delivering exceptional value, 
                maintaining the highest standards, and achieving measurable results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 border-2 border-purple-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We truly believe that by living our values and maintaining our commitment to excellence, 
                we can create more value in our world—more innovation, more success, more growth, more 
                opportunities. For software development and technology services, this means that our solutions 
                enable companies to achieve their goals, transform their operations, and compete more effectively 
                in their markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Building excellence isn't just about the code we write or the systems we build—it's about the 
                relationships we forge, the problems we solve, and the impact we make. Every project is an 
                opportunity to demonstrate our commitment to quality, innovation, and client success.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className="mt-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center border-2 border-gray-300">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-gray-700 font-semibold text-lg">Building Excellence - Our Story</p>
                <p className="text-gray-600 text-sm mt-2">Click to play video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to build excellence for others
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-4xl flex-shrink-0 shadow-lg`}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">
              We strive to uplift and inspire everyone we interact with.
            </h3>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              A strong part of this is how we live professionally and privately within our core company values. 
              We're committed to building excellence in everything we do, and we'd love to partner with you on your journey.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all shadow-2xl inline-block"
            >
              Let's Build Excellence Together
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
