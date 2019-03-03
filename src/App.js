import React, {Component} from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import CourseFinder from './components/course-finder';
import Home from './components/Home';
import Game from './components/game';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ErrorBoudary from './components/ErrorBoundary';

class App extends Component {
  
  render() {
      return (
        <HashRouter >
          <div className="container">
            <Header />
            <Switch>
              <ErrorBoudary>
                <Route exact path="/" component={Home} />
                <Route path="/course-finder" component={CourseFinder} />
                <Route path="/play" component={Game} />
              </ErrorBoudary>
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      )  
  }
}

export default App;
