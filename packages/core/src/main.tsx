import React from "react";
import ReactDOM from "react-dom";
import { Core } from "./Core";

const core = Boolean(import.meta.env.VITE_APP_CORE);

core &&
  ReactDOM.render(
    <React.StrictMode>
      <Core />
    </React.StrictMode>,
    document.getElementById("root")
  );

export { Core };
