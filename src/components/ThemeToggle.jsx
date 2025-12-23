import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const controls = useAnimation();

    const handleToggle = async () => {
        // Pull down animation
        await controls.start({
            y: 40,
            transition: { duration: 0.1, ease: "easeOut" },
        });

        // Toggle theme mid-snap
        toggleTheme();

        // Snap back up with a little bounce
        await controls.start({
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 15
            },
        });
    };

    return (
        <motion.div
            className="fixed top-0 right-5 z-50 flex flex-col items-center origin-top px-4"
            animate={{
                rotate: [1.5, -1.5],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
        >
            {/* The Cord */}
            <motion.div
                className="w-[2.5px] bg-neutral-400 dark:bg-neutral-600 origin-top"
                animate={{ height: theme === "dark" ? 80 : 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* The Bulb/Handle */}
            <motion.button
                animate={controls}
                onClick={handleToggle}
                whileHover={{ scale: 1.1 }}
                className="relative flex flex-col items-center cursor-pointer group"
            >
                {/* Connection point */}
                <div className="w-4 h-2 bg-neutral-500 dark:bg-neutral-700 rounded-t-sm" />

                {/* The Bulb Shape */}
                <div className={`
          w-8 h-12 rounded-b-full rounded-t-full transition-all duration-500
          ${theme === "dark"
                        ? "bg-neutral-800 border-2 border-neutral-700 shadow-none"
                        : "bg-yellow-300 border-2 border-yellow-400 shadow-[0_0_30px_rgba(253,224,71,0.6)]"}
        `}>
                    {/* Filament inside */}
                    <div className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 rounded-full
            ${theme === "dark" ? "bg-neutral-700" : "bg-yellow-500 animate-pulse"}
          `} />
                </div>

                {/* Gloss effect */}
                <div className="absolute top-2 left-2 w-2 h-4 bg-white/20 rounded-full rotate-12" />

                {/* Glow behind (Dark mode indicator) */}
                {theme === "light" && (
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full scale-150 -z-10" />
                )}
            </motion.button>

            {/* Label */}
            <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="mt-2 text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 pointer-events-none"
            >
                {theme === "dark" ? "Light" : "Dark"}
            </motion.span>
        </motion.div>
    );
};

export default ThemeToggle;
