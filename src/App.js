import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import friends from "./characters.json";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  state={
    friends
  };

  handleRemoval = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  render() {
    return (
      <div>
      <Navbar/>
      <Wrapper>
        <h1 className="title">Sailor Moon Clicky Game!</h1>
        <h4>Cick on any image to earn a point, but don't click on the same picture more than once. Click all 12 to win!!</h4>
        {this.state.friends.map(friendObj => {
          return <CharacterCard handleRemoval={this.handleRemoval} id={friendObj.id} key={friendObj.id} name={friendObj.name} image={friendObj.image} occupation={friendObj.occupation} location={friendObj.location} />
        })}
      </Wrapper>
      </div>
    );
  }
}
export default App;