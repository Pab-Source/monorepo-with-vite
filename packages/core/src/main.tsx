import React from "react";
import ReactDOM from "react-dom";
import { Core } from "./Core";

const rootCore = Boolean(import.meta.env.VITE_APP_CORE);

rootCore
  ? ReactDOM.render(
      <React.StrictMode>
        <Core />
      </React.StrictMode>,
      document.getElementById("root")
    )
  : null;

export { Core };
