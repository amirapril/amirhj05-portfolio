import { FiBookOpen, FiHeart, FiHome } from "react-icons/fi";
import { profile } from "@/data/profile";

const facts = [
  { icon: FiHome, label: "Based in", value: profile.location },
  { icon: FiBookOpen, label: "Focus", value: "Currently building with React" },
  { icon: FiHeart, label: "Availability", value: profile.availability },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about <span className="gradient-text">clean interfaces</span>
          </h2>
          <p className="section-subtitle">
            A quick look at who I am, what I value, and how I work.
          </p>
        </div>

        <div className="about-content">
          <div className="about-bio reveal">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>{profile.learningMindset}</p>

            <ul className="soft-skills">
              {profile.softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="card-surface about-facts reveal" style={{ "--reveal-delay": "0.15s" }}>
            {facts.map(({ icon: Icon, label, value }) => (
              <div className="fact-item" key={label}>
                <span className="fact-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <span className="fact-label">{label}</span>
                  <span className="fact-value">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}