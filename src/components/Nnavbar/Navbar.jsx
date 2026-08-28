import "./navbar.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        <a href="#home" className="logo">
          <img src="/profile.jpg" alt="Vivek Singh" className="logo-avatar" />
          <span className="logo-bracket">&lt;</span>
          VS
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vivekgnps@gmail.com"
            className="nav-cta"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </div>

        <button
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
