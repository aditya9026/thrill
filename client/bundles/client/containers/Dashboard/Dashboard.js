import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends  React.Component {
	
	constructor(props){
    super(props)
  }

  render () {
		return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}
  
function mapStateToProps(store) {
  return {
    currentUser: store.current_user
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     userLogin: (params) => dispatch(userLogin(params)),
//   }
// }

export default connect(mapStateToProps, null)(Dashboard);