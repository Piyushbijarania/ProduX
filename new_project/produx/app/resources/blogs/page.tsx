import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Blogs | Produx",
  description: "Read the latest insights, trends, and best practices from Produx.",
};

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of Cloud-Native Development: Trends and Best Practices",
      category: "Technology",
      author: "Alex Thompson",
      date: "Jan 15, 2026",
      readTime: "5 minute read",
      excerpt: "Explore the latest trends in cloud-native development and how they're shaping the future of software engineering."
    },
    {
      title: "How AI and Machine Learning Are Transforming Enterprise Software",
      category: "Artificial Intelligence",
      author: "Maria Garcia",
      date: "Jan 10, 2026",
      readTime: "6 minute read",
      excerpt: "Discover how AI and ML are revolutionizing enterprise software and creating new opportunities for businesses."
    },
    {
      title: "Digital Transformation: A Strategic Guide for Modern Businesses",
      category: "Business Strategy",
      author: "David Kim",
      date: "Jan 5, 2026",
      readTime: "7 minute read",
      excerpt: "A comprehensive guide to digital transformation strategies that help businesses stay competitive in today's market."
    },
    {
      title: "Cybersecurity Best Practices for 2026",
      category: "Cybersecurity",
      author: "Sarah Johnson",
      date: "Dec 28, 2025",
      readTime: "6 minute read",
      excerpt: "Learn about the latest cybersecurity threats and best practices to protect your business in 2026."
    },
    {
      title: "Building Scalable Applications with Microservices",
      category: "Architecture",
      author: "Michael Chen",
      date: "Dec 20, 2025",
      readTime: "8 minute read",
      excerpt: "Understanding microservices architecture and how to build scalable, maintainable applications."
    },
    {
      title: "The Role of DevOps in Modern Software Development",
      category: "DevOps",
      author: "Emily Rodriguez",
      date: "Dec 15, 2025",
      readTime: "5 minute read",
      excerpt: "How DevOps practices are transforming software development and deployment workflows."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Insights and Growth Tools
            </p>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends, insights, and best practices
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all">
                  <div className="text-purple-600 text-sm font-semibold mb-2">{blog.category}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="text-gray-500 text-sm mb-4">
                    <span>{blog.author}</span> • <span>{blog.date}</span> • <span>{blog.readTime}</span>
                  </div>
                  <a href="#" className="text-purple-600 font-semibold hover:underline flex items-center">
                    Read More
                    <span className="ml-2">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



