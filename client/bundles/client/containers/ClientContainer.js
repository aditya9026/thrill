import React from 'react';
import { connect } from 'react-redux';
import Client from '../components/client';
import { Link } from 'react-router-dom'

class ClientContainer extends  React.Component {

  render () {
    return (
      <div>
        <Link to="/users/sign_in">SignIn</Link>
        <Link to="/users/sign_up">SignUp</Link>
        <Client/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogOut: () => dispatch(userLogOut())
  }
}

const mapStateToProps = (state) => ({ props: state });

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
