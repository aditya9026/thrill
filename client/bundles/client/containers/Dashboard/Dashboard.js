import React from 'react';
import { connect } from 'react-redux';
import { userLogOut } from '../../actions/clientActionCreaters';
class Dashboard extends  React.Component {
	
	constructor(props){
    super(props)
  }

  logOut(){
    this.props.userLogOut()
  }

  render () {
		return (
      <div>
        <h1>Dashboard</h1>
        <hr></hr>
        <button onClick={this.logOut.bind(this)}>sign out</button>
      </div>
    )
  }
}
  
function mapStateToProps(store) {
  return {
    currentUser: store.current_user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogOut: (params) => dispatch(userLogOut(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);