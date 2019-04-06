import React from 'react';
import { connect } from 'react-redux';
import SignInForm from '../../components/Forms/SignInForm';

class SignIn extends  React.Component {
  
  handleSubmit(values){
    console.log(values)
  }

  render () {
		return (
      <div>
        <SignInForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
  
function mapStateToProps(store) {
  return {
    test: store.rails_props
  }
}

export default connect(mapStateToProps)(SignIn);
