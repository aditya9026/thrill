import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientContainer from '../containers/clientContainer';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ClientContainer} />
        </Switch>
      </div>
    )
  }
}
export default Routes;
