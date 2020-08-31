import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HostInfo from './HostInfo';

class MainHomeDesc extends React.Component {
  render() {
    return (
      <Router>
          <div>
            <Switch>
              <Route path="/:id" component={HostInfo} />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default MainHomeDesc;