import { motion } from "framer-motion";

const projects = [
  {
    title: "India Uncovered",
    desc: "Travel discovery website with routes, states & culture info.",
    tech: ["React", "Node", "MongoDB"],
    img: "https://via.placeholder.com/300x200",
    github: "#",
    live: "#",
  },
  {
    title: "Spotify Clone",
    desc: "Music streaming UI using React & Tailwind.",
    tech: ["React", "Tailwind"],
    img: "https://via.placeholder.com/300x200",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#1e293b] text-white px-6 py-20 text-center">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#0f172a] rounded-xl p-4 shadow-lg hover:scale-105 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="rounded-md mb-4 w-full h-[200px] object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.desc}</p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-yellow-400 mb-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="border border-yellow-400 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                className="text-sm text-yellow-400 underline"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-yellow-400 underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
