import { motion } from "framer-motion";

const tags = ["React", "JavaScript", "Vue exposure", "Learning backend"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 pt-28 pb-20 bg-[#FFFFFF] text-[#111116]"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-block text-xs font-mono uppercase tracking-widest border border-[#111116]/20 rounded-full px-4 py-1.5 text-[#1B2A6B]">
          Currently: frontend / becoming: full-stack
        </span>

        <h1
          className="mt-8 leading-[0.95] font-bold text-[#111116]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          <span className="block text-5xl md:text-7xl">Frontend developer.</span>
          <span className="block text-5xl md:text-7xl text-[#1B2A6B] mt-1">
            Full-stack, in progress.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#111116]/70">
          Computer science student who started programming in 2024. I build
          responsive interfaces with React, and I'm actively working toward
          full-stack and AI engineering.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm font-mono px-3 py-1.5 rounded-md bg-[#111116]/[0.05] text-[#111116]/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md font-medium bg-[#111116] text-[#FFFFFF] hover:bg-[#1B2A6B] transition-colors"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-md font-medium border border-[#111116]/25 hover:border-[#1B2A6B] hover:text-[#1B2A6B] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
