import React, {Component} from 'react';
import posed from 'react-pose';
import coin from '../../styles/svg/moneta-0.svg';


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
            className={"imgcoin"}
            src={coin} 
            alt="Coin"
            pose={this.props.isVisible ? 'open' : 'closed'}
            onClick={this.props.getCoin}
            //onClick={() => this.setState({isVisible: false})}
        />
        )
    }   
};

export default Coin;