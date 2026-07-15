import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      "REST APIs",
"Node.js",
"Express.js",
"SQL",
"MongoDB",
"Artificial Intelligence",
    ],
  },
  {
    title: "Certifications",
    skills: [
      "Oracle Cloud Foundations",
      "Google Data Analytics",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black text-white py-32 px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-emerald-400 mb-4">
          Skills
        </p>

        <h2 className="text-5xl md:text-6xl font-bold">
          Technologies I Build With.
        </h2>

        <p className="mt-8 max-w-2xl text-gray-400 leading-8 text-lg">
          I'm continuously improving my technical skills while building
          projects that prepare me for Full-Stack Engineering and Artificial
          Intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {skillGroups.map((group) => (

            <motion.div
              key={group.title}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: .3,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.18)] transition-all"
            >

              <h3 className="text-2xl font-bold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Skills;