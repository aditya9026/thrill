import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ClientContainer from '../containers/ClientContainer';
import SignIn from '../containers/SignIn/SignIn';
import SignUp from '../containers/SignUp/SignUp';
import Dashboard from '../containers/Dashboard/Dashboard';

const AuthRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.currentUser ? (
        React.createElement(component, props)
      ) : (
        <Redirect to="/users/sign_in" />
      )
    }
  />
);

const SessionRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    (rest.currentUser) ? (
      <Redirect to="/dashboard" />
    ) : (
      React.createElement(component, props)
    )
  )}/>
)

class Routes extends React.Component {

  render() {
    const { currentUser } = this.props
    // console.log(this.props)
    return (
      <Router>
        <div>
          <SessionRoute currentUser={currentUser} path="/" exact component={ClientContainer} />
          <SessionRoute currentUser={currentUser} path="/users/sign_in" component={SignIn} />
          <SessionRoute currentUser={currentUser} path="/users/sign_up" component={SignUp} />
          <AuthRoute    currentUser={currentUser} path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default connect(
  state => ({
    currentUser: state.authReducer.currentUser || state.currentUser,
  })
)(Routes)
