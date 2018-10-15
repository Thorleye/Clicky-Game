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
    highScore:0,
    picked: [],
    message: "Click an image to begin!"
  } 

  componentDidMount(){
    this.handleShuffle();
  }

  //credit to Fisher-Yates shuffle
  shuffle = (array) => {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  handleShuffle = () => {
    let shuffledFriends = this.shuffle(friends)
    this.setState({friends : shuffledFriends})
  }
  
  handleClick = id =>{
    this.checkPicked(id)
  };

  setScore = () => {
    let newScore = (this.state.score + 1);
    this.setState({ score: newScore });
    if (newScore >= this.state.highScore){
      this.setState({highScore : newScore})
    }
    if (newScore === friends.length){
      this.setState({
        message: "Wow! You beat the game",
        highScore: "Perfect!"
      })
    }
  }

  gameReset = () => {
    this.setState({
      score: 0,
      picked: [],
      message: "You picked wrong! Try Again"
    });  
  }

  checkPicked = id => {
    if (this.state.picked.indexOf(id) === -1){
      this.setState({ 
        picked: this.state.picked.concat(id),
        message: "You picked correctly!"
      });
      this.setScore();
    } else { 
      this.gameReset();
    }
    this.handleShuffle();
  }

  render() {
    return(
      <Wrapper>
        <Navbar 
        score={this.state.score}
        highScore={this.state.highScore}
        message={this.state.message}
        />
        <Header />
        <div className="container">
        {this.state.friends.map(friend=>(
          <Friend
            key={friend.id}
            id={friend.id}
            img={friend.image}
            name={friend.name}
            handleClick={this.handleClick}      
          />
        ))}
        </div>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
