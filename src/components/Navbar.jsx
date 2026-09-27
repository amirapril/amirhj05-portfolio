"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections = [...document.querySelectorAll("section[id]")];
      const offset = window.scrollY + 120;
      let current = "home";
      for (const section of sections) {
        if (section.offsetTop <= offset) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar section-inner" aria-label="Main navigation">
        <a
          href="#home"
          className="brand-name"
          onClick={close}
          aria-label="Back to top"
        >
          {profile.firstName}
          <span className="dot">.</span>
          {profile.lastName}
        </a>

        <div className={`nav-collapse ${open ? "open" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    active === link.href.slice(1)
                      ? "active"
                      : undefined
                  }
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-accent nav-cta" onClick={close}>
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="navbar-toggler-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </header>
  );
}