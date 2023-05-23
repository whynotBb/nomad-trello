import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const { persistAtom } = recoilPersist();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
