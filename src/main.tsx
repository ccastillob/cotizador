import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./scss/styles.scss";
import { Landing } from "./presentation/screens";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Landing />
    </StrictMode>
  </Provider>
);
