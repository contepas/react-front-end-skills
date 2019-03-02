import React, {Component} from 'react';
import Coin from './Coin';

class GameBoard extends Component {

    state = {
        nextItem: null,
        matches: 0,
        coins: this.props.coins
    }

    getCoin = (coin) => {
        if (!coin.isVisible) {
            return false
        }
        this.setState(prevState => ({
            coins: prevState.coins.map(
                coinB => (coinB.name === coin.name 
                            ? Object.assign(coinB, { isVisible: false }) 
                            : coinB)
            )
        }));

        this.checkForGoodMove(coin.name)
    }

    restartGame = () => {
        this.setState(prevState => ({
            nextItem: null,
            matches: 0,
            coins: prevState.coins.map(
                coin => Object.assign(coin, { isVisible: true })
            )
        }));
    }

    checkForGoodMove = (id) => {
        console.log(this.props.order)
        let nextItem = this.state.nextItem;
        console.log(`nextItem: ${nextItem} - id: ${id} - matches: ${this.state.matches}`)
        if (nextItem){
            //If we got already the first coin
            if (id === nextItem){
                //If we got the next coin in the right order
                this.setState(prevState => {
                    nextItem = (nextItem %6) + 1;
                    console.log(`veryNext item:${nextItem}` )
                    return {
                        nextItem: nextItem,
                        matches: prevState.matches +1,
                    }
                })
            } else {
                console.log('Game Over')
                this.restartGame();
                //we didn't get the right order
                //render restartGame();
                return false;
            }
        } else {
            //Got first coin
            this.setState(prevState => {
                return {
                    nextItem: id +1,
                    matches: prevState.matches +1,
                }
            })
        }
      }

    render() {
        if(this.state.matches === 6) {
            return <h1>you win!</h1>
        }
        return (
            <div className="game-container">
                {this.props.coins.map((coin, index) => 
                    <Coin 
                    key={index}
                    id={coin.name}
                    isVisible={coin.isVisible}
                    //reset= {this.state.reset}
                    getCoin={() => this.getCoin(coin)} 
                    />)}        
            </div>
        );
    }
}

export default GameBoard