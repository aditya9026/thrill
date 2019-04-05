import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Client from '../components/client';
import ClientContainer from '../containers/clientContainer';

// clientContainer
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Client} />
          {/* <Route path="" component={clientContainer} /> */}
        </Switch>
      </div>
    )
  }
}
export default Routes;
