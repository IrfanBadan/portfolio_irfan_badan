import { RESUME_LINK } from "../constants";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const Resume = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Download <span className="text-neutral-500">Resume</span>
            </motion.h2>
            <div className="flex flex-col items-center justify-center">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 text-center text-neutral-400 max-w-xl"
                >
                    I am always looking for new opportunities to collaborate and grow.
                    Feel free to download my resume to learn more about my experience and skills.
                </motion.p>

                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href={RESUME_LINK}
                        download="Irfan_Badan_Resume.pdf"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-neutral-700 hover:border-purple-500/50"
                        role="button"
                    >
                        <span className="relative flex items-center gap-2">
                            <HiDownload className="text-xl group-hover:animate-bounce" />
                            Download CV
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
