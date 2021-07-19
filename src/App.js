import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <Home />
     </Router>
    </div>
  );
}

export default App;
