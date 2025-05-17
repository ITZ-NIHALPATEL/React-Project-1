import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataWrapper from "../Context/DataWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <DataWrapper>
    <App />
  </DataWrapper>
);
