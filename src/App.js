import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";
import Navbar from "./components/Navbar";


class App extends Component {
  state={
    characters,
    score: 0,
    goal: 12,
    clicked: [],
    status: ""
  };


// shuffle the character cards when clicked 
shuffleCharacters = id => {

let clicked = this.state.clicked;
//if clicked same image twice...game over
if(clicked.includes(id)){
  this.setState({
    clicked: [],
    score: 0,
    topScore: 0,
    status: "Game Over! Click image to play again"
  });
  return; 
} else {
  clicked.push(id)
// if goal is met yayyy congrats 
  if(clicked.length === 12) {
    this.setState({
    score: 12,
    status: "Congrats!!! You win!! Click to play again",
    clicked: []
    });
    return;
  }

  this.setState({
    characters,
    clicked,
    score: clicked.length,
    status: ""
  });

  // randomly shuffling the characters 
  for (let i = characters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters;
  }
}


  render() {
    return (
      <div>
      <Navbar
      score={this.state.score}
      goal={12}
      status={this.state.status}/>
      <Wrapper>
        <h1 className="title">Sailor Moon Clicky Game!</h1>
        <h4 className="description">Cick on any image to earn a point, but don't click on the same picture more than once. Click all 12 to win!!</h4>
        {this.state.characters.map(charObj => {
          return <CharacterCard
          id={charObj.id} 
          key={charObj.id} 
          image={charObj.image}
          shuffleCharacters={this.shuffleCharacters}
          />
        })}
      </Wrapper>
      </div>
    );
  }
}
export default App;