import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../Inputs/InputField';

class SignInForm extends React.Component {

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props
		return (
			<div>
    		<form onSubmit={handleSubmit}>
					<div>
						<label>Email</label>
						<div>
							<Field
								name="email"
								component={InputField}
								type="email"
								placeholder="Email"
							/>
						</div>
					</div>
					<div>
						<button type="submit" disabled={pristine || submitting}>
							Submit
        		</button>
						<button type="button" disabled={pristine || submitting} onClick={reset}>
							Clear Values
        		</button>
					</div>
				</form>
      </div>
		)
	}
}

export default reduxForm({
  form: 'SignInForm'
})(SignInForm)