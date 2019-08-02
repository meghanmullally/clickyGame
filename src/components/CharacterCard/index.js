import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>  
    <div className="click" value={props.id} onClick={ () => props.handleClick(props.id) }>x</div>
    </div>
  );
}

export default CharacterCard;