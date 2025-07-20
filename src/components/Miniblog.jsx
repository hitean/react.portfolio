import React from 'react';

const blogPosts = [
  {
    title: 'Understanding JWT Authentication',
    description: 'Learn how JSON Web Tokens work and how to implement them in your MERN Stack app.',
    date: 'July 2025',
    link: '/blog/jwt-auth'
  },
  {
    title: 'Getting Started with GSAP in React',
    description: 'A quick guide to using GSAP ScrollTrigger animations in your portfolio projects.',
    date: 'June 2025',
    link: '/blog/gsap-react'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="w-screen bg-[#282434] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-semibold mb-12 text-center">Blogs</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-[#1E293B]  p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-cyan-400 hover:underline font-medium"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
