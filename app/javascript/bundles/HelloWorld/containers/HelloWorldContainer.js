// Simple example of a React "smart" component
import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';
import * as actions from '../actions/helloWorldActionCreators';

class HelloWorldContainer extends  React.Component {

  componentWillMount() {
  }

  render () {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
}
  
// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ props: console.log(state) });
// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples

export default connect(mapStateToProps, actions)(HelloWorldContainer);
