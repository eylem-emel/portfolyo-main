import { createContext, useContext } from "react";
import { useLanguage } from "./LanguageContext.jsx";
import dataJSON from "../data.json";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { language } = useLanguage();
  const data = dataJSON[language] || dataJSON["en"];

  return (
    <UserContext.Provider value={data}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
