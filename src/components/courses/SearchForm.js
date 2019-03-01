import React, { Component } from 'react';
import {Consumer} from '../Context'

class SearchForm extends Component {

    state = {
        searchItem: ''
    }

    handleValueChange = (e) => {
        this.setState({searchItem: e.target.value})
    }

    searchSubject = (event, filterCourses) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            filterCourses(this.state.searchItem);
            this.setState({searchItem: ''});
        }
    }
      

    render() {
        return (
            <Consumer>
                {({actions}) => {
                    const filterCourses = actions.filterCourses;
                    return (
                        <form>
                            <input
                                type= "text"
                                value= {this.state.searchItem}
                                onChange= {this.handleValueChange}
                                placeholder= "Ex. JavaScript, Python"
                                onKeyPress= {(e) => this.searchSubject(e, filterCourses)}
                            />
                            <input
                                type= "button"
                                value= "Search"
                                onClick= {() => filterCourses(this.state.searchItem)}
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