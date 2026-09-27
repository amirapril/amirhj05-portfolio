import { FiBook, FiCheck, FiGrid, FiTool } from "react-icons/fi";
import { skills } from "@/data/profile";

const groupIcons = {
  layout: FiGrid,
  wrench: FiTool,
  book: FiBook,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            The tools behind <span className="gradient-text">my work</span>
          </h2>
          <p className="section-subtitle">
            A focused, growing toolbox for building the modern web.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = groupIcons[group.icon] || FiCheck;
            return (
              <div
                key={group.group}
                className="card-surface skill-card reveal"
                style={{ "--reveal-delay": `${i * 0.1}s` }}
              >
                <span className="skill-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{group.group}</h3>
                <div className="skill-badges">
                  {group.items.map((item) => (
                    <span key={item} className="badge-skill">
                      <FiCheck aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}