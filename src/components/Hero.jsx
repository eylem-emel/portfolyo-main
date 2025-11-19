export default function Hero({ herosection }) {
  const {
    greeting,
    title,
    subtitle,
    status,
    email,
    profileimage,
    socials,
  } = herosection;

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="hero-greeting">{greeting}</p>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="hero-social-link"
            >
              <img
                src={s.icon}
                alt={s.name}
                className="hero-social-icon"
              />
            </a>
          ))}
        </div>

        <p className="hero-status">
          {status} Invite me to join your team →{" "}
          <a href="#hero" className="hero-email">
            {email}
          </a>
        </p>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-border">
          <img src={profileimage} alt="profile" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
