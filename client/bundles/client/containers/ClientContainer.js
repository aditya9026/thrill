import React from 'react';
import { connect } from 'react-redux';
import Client from '../components/client';
import { userLogOut } from '../actions/clientActionCreaters';
import { Link } from 'react-router-dom'

class ClientContainer extends  React.Component {
  
  logOut(){
    this.props.userLogOut()
  }

  render () {
    return (
      <div>
        <Link to="/users/sign_in">SignIn</Link>
        <Link to="/users/sign_up">SignUp</Link>
        <button onClick={this.logOut.bind(this)}>sign out</button>
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
