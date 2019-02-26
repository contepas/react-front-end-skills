import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import CourseFinder from './components/CourseFinder';
 import Header from './components/Header';
// import {Consumer} from './components/Context';


const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Route path="/course-finder" component={CourseFinder} />
    </div>
  </BrowserRouter>
)

// class App extends Component {

//   render() {
//     return (
//       <Consumer>
//       {({matches}) => {
//         const totMatches = matches.length;
//         return (
//           <div className="App">
//             <h1>Click me to show or hide the search field</h1>
//               <SearchForm />
//               {totMatches ? <CourseList /> : null}
//           </div>
//         )
//       }}
//       </Consumer>
//     );
//   }
// }

export default App;
