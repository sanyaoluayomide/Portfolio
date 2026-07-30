import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "Journey", id: "journey" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-[#111116]/10 bg-[#FFFFFF]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-5">
        <a
          href="#home"
          className="text-xl font-bold text-[#111116]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          ayomide<span className="text-[#1B2A6B]">.</span>
        </a>

        <div className="hidden md:flex gap-9 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors ${
                active === link.id
                  ? "text-[#1B2A6B] font-medium"
                  : "text-[#111116]/60 hover:text-[#111116]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#111116]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-t border-[#111116]/10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block px-8 py-4 transition-colors ${
                active === link.id
                  ? "text-[#1B2A6B] font-medium"
                  : "text-[#111116]/60 hover:text-[#111116]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
