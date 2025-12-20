import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="relative overflow-hidden border-b border-neutral-300 dark:border-neutral-900 pb-12 transition-colors duration-300">
      <div className="absolute inset-0 -z-10 opacity-30">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 dark:from-black/60" />
      </div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.02 }}
            className="group relative mb-12 flex flex-wrap lg:flex-nowrap lg:justify-center transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-400/20 dark:hover:shadow-purple-900/20 rounded-3xl p-6 lg:p-8 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/20 dark:border-neutral-800/50 gap-8 lg:gap-12"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 flex justify-center shrink-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl w-full max-w-[350px] lg:max-w-full aspect-video object-cover border-2 border-neutral-200 dark:border-neutral-800 transition-all duration-300 group-hover:border-purple-500/50"
                />
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 flex flex-col justify-center"
            >
              <h6 className="mb-4 font-bold text-2xl text-neutral-800 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
                {project.title}
              </h6>
              <p className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
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
