import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landing } from "./Landing";
import "./scss/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Landing />
    </StrictMode>
  </Provider>
);
