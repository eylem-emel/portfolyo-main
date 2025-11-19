import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

import { LanguageProvider } from "./contextAPI/LanguageContext.jsx";
import { TemaProvider } from "./contextAPI/TemaContext.jsx";
import { UserProvider } from "./contextAPI/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <TemaProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TemaProvider>
    </LanguageProvider>
  </React.StrictMode>
);
