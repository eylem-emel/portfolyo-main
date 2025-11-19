import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";

import { useUser } from "./contextAPI/UserContext.jsx";

function App() {
  const data = useUser();

  if (!data) {
    return <div className="app">No data</div>;
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero herosection={data.herosection} />
        <Skills skillsSection={data.skillsSection} />
        <Profile profileSection={data.profileSection} />
        <Projects projectsSection={data.projectsSection} />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-text">
          Let’s <span className="footer-highlight">work together</span> on
          <br />
          your next product.
        </p>

        <nav className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Personal Blog
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a href="mailto:pratamaiosi@gmail.com">Email</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
