import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How I Built My Portfolio with MERN",
    desc: "Step-by-step process and tools I used to build this modern portfolio.",
    tags: ["MERN", "React", "Tailwind"],
  },
  {
    title: "Why Cybersecurity Matters in Web Dev",
    desc: "Important practices and real threats every dev should know.",
    tags: ["Security", "Node.js", "Best Practices"],
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Blog Posts
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] rounded-lg p-6 shadow-md text-left hover:scale-105 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-300 mb-3">{post.desc}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-yellow-400 text-black px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
