import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import CourseFinder from './components/CourseFinder';
import Header from './components/Header';
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/course-finder" component={CourseFinder} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
