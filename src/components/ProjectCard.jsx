import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, delay }) {
  return (
    <article
      className="card-surface project-card reveal"
      style={{ "--reveal-delay": delay }}
    >
      <div className="project-thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={`${project.title} preview`} />
        <div className="thumb-overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live demo`}
            title="Live Demo"
          >
            <FiExternalLink aria-hidden="true" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            title="GitHub"
          >
            <FiGithub aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}