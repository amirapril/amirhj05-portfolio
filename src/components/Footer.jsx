import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", icon: FiGithub, href: profile.links.github },
  { label: "LinkedIn", icon: FiLinkedin, href: profile.links.linkedin },
  { label: "Telegram", icon: FiSend, href: profile.links.telegram },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-inner footer-inner">
        <span className="footer-brand">
          {profile.firstName}
          <span className="dot">.</span>
          {profile.lastName}
        </span>

        <p className="footer-copy">
          © {year} {profile.name}. Built with React & Bootstrap.
        </p>

        <div className="footer-social">
          {socials.map(({ label, icon: Icon, href }) => (
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
    </footer>
  );
}