import React from "react";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;

		emailSignInStart({ email, password });

		// this.setState({
		// 	email: "",
		// 	password: "",
		// });
	};

	render() {
		const className = this.props.class;
		const { googleSignInStart } = this.props;
		return (
			<div className={className}>
				<h1 className={`${className}-title`}>I already have an account</h1>
				<span className={`${className}-subtitle`}>
					Sign in with your email and password.
				</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						value={this.state.email}
						handleChange={this.handleChange}
						name="email"
						type="email"
						label="Email"
						required
					/>
					<FormInput
						value={this.state.password}
						handleChange={this.handleChange}
						name="password"
						type="password"
						label="Password"
						required
					/>
					<div className={`${className}-buttons`}>
						<CustomButton type="submit" onClick={this.handleSubmit}>
							Sign In
						</CustomButton>
						<CustomButton type="button" isGoogle={true} onClick={googleSignInStart}>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (EmailAndPassword) =>
		dispatch(emailSignInStart(EmailAndPassword)),
});
export default connect(null, mapDispatchToProps)(SignIn);
