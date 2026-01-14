import Link from 'next/link';

const blogs = [
  {
    title: "The Future of Cloud-Native Development: Trends and Best Practices",
    category: "Technology",
    author: "Alex Thompson",
    date: "Jan 15, 2026",
    readTime: "5 minute read"
  },
  {
    title: "How AI and Machine Learning Are Transforming Enterprise Software",
    category: "Artificial Intelligence",
    author: "Maria Garcia",
    date: "Jan 10, 2026",
    readTime: "6 minute read"
  },
  {
    title: "Digital Transformation: A Strategic Guide for Modern Businesses",
    category: "Business Strategy",
    author: "David Kim",
    date: "Jan 5, 2026",
    readTime: "7 minute read"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:border-purple-300">
                <div className="text-purple-600 text-sm font-semibold mb-3">{blog.category}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors line-clamp-2">{blog.title}</h4>
                <div className="text-gray-600 text-sm mb-4">
                  <span>{blog.author}</span> • <span>{blog.date}</span> • <span>{blog.readTime}</span>
                </div>
                <Link href="#" className="text-purple-600 font-semibold hover:underline inline-flex items-center text-sm">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/resources/blogs" className="text-purple-600 font-semibold hover:underline text-lg inline-flex items-center">
              View All Articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
