import React, {Component} from 'react';

export default class ErrorBoudary extends Component {
    state = {
        hasError: false
      }
    
    componentDidCatch() {
    this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError){
            return <h2>Damn! There is an error in the app.</h2>
        }
        return this.props.children;
    }
}