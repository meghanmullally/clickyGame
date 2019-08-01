import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>  
    <span className="remove" onClick={ () => props.handleRemoval(props.id) }>x</span>
    </div>
  );
}

export default CharacterCard;