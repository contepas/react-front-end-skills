import React, { Component } from 'react';
import {Consumer} from './Context'

class SearchForm extends Component {

    state = {
        searchItem: ''
    }

    handleValueChange = (e) => {
        this.setState({searchItem: e.target.value})
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault()
            this.filterCourses(this.state.searchItem)
            this.setState({searchItem: ''})
        }
    }
      

    render() {
        return (
            <Consumer>
                {({actions}) => {
                    const filterCourses = actions.filterCourses;
                    this.filterCourses = () => filterCourses(this.state.searchItem);
                    return (
                        <form>
                            <input
                                type= "text"
                                value= {this.state.searchItem}
                                onChange= {this.handleValueChange}
                                placeholder= "Ex. JavaScript, Python"
                                onKeyPress= {this.handleKeyPress}
                            />
                            <input
                                type= "button"
                                value= "Search"
                                onClick= {this.callback}
                            />
                        </form>
                    )
                }
                }
            </Consumer>
        )
    } 
}

export default SearchForm