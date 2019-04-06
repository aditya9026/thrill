import React from 'react';
import { connect } from 'react-redux';
import Client from '../components/client';
import * as actions from '../actions/clientActionCreaters';
import { Link } from 'react-router-dom'

class ClientContainer extends  React.Component {
  render () {
    return (
      <div>
        <Link to="/user/sign_in">SignIn</Link>
        <Client/>
      </div>
    )
  }
}
  
const mapStateToProps = (state) => ({ props: state });

export default connect(mapStateToProps, actions)(ClientContainer);
