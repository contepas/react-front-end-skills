import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CourseFinder from './components/courses/CourseFinder';
import Game from './components/game/Game';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ErrorBoudary from './components/ErrorBoundary';

class App extends Component {
  
  render() {
      return (
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <ErrorBoudary>
                <Route path="/course-finder" component={CourseFinder} />
                <Route path="/play" component={Game} />
              </ErrorBoudary>
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      )  
  }
}

export default App;
