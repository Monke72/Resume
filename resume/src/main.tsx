import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import "../public/locales";

createRoot(document.getElementById("root")!).render(<App />);
