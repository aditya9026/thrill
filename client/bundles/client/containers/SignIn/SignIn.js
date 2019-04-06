import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/Forms/SignInForm';
import { userLogin } from '../../actions/clientActionCreaters';
class SignIn extends  React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values){
    this.props.userLogin(values)
  }

  render () {
		return (
      <div>
        <h1>SignIn</h1>
        <SignInForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
  
function mapStateToProps(store) {
  return {
    currentUser: store.currentUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (params) => dispatch(userLogin(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);