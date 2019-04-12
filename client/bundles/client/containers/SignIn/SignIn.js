import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/Forms/SignInForm';
import { userLogin } from '../../actions/clientActionCreaters';
class SignIn extends  React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.error){
      alert(nextProps.error)
    } 
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
    currentUser: store.current_user,
    error: store.authReducer.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (params) => dispatch(userLogin(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);