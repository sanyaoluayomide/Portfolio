import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sanyaoluay18@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-8"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-emerald-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Let's Build Something Great Together.
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8 mb-14">
          Whether you're looking for a frontend developer, an intern, or
          someone eager to learn and contribute to meaningful projects, I'd love
          to hear from you. I'm always open to collaborations, internship
          opportunities, and connecting with developers around the world.
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          {/* Copy Email */}

          <button
            onClick={copyEmail}
            className="flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-black transition hover:scale-105 hover:bg-emerald-400"
          >
            📧 {copied ? "Email Copied!" : "Copy Email"}
          </button>

          {/* GitHub */}

          <a
            href="https://github.com/sanyaoluayomide"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/ayomide-sanyaolu-80052b382"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            🔗 LinkedIn
          </a>

        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-emerald-300 font-medium">
              Available for Internships & Collaborations
            </span>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-gray-400">
          <span className="text-lg">📍</span>

          <span>
            Based in Nigeria • Open to Remote & Global Opportunities
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;