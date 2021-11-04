import "./App.less";
import { useState } from "react";
import { Core } from "core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      hola
      <Core />
    </div>
  );
}

export default App;
