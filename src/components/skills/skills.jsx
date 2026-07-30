import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
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
    skills: ["Oracle Cloud Foundations", "Google Data Analytics"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-[#111116] py-32 px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-sm font-mono text-[#1B2A6B] mb-4">
          Skills
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Technologies I build with.
        </h2>

        <p className="mt-8 max-w-2xl text-[#111116]/60 leading-8 text-lg">
          I'm continuously improving my technical skills while building
          projects that prepare me for full-stack engineering and artificial
          intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-px mt-20 bg-[#111116]/10 border border-[#111116]/10">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-white p-8 md:p-10">
              <h3
                className="text-xl font-bold mb-6"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#111116]/15 px-3 py-1.5 text-sm text-[#111116]/75 hover:border-[#1B2A6B] hover:text-[#1B2A6B] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;