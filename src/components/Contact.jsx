import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/profile";

const methods = [
  {
    label: "Email",
    value: profile.email,
    href: profile.links.email,
    icon: FiMail,
  },
  {
    label: "Telegram",
    value: "@Amirhassan4444",
    href: profile.links.telegram,
    icon: FiSend,
  },
  {
    label: "LinkedIn",
    value: "amirhassan jafari",
    href: profile.links.linkedin,
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/amirapril",
    href: profile.links.github,
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s build something <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Have a project, a role, or just want to say hi? My inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="card-surface contact-card reveal">
            <h3>Send a message</h3>
            <p>I usually reply within a day.</p>
            <ContactForm />
          </div>

          <div className="reveal" style={{ "--reveal-delay": "0.15s" }}>
            <div className="contact-methods">
              {methods.map(({ label, value, href, icon: Icon }) => (
                <div key={label} className="card-surface contact-method">
                  <span className="fact-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <p>{label}</p>
                    <a href={href} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="availability-note">
              <FiCheckCircle aria-hidden="true" />
              {profile.availability}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}