import React from 'react';
import FormInput from '../FormInput/form-input.component';
import CustomButton from '../CustomButton/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '', 
                password: ''
            });
        } catch (error) {
            console.log(error.message);
        }

    }
    
    render() {
        const className = this.props.class;
        return (
            <div className={className}>
                <h1 className={`${className}-title`}>I already have an account</h1>
                <span className={`${className}-subtitle`}>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput value={this.state.email} handleChange={this.handleChange} name ='email' type='email' label='Email' required />
                    <FormInput value={this.state.password} handleChange={this.handleChange} name='password' type='password' label='Password' required/>
                    <div className={`${className}-buttons`}>
                        <CustomButton type='submit' onClick={this.handleSubmit} >
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogle={true} onClick={signInWithGoogle} >
                            Sign In With Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;


// {
//     apiKey: "AIzaSyBG1X4y_S61teVYkX44oW1XiRbo4_-9cgU",
//     authDomain: "tooshwear-cbd79.firebaseapp.com",
//     databaseURL: "https://tooshwear-cbd79.firebaseio.com",
//     projectId: "tooshwear-cbd79",
//     storageBucket: "tooshwear-cbd79.appspot.com",
//     messagingSenderId: "491830255495",
//     appId: "1:491830255495:web:894a939bc65e78e2a5bd22"
// };