import { useState } from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import Trade from "./components/Trade";

function App() {
  return (
    <div className="app">
      <Sidenav />
      <Trade />
    </div>
  );
}

export default App;
