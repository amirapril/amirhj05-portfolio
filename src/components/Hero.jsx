"use client";

import {
  FiArrowRight,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "GitHub", icon: FiGithub, href: profile.links.github },
  { label: "LinkedIn", icon: FiLinkedin, href: profile.links.linkedin },
  { label: "Telegram", icon: FiSend, href: profile.links.telegram },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit orbit-1" aria-hidden="true" />
      <div className="hero-orbit orbit-2" aria-hidden="true" />

      <div className="section-inner">
        <div className="hero-badge reveal">
          <span className="pulse-dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <h1 className="reveal" style={{ "--reveal-delay": "0.08s" }}>
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="hero-role reveal" style={{ "--reveal-delay": "0.16s" }}>
          <FiBriefcase aria-hidden="true" /> {profile.role}
        </p>

        <p className="hero-tagline reveal" style={{ "--reveal-delay": "0.24s" }}>
          {profile.tagline}
        </p>

        <div className="hero-cta reveal" style={{ "--reveal-delay": "0.32s" }}>
          <a href="#projects" className="btn-accent">
            View Projects <FiArrowRight aria-hidden="true" />
          </a>
          <a href="#contact" className="btn-ghost">
            Contact Me
          </a>
        </div>

        <div
          className="hero-quick-links reveal"
          style={{ "--reveal-delay": "0.4s" }}
        >
          {quickLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}