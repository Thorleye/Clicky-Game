import React, { Component } from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Friend from "./components/Friend";
import Footer from "./components/Footer";

import friends from "./friends.json"
import "./App.css"

class App extends Component { 

  state = {
    friends,
    score:0,
    highScore:0
  } 

  render() {
    return(
      <Wrapper>
        <Navbar 
        score={this.state.score}
        highScore={this.state.score}
        />
        <Header />
        <div class="container">
        {this.state.friends.map(friend=>(
          <Friend
            id={friend.id}
            img={friend.image}
            name={friend.name}
          />
        ))}
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
