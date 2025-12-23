import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-300 dark:border-neutral-900 pb-12 transition-colors duration-300">

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="group mb-20 flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 lg:gap-20"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-end shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-xl w-full max-w-[280px] aspect-video object-cover border border-neutral-300 dark:border-neutral-800 transition-all duration-300 group-hover:border-purple-500/50"
                />
              </motion.div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h6 className="mb-2 font-bold text-2xl text-neutral-800 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50 transition-all duration-300 hover:scale-110"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
