import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Copy, Check, MapPin } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.87 3.16 9 7.55 10.46.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.47-2.45-.28-5.02-1.22-5.02-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.92 0 0 .93-.3 3.04 1.13a10.6 10.6 0 0 1 5.54 0c2.1-1.43 3.03-1.13 3.03-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.76 1.13 2.96 0 4.23-2.58 5.16-5.04 5.43.39.34.74 1.01.74 2.03v3.01c0 .29.2.64.76.53A10.51 10.51 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sanyaoluay18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: "GitHub",
      value: "github.com/sanyaoluayomide",
      href: "https://github.com/sanyaoluayomide",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      value: "Ayomide Sanyaolu",
      href: "https://www.linkedin.com/in/ayomide-sanyaolu-80052b382",
      icon: LinkedinIcon,
    },
  ];

  return (
    <section id="contact" className="bg-white text-[#111116] py-32 px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.3em] text-sm font-mono text-[#1B2A6B] mb-4">
          Contact
        </p>

        <h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Let's build something together.
        </h2>

        <p className="text-[#111116]/60 text-lg leading-8 mt-6 max-w-2xl">
          I'm open to internships, collaborations, and roles where I can
          contribute as a frontend developer while continuing to grow toward
          full-stack engineering. Feel free to reach out.
        </p>

        <div className="mt-12 border border-[#111116]/10 rounded-2xl divide-y divide-[#111116]/10">
          <button
            onClick={copyEmail}
            className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#111116]/[0.02] transition-colors"
          >
            <span className="flex items-center gap-4">
              <Mail size={20} className="text-[#1B2A6B]" />
              <span>
                <span className="block text-sm text-[#111116]/50">Email</span>
                <span className="block font-medium">
                  sanyaoluay18@gmail.com
                </span>
              </span>
            </span>

            <span className="flex items-center gap-2 text-sm text-[#111116]/50">
              {copied ? (
                <>
                  <Check size={16} className="text-[#1B2A6B]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </span>
          </button>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center gap-4 p-6 hover:bg-[#111116]/[0.02] transition-colors"
            >
              <link.icon size={20} />
              <span>
                <span className="block text-sm text-[#111116]/50">
                  {link.label}
                </span>
                <span className="block font-medium">{link.value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2 text-[#111116]/50 text-sm">
          <MapPin size={16} />
          Based in Nigeria — open to remote and global opportunities
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
