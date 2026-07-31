import "@fontsource-variable/inter";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

console.log(
  "%c Built by Karabo Hlabangane ",
  "background: #0a0a0a; color: #a5a4a0; font-size: 12px; font-weight: bold; padding: 6px 12px; border-left: 3px solid #a5a4a0;"
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);