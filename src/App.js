import "./App.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  //Switch, Route, Link
} from "react-router-dom";
//!https://unice.pixelstrapthemes.vercel.app/layouts/wedding
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
