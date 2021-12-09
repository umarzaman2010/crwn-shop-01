import React from 'react';
import './sign-up.style.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName :'',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleChange = (e)=>{

        const {name,value} = e.target;
        this.setState({[name]:value});
        
    }

    handleSubmit = async (event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Password and confirmPassword do not match');
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confirmPassword:''
            })
        }
        catch(error){
            console.log('user sign up error',error.message);
        }
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h1 className = 'sign-up-form'>
                    I don't have account 
                </h1>
                <span>Sign up by yoru email and password</span>

                <form onSubmit={this.handleSubmit} className = 'sign-up-form'>
                    <FormInput
                    name = 'displayName'
                    type = 'text'
                    value = {displayName}
                    handleChange = {this.handleChange}
                    label = 'displayName'
                    required
                    
                    />

                    <FormInput
                    name = 'email'
                    type = 'email'
                    value = {email}
                    handleChange = {this.handleChange}
                    label = 'Email'
                    required
                    
                    />

                    <FormInput
                    name = 'password'
                    type = 'password'
                    value = {password}
                    handleChange = {this.handleChange}
                    label = 'password'
                    required
                    
                    />

                    <FormInput
                    name = 'confirmPassword'
                    type = 'password'
                    value = {confirmPassword}
                    handleChange = {this.handleChange}
                    label = 'confirmPassword'
                    required
                    
                    />

                    <CustomButton type='submit' >Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignUp;