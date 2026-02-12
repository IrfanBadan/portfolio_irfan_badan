import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-300 dark:border-neutral-800 pb-24 transition-colors duration-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* HTML5 */}
        {/* <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div> */}

        {/* CSS3 */}
        {/* <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div> */}

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

         {/* Next.js */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiNextdotjs className="text-7xl text-black dark:text-white" />
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* Express.js */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-neutral-100 dark:bg-transparent transition-colors duration-300"
        >
          <SiExpress className="text-7xl text-gray-300" />
        </motion.div>

        {/* MongoDB */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4 bg-white dark:bg-transparent transition-colors duration-300"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
