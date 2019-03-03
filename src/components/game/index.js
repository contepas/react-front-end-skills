import React, {Component} from 'react';
import GameBoard from './GameBoard';

export default class Game extends Component {

    state = {
        reset: false
    }

    restartGame = (obj) => {
        console.log('Ciao!!!!!')
        this.forceUpdate();
        //this.setState(prevState => ({reset: !prevState.reset}))
    }

    generateCoins = max => {
        const order = this.generateRandomArray(6)
        const coins = [];

        for (let i=0; i<max; i++){
            coins.push({name: order[i], isVisible: true})
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
        const coins = this.generateCoins(6);
        return (
            <div className="game-index">
                <h3>Prendi i soldi nell'ordine corretto</h3>
                <div className="game-container">
                    <GameBoard 
                        coins = {() => this.generateCoins(6)}
                        //coins = {coins}
                        restart = {() => this.restartGame(this)}
                    />
                </div>
                <a 
                    href="https://contepas.github.io/four-in-a-row/" 
                    target="_blank"
                    rel="noopener noreferrer">Play 4 in a Row
                </a>
            </div>          
        );
    }
};