import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/Forms/SignUpForm';
import { userSignUp } from '../../actions/clientActionCreaters';
class SignUp extends  React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values){
    this.props.userSignUp(values)
  }

  render () {
		return (
      <div>
        <SignUpForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
  
function mapStateToProps(state) {
  return {
    currentUser: state.authReducer.currentUser || state.currentUser,
    errors: state.authReducer.errors
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userSignUp: (params) => dispatch(userSignUp(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);