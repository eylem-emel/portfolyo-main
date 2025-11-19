import { createContext, useContext, useEffect, useState } from "react";

const getBrowserTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("appTema") || getBrowserTheme();
  });

  useEffect(() => {
    localStorage.setItem("appTema", tema);
    document.body.className = tema; // "dark" veya "light"
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => useContext(TemaContext);
