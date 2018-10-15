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
  } 
  
  handleClick = id =>{
    this.checkPicked(id)
  };

  setScore = () => {
    let newScore = this.state.score + 1
    this.setState({ score: newScore });
    if (newScore >= this.state.highScore){
      this.setState({highScore : newScore})}
  }

  gameReset = () => {
    alert('lose')
    this.setState({
      score: 0,
      picked: []
    });
    
  }

  checkPicked = id => {
    if (this.state.picked.indexOf(id) === -1){
      this.setState({ picked: this.state.picked.concat(id) });
      this.setScore();
    } else { 
      this.gameReset();
    }
  }

  render() {
    return(
      <Wrapper>
        <Navbar 
        score={this.state.score}
        highScore={this.state.highScore}
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
