import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

export default class GameBoard extends Component {

    state = {
        nextItem: null,
        matches: 0,
        coins: this.props.coins()
    }

    static propTypes = {
        coins: PropTypes.func
    };


    /**
     * @param {object} hard - bool
     * if hard is true: reset visibility and applay new order
     * else: reset visibility
     */
    restartGame = (hard) => {
        this.setState(prevState => {
            return ({
                nextItem: null,
                matches: 0,
                coins: !hard 
                        ? prevState.coins.map(
                            coin => Object.assign(coin, { isVisible: true })
                            )
                        : this.props.coins()
            })
        })
    }


    /**
     * @param {object} coin - name: number, isVisible: bool
     * If the coin is visible on the screen:
     *      set the visibility of coin in coins to False
     *      then calls the function to check if the coin pressed
     *      was in the right order
     */
    getCoin = coin => {
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


    /**
     * @param {number} id - name of the coin
     * If the id is the next number in the line:
     *      set nextItem to the next number in the line
     *      and add 1 to matches
     * else:
     *      call restartGame function
     */
    checkForGoodMove = id => {
        let nextItem = this.state.nextItem;
        if ((id !== nextItem) && nextItem) {
            this.restartGame(false);
            return false;
        } else {
            this.setState(prevState => {
                nextItem = (id %6) + 1;
                return {
                    nextItem: nextItem,
                    matches: prevState.matches +1,
                }
            })
        }
    }


    render() {
        if(this.state.matches === 6) {
            return (
                <div className="you-win">
                    <h1>You win!</h1>
                    <button onClick={() => this.restartGame(true)}>Restart</button>
                </div>
            )
        }
        return (
            <React.Fragment>
                {this.state.coins.map((coin, index) => 
                    <Coin 
                        key={index}
                        isVisible={coin.isVisible}
                        getCoin={() => this.getCoin(coin)} 
                    />)}        
            </React.Fragment>
        );
    }
};