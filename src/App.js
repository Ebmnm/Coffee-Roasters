import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Plan from "./components/Plan"
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <Route path="/Coffee-Roasters" exact  component={Home} />
     <Route path="/plan" exact  component={Plan} />
    {/*  <Home /> */}
     </Router>
    </div>
  );
}

export default App;
