import React, {Component} from 'react';
import {Consumer} from '../Context';
import GameBoard from './GameBoard';

class Game extends Component {

  state = {
    reset: false
  }

  generateCoins = max => {
    const coins = [];
    for (let i=1; i<=max; i++){
      coins.push({name: i, isVisible: true})
    }
    return coins
  }

  getRandomInt = max => {
    return (Math.floor(Math.random() * Math.floor(max))) +1;
  }

  generateRandomArray = length => {
    const newOrder = []
    for (let i=0; i<length; i++){
      let position = this.getRandomInt(length)
      while (newOrder.includes(position)){
        position = this.getRandomInt(length)
      }
      newOrder.push(position)
    }
    return newOrder
  }

  
 
  render() {
    return (
      <Consumer>
      {() => {
        return (
          <React.Fragment>
            <GameBoard 
              coins = {this.generateCoins(6)}
              order = {this.generateRandomArray(6)}
            />
            <a 
              href="https://contepas.github.io/four-in-a-row/" 
              target="_blank"
              rel="noopener noreferrer">Play 4 in a Row
            </a>
          </React.Fragment>
        )
      }}
      </Consumer>
    );
  }
}

export default Game