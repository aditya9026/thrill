// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
import client from '../components/client';
import * as actions from '../actions/clientActionCreators';

class clientContainer extends  React.Component {

  componentWillMount() {
  }

  render () {
    return (
      <div>
        <client />
      </div>
    )
  }
}
  
// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ props: console.log(state) });
// Don't forget to actually use connect!
// Note that we don't export client, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples

export default connect(mapStateToProps, actions)(clientContainer);
