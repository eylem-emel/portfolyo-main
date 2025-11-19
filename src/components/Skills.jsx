export default function Skills({ skillsSection }) {
  const { title, skills } = skillsSection;

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">{title}</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
