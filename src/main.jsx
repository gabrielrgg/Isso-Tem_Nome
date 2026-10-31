import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import baseStyles from "./Base.module.css";
document.documentElement.classList.add(baseStyles.globalScope);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
