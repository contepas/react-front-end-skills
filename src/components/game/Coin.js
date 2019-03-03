import React, {Component} from 'react';
import posed from 'react-pose';
import coin from '../../styles/svg/moneta-0.svg';
import PropTypes from 'prop-types';


const ImgCoin = posed.img({
    pressable: true,
    open: {opacity: 1},
    closed: {opacity: 0},
  })

class Coin extends Component {
    state = {
        id: this.props.id,
    }
    
    render() {
        return (
            <ImgCoin 
            value={this.id}
            className={"imgcoin boy"}
            src={coin} 
            alt="Coin"
            pose={this.props.isVisible ? 'open' : 'closed'}
            onClick={this.props.getCoin}
        />
        );
    }   
};

Coin.propTypes = {
    id: PropTypes.number,
    isVisible: PropTypes.bool,
    getCoin: PropTypes.func
};

export default Coin;