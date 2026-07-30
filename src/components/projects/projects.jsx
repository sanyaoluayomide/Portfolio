import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.47-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.04 1.13a10.6 10.6 0 0 1 5.54 0c2.1-1.43 3.03-1.13 3.03-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.76 1.13 2.96 0 4.23-2.58 5.16-5.04 5.43.39.34.74 1.01.74 2.03v3.01c0 .29.2.64.76.53A10.51 10.51 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
);
import projects from "./projectdata";

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-[#111116] px-8 py-32">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-sm font-mono text-[#1B2A6B] mb-4">
          Projects
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Building one project at a time.
        </h2>

        <p className="text-[#111116]/60 text-lg leading-8 max-w-3xl mt-8 mb-16">
          Every project represents another step in my journey toward becoming
          a full-stack and AI engineer. I focus on writing clean code,
          creating polished user experiences, and continuously improving my
          skills.
        </p>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#111116]/10 rounded-2xl p-8 md:p-10 hover:border-[#1B2A6B]/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="uppercase tracking-[0.25em] text-xs font-mono text-[#1B2A6B]">
                    Featured project
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold mt-3"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-md border border-[#111116]/15 px-4 py-1.5 text-sm text-[#111116]/70">
                  {project.status}
                </span>
              </div>

              <p className="text-[#111116]/60 leading-7 text-base md:text-lg mt-6 max-w-2xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#111116]/15 px-3 py-1.5 text-sm text-[#111116]/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-9">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md bg-[#111116] text-white px-6 py-3 font-medium hover:bg-[#1B2A6B] transition-colors"
                >
                  <GithubIcon size={18} />
                  View code
                </a>

                {project.live && project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md border border-[#111116]/25 px-6 py-3 font-medium hover:border-[#1B2A6B] hover:text-[#1B2A6B] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 rounded-md border border-[#111116]/10 px-6 py-3 font-medium text-[#111116]/35 cursor-not-allowed">
                    <ExternalLink size={18} />
                    Live demo (soon)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
