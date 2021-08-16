import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Plan from "./components/Plan"
import { AnimatePresence } from "framer-motion"
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <AnimatePresence  exit  >
     <Route path="/Coffee-Roasters" exact  component={Home} />
     <Route path="/plan" exact  component={Plan} />
     </AnimatePresence>
     </Router>
    </div>
  );
}

export default App;
