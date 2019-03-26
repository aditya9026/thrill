import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';
import HelloWorldContainer from '../containers/HelloWorldContainer';

// HelloWorldContainer
class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HelloWorld} />
          {/* <Route path="" component={HelloWorldContainer} /> */}
        </Switch>
      </div>
    )
  }
}
export default Routes;
