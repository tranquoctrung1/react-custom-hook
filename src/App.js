import React from "react";
// import logo from './logo.svg';
import Clock from "./components/Clock";
import Count from "./components/Count";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Count />
    </div>
  );
}

export default App;
