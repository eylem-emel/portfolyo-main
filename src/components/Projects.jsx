export default function Projects({ projectsSection }) {
  const { title, projects } = projectsSection;

  return (
    <section className="projects">
      <h2 className="section-title">{title}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className="project-card"
            style={{ backgroundColor: project.cardBg }}
          >
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on Github
                </a>
                <a href={project.app} target="_blank" rel="noreferrer">
                  Go to app →
                </a>
              </div>
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
