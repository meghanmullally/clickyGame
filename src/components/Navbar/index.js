import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-white bg-white">
        {/* <li className="navbar-brand">Clicky Game</li> */}
      <li className="score">Score: {props.score}
      </li>
      <li className="status">{props.status}
      </li>

    </nav>
  </div>

  );
}

export default Navbar;