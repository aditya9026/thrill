import React from 'react';
import { Field, reduxForm } from 'redux-form';
import InputField from '../Inputs/InputField';

class SignUpForm extends React.Component {

	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<div>
				<h1>SignUp</h1>
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
							<Field
								name="password"
								component={InputField}
								type="password"
								placeholder="Password"
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
  form: 'SignUpForm'
})(SignUpForm)