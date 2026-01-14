import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Resources | Produx",
  description: "Access valuable resources, case studies, and insights from Produx.",
};

export default function Resources() {
  const resourceCategories = [
    {
      title: "Blogs",
      description: "Read the latest insights, trends, and best practices from our team of experts.",
      link: "/resources/blogs",
      icon: "📝"
    },
    {
      title: "Case Studies",
      description: "Explore real-world success stories and see how we've helped businesses achieve their goals.",
      link: "/resources/case-studies",
      icon: "📊"
    },
    {
      title: "White Papers",
      description: "In-depth research and analysis on technology trends and industry best practices.",
      link: "#",
      icon: "📄"
    },
    {
      title: "Webinars",
      description: "Join our webinars to learn from industry experts and stay updated with the latest technologies.",
      link: "#",
      icon: "🎥"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Knowledge and Insights
            </p>
            <p className="text-xl text-gray-600">
              Access valuable resources to help your business grow and succeed
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {resourceCategories.map((category, index) => (
                <Link 
                  key={index}
                  href={category.link}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all group"
                >
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <span className="text-purple-600 font-semibold group-hover:underline">
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



