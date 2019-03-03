import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import coin from '../../styles/svg/moneta-0.svg';


const ImgCoin = posed.img({
    pressable: true,
    open: {opacity: 1},
    closed: {opacity: 0},
})

  
const Coin = props => (
    <ImgCoin 
        className={"imgcoin boy"}
        src={coin} 
        alt="Coin"
        pose={props.isVisible ? 'open' : 'closed'}
        onClick={props.getCoin}
    />
);


Coin.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    getCoin: PropTypes.func.isRequired
};

export default Coin;