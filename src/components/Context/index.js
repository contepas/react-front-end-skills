import React, {Component} from 'react';
import server_response from '../../fakeData';


const SearchCoursesContext = React.createContext(null);

export class Provider extends Component {
    state = {
        matches: []
    }

    /**
     * populate the matches array state, based on subject;
     * if there is a match between 'subject' and keys values in COURSES,
     * the relative course will be added to the matches array.
     */
    filterCourses = (subject) => {
        const newMatches = [];
    
        for (let course of server_response.COURSES) {
            if (course.keys.includes(subject)) {
                newMatches.push(course);
            }
        }
    
        this.setState(prevState => {

            for (let match of newMatches) {
                if (prevState.matches.includes(match)) {
                    return{
                        matches: prevState.matches
                    }
                }
            }
            return {
                matches: [...newMatches, ...prevState.matches]
            }
        })
    }
    

    render(){
        return (
            <SearchCoursesContext.Provider value = {{
                matches: this.state.matches,
                actions: {
                  filterCourses: this.filterCourses
                }
            }}>
                {this.props.children}
            </SearchCoursesContext.Provider>
        );
    }
}

export const Consumer = SearchCoursesContext.Consumer;
