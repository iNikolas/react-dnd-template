import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import observe from "./common/observe";

const root = createRoot(document.getElementById("root")!);

observe((knightPosition) =>
  root.render(<App knightPosition={knightPosition} />)
);
