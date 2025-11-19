import { useTema } from "../contextAPI/TemaContext.jsx";
import { useLanguage } from "../contextAPI/LanguageContext.jsx";

export default function Header() {
  const { tema, setTema } = useTema();
  const { language, setLanguage } = useLanguage();

  const toggleTema = () => setTema(tema === "dark" ? "light" : "dark");
  const toggleLanguage = () => setLanguage(language === "tr" ? "en" : "tr");

  return (
    <header className="top-bar">
      <div className="toggle-wrapper">
        <button
          className={`toggle-pill ${tema}`}
          onClick={toggleTema}
          aria-label="Toggle theme"
        >
          <span className="toggle-knob" />
        </button>

        <span className="toggle-label">Dark mode</span>
        <span className="divider">|</span>

        <button className="language-link" onClick={toggleLanguage}>
          {language === "tr" ? "English" : "Türkçe’ye geç"}
        </button>
      </div>
    </header>
  );
}
