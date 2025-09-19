import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import UserContext from "./Task4/UseContext/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </StrictMode>
);
