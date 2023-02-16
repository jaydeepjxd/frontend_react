import React from "react"

import { Navbar, Home, Updates, Deals, Compete} from "./components"
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Updates />
      <Deals />
      <Compete />
    </div>
  );
}

export default App;
