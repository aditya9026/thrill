import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientContainer from '../containers/ClientContainer';
import SignIn from '../containers/SignIn/SignIn';
import SignUp from '../containers/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ClientContainer} />
          <Route path="/users/sign_in" component={SignIn} />
          <Route path="/users/sign_up" component={SignUp} />
        </div>
      </Router>
    )
  }
}
export default Routes;
