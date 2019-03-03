import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

export default class GameBoard extends Component {

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

    checkForGoodMove = id => {
        let nextItem = this.state.nextItem;
        if ((id !== nextItem) && nextItem) {
            this.restartGame();
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
};

GameBoard.propTypes = {
    coins: PropTypes.arrayOf(PropTypes.shape({
        isVisible: PropTypes.bool,
        name: PropTypes.number
    })),
};