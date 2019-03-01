import React, {Component} from 'react';
import {Consumer} from '../Context';

class CourseFinder extends Component {
 
    render() {
        return (
          <Consumer>
          {() => {
            return (
              <div className="game">
                <a 
                    href="https://contepas.github.io/four-in-a-row/" 
                    target="_blank"
                    rel="noopener noreferrer">Play 4 in a Row
                </a>
              </div>
            )
          }}
          </Consumer>
        );
      }
}

export default CourseFinder