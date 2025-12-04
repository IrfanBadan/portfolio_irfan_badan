import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const fadeIn = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // EmailJS credentials
  const SERVICE_ID = "service_x7gk49v";
  const TEMPLATE_ID = "template_kkhf8sh";
  const PUBLIC_KEY = "j47TsWg4Y9oSa0RqB";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const currentTime = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: currentTime,
        },
        PUBLIC_KEY
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
      console.error("EmailJS error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 lg:pb-32 "
    >
      <div className="text-center mb-16">
        <motion.h2
          variants={fadeIn(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-5xl font-thin tracking-tight text-white"
        >
          Contact Me
        </motion.h2>

        <motion.p
          variants={fadeIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="text-neutral-400 mt-3"
        >
          Get In Touch .
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-12 px-6 lg:px-20">
        {/* LEFT CONTACT CARDS */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">
          {/* Email */}
          <motion.div
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="p-8 rounded-2xl border border-neutral-800 bg-[#11121e]"
          >
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-neutral-400">irfanbadan23@gmail.com</p>
            <a
              href="mailto:irfanbadancs@gmail.com"
              className="mt-3 inline-block text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Write Me →
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={fadeIn(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="p-8 rounded-2xl border border-neutral-800 bg-[#11121e]"
          >
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-neutral-400">+91 9344605885</p>
            <a
              href="https://wa.me/917550314020"
              target="_blank"
              className="mt-3 inline-block text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Write Me →
            </a>
          </motion.div>
        </div>

        {/* RIGHT FORM */}
        <motion.form
          variants={fadeIn(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 p-10 rounded-2xl border border-neutral-800 bg-[#11121e] flex flex-col gap-6"
        >
          {status.message && (
            <div
              className={`p-3 rounded-lg ${
                status.type === "success"
                  ? "bg-green-900/30 text-green-400 border border-green-800"
                  : "bg-red-900/30 text-red-400 border border-red-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-neutral-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 bg-transparent border border-neutral-800 p-3 rounded-lg text-white focus:border-purple-400 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 bg-transparent border border-neutral-800 p-3 rounded-lg text-white focus:border-purple-400 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="mt-2 bg-transparent border border-neutral-800 p-3 rounded-lg text-white focus:border-purple-400 outline-none resize-none"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-black font-semibold py-3 rounded-lg transition-opacity ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
