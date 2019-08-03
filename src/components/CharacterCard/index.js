import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="shuffleScore" alt={props.name} src={props.image} onClick={() => props.shuffleCharacters(props.id)}/>
      </div>  
    </div>
  );
}

export default CharacterCard;