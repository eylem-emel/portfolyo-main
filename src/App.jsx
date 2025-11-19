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
      <footer className="footer">
        <p>Let’s work together on your next product.</p>
      </footer>
    </div>
  );
}

export default App;
