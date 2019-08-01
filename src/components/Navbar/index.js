import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <li className="navbar-brand">Clicky Game</li>
      <li className="score">Score:{props.score}
      </li>
      
        <li className="topScore">Top Score:{props.topScore}
      </li>
    </nav>
  </div>

  );
}

export default Navbar;