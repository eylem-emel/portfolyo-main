export default function Projects({ projectsSection }) {
  const { title, projects } = projectsSection;

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{title}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className="project-card"
            style={{ backgroundColor: project.cardBg }}
          >
            <h3 className="project-title">{project.name}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github}>View on Github</a>
              <a href={project.app}>Go to app →</a>
            </div>

            <div className="project-image-wrapper">
              <img src={project.image} alt={project.name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
