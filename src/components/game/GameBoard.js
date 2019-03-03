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
        let nextItem = this.state.nextItem;
        if (nextItem){
            //If we got already the first coin
            if (id === nextItem){
                //If we got the next coin in the right order
                this.setState(prevState => {
                    nextItem = (nextItem %6) + 1;
                    return {
                        nextItem: nextItem,
                        matches: prevState.matches +1,
                    }
                })
            } else {
                //We didn't get the right order
                //restart game;
                this.restartGame();
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
            return (
                <React.Fragment>
                    <h1>You win!</h1>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                {this.props.coins.map((coin, index) => 
                    <Coin 
                    key={index}
                    id={coin.name}
                    isVisible={coin.isVisible}
                    getCoin={() => this.getCoin(coin)} 
                    />)}        
            </React.Fragment>
        );
    }
}

export default GameBoard