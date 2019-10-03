import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            
        } catch (error) {
            console.error(error);
        }


    }

    handleChange = event => {
        const { value, name } = event.target;

        // why [name]?
        // seems that by placing it in [] it becomes a variable such that then name of the event.target is used
        // then the value is applied so if email is changed then event.target.name is email and so setState assigns
        // value to [name] which is email

        this.setState({ [name]:value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                        name='email' 
                        type='email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput 
                        name='password' 
                        type='password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;