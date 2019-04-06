import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientContainer from '../containers/ClientContainer';
import SignIn from '../containers/SignIn/SignIn';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ClientContainer} />
          <Route path="/user/sign_in" component={SignIn} />
        </div>
      </Router>
    )
  }
}
export default Routes;
