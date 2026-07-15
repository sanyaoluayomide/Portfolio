import { motion } from "framer-motion";

const techStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
];

const features = [
  "Fully Responsive",
  "Modern UI Design",
  "Smooth Animations",
  "Component-Based Architecture",
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white px-8 py-32"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-emerald-400 mb-4">
          Projects
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Building One Project at a Time.
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mt-8 mb-16">
          Every project represents another step in my journey toward becoming a
          Full-Stack and AI Engineer. I focus on writing clean code, creating
          polished user experiences, and continuously improving my skills.
        </p>

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-emerald-400/40 hover:shadow-[0_0_45px_rgba(16,185,129,0.18)] transition-all"
        >
          {/* Banner */}

          <div className="relative h-64 bg-gradient-to-br from-emerald-500/20 via-black to-black flex items-center justify-center">

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <h2 className="relative text-5xl md:text-6xl font-black tracking-[0.25em] text-white">
              PORTFOLIO
            </h2>

          </div>

          {/* Content */}

          <div className="p-10">

            <div className="flex flex-wrap items-center justify-between gap-4">

              <div>

                <span className="uppercase tracking-[0.25em] text-sm text-emerald-400">
                  Featured Project
                </span>

                <h3 className="text-4xl font-bold mt-3">
                  Personal Portfolio
                </h3>

              </div>

              <div className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 text-sm text-emerald-400">
                Active Development
              </div>

            </div>

            <p className="text-gray-400 leading-8 text-lg mt-8">
              A modern portfolio built from scratch with React, Vite, Tailwind
              CSS and Framer Motion. Designed to showcase my journey as a
              Computer Science student while documenting my growth toward
              Full-Stack Development and Artificial Intelligence.
            </p>

            {/* Tech Stack */}

            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-5">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">

                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

            {/* Features */}

            <div className="mt-12">

              <h4 className="text-xl font-semibold mb-5">
                Highlights
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 px-5 py-4 text-gray-300"
                  >
                    ✓ {feature}
                  </div>
                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="https://github.com/sanyaoluayomide"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-black hover:bg-emerald-400 transition"
              >
                View GitHub
              </a>

              <button
                disabled
                className="rounded-xl border border-white/20 px-8 py-4 text-gray-500 cursor-not-allowed"
              >
                Live Demo (Coming Soon)
              </button>

            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
  );
};

export default Projects;