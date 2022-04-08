import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root")!; //Other people have answered that you should add a null-check, but Typescript also has a non-null assertion that you can use when you are sure that the value is never null by adding the ! operator to the end of your statement:

const root = createRoot(rootElement);
// const root = ReactDOM.createRoot(document.getElementById("root"));//also you can use this instead of above two lines
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
