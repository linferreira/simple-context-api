import React from "react";
import ComponentA from "./components/ComponentA/ComponentA";
import ComponentB from "./components/ComponentB/ComponentB";
import GlobalContext from "./context";

function App() {
  return (
    <GlobalContext>
      <ComponentA />
      <ComponentB />
    </GlobalContext>
  );
}

export default App;
