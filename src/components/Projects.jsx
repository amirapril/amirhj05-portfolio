import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle">
            A few things I&apos;ve built while learning and exploring React —
            placeholders you can swap with your latest work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={`${(i % 2) * 0.12}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}