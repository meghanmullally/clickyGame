import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";
import Navbar from "./components/Navbar";


class App extends Component {
  state={
    characters,
    topScore: 0,
    score: 0,
    clicked: [],
    rightWrong: ""
  };


handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({
      clicked: this.state.clicked.concat(id)
    })
  } else {
    this.handleReset();
  }
}

// increase the score and if the user reaches 10 they win!
handleIncrement = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    score: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 10) {
    this.setState({ rightWrong: "Yay you win!" });
  }
  this.handleShuffle();
};


// resets the character and game! 
handleReset = () => {
  this.setState({
    score: 0,
    topScore: this.state.topScore,
    clicked: []
  });
  this.handleShuffle();
}

// shuffle the character cards 
handleShuffle = () => {
  let shuffleChar = shuffleChar(characters);
  this.setState({ 
    characters: shuffleChar
  });
};

shuffleChar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomChar = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomChar]] = [array[randomChar], array[i]];
  }
  return array;
};



  render() {
    return (
      <div>
      <Navbar
      score={this.state.score}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}/>
      <Wrapper>
        <h1 className="title">Sailor Moon Clicky Game!</h1>
        <h4>Cick on any image to earn a point, but don't click on the same picture more than once. Click all 12 to win!!</h4>
        {this.state.characters.map(charObj => {
          return <CharacterCard
          id={charObj.id} 
          key={charObj.id} 
          image={charObj.image}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          />
        })}
      </Wrapper>
      </div>
    );
  }
}
export default App;