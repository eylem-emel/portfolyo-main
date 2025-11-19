export default function Profile({ profileSection }) {
  const { title, basicTitle, aboutTitle, info, aboutText } = profileSection;

  return (
    <section id="profile" className="profile">
      <h2 className="section-title">{title}</h2>

      <div className="profile-grid">
        <article className="profile-card">
          <h3>{basicTitle}</h3>
          <dl>
            {info.map((item) => (
              <div key={item.question} className="profile-row">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="profile-about">
          <h3>{aboutTitle}</h3>
          <p>{aboutText}</p>
        </article>
      </div>
    </section>
  );
}
