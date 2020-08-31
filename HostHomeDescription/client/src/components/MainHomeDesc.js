import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeDescription from './HomeDescription';

class MainHomeDesc extends React.Component {
  render() {
    return (
      <Router>
          <div>
            <Switch>
              <Route path="/:id" component={HomeDescription} />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default MainHomeDesc;