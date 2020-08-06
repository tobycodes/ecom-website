import React from "react";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;

		if (password !== confirmPassword) {
			console.log("Passwords do not match!");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	render() {
		const className = this.props.class;
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className={className}>
				<h1 className={`${className}-title`}>I don't have an account</h1>
				<span className={`${className}-subtitle`}>
					Sign up with your email and password.
				</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						value={displayName}
						handleChange={this.handleChange}
						name="displayName"
						type="text"
						label="Display Name"
						required
					/>
					<FormInput
						value={email}
						handleChange={this.handleChange}
						name="email"
						type="email"
						label="Email"
						required
					/>
					<FormInput
						value={password}
						handleChange={this.handleChange}
						name="password"
						type="password"
						label="Password"
						required
					/>
					<FormInput
						value={confirmPassword}
						handleChange={this.handleChange}
						name="confirmPassword"
						type="password"
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit" onClick={this.handleSubmit}>
						Sign Up
					</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
