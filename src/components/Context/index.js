import React, {Component} from 'react';
import server_response from '../../fakeData';


const SearchCoursesContext = React.createContext(null);

export class Provider extends Component {
    state = {
        matches: [],
        subjectsFounded: []
    }


    /**
     * populate the matches array state, based on subject;
     * if there is a match between 'subject' and keys values in COURSES,
     * the relative course will be added to the matches array.
     */
    filterCourses = (subject) => {
        const newMatches = [];
        for (let subjectNames of this.state.subjectsFounded) {
            if (subjectNames.includes(subject)) {
                return false;
            }
        }
        
    
        for (let course of server_response.COURSES) {
            if (course.keys.includes(subject)) {
                newMatches.push(course);
            }
        }

        if (newMatches.length > 0) {
            this.setState(prevState => {
                const newSubjects = newMatches[0].keys;
                return {
                    matches: [...newMatches, ...prevState.matches],
                    subjectsFounded: [...prevState.subjectsFounded, newSubjects]
                }
            })
        }
        return true;
    }
    
    deleteCourses = (subject) => {
        this.setState(prevState => {
            const newMatches = prevState.matches.filter(matche => !matche.keys.includes(subject));
            const newSubjects = prevState.subjectsFounded.filter(subjectB => subject !== subjectB[0])
            return {
                matches: [...newMatches],
                subjectsFounded: [...newSubjects]
            }
        })
    }

    render(){
        return (
            <SearchCoursesContext.Provider value = {{
                matches: this.state.matches,
                subjectsFounded: this.state.subjectsFounded,
                actions: {
                  filterCourses: this.filterCourses,
                  deleteCourses: this.deleteCourses
                }
            }}>
                {this.props.children}
            </SearchCoursesContext.Provider>
        );
    }
}

export const Consumer = SearchCoursesContext.Consumer;
