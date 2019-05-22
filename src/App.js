import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ExportModalWrapped from "export_modal/dist/inde";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExportModalWrapped modalProps={{ open: true }} />
      </header>
    </div>
  );
}

export default App;
