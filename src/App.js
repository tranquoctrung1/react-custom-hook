import React from "react";
// import logo from './logo.svg';
import Clock from "./components/Clock";
import Count from "./components/Count";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Clock></Clock>
      <Count />
      <Hero heroString="This is my hero " />
    </div>
  );
}

export default App;
