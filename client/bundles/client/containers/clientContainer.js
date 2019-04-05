import React from 'react';
import { connect } from 'react-redux';
import Client from '../components/client';
import * as actions from '../actions/clientActionCreators';

class clientContainer extends  React.Component {
  render () {
    return (
      <div>
        <Client />
      </div>
    )
  }
}
  
// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ props: state });

export default connect(mapStateToProps, actions)(clientContainer);
