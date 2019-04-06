import React from 'react';
import { connect } from 'react-redux';
import Client from '../components/client';
import * as actions from '../actions/clientActionCreators';
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
  
// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ props: state });

export default connect(mapStateToProps, actions)(ClientContainer);
