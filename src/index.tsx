import React from "react";
import { render } from "react-dom";
import App from "./App";
import Style from "../src/App/shared/styles/global.style";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

render(
  <React.StrictMode>
    <Style />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
