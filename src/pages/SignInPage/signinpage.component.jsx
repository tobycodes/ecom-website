import React from 'react';
import './_signinpage.styles.scss';
import SignIn from '../../components/SignIn/signin.component';
import SignUp from '../../components/SignUp/signup.component';


const SignInPage = () => (
    <div className='signpage'>
        <SignIn class='signpage__elem' />
        <SignUp class='signpage__elem' />
    </div>
);


export default SignInPage;