import React from 'react';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';;



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }
handleChange = (e)=>{
    const {name,value} = e.target;
    this.setState({[name]:value});

}
 handleSubmit = async (e)=>{
     e.preventDefault()

     const {email,password} = this.state;

     try{

        await auth.signInWithEmailAndPassword(email,password);
     }
     catch(err){
         console.error('User sign in error',err.message);
     }
     this.setState({
        email : '',
        password : ''
     })
 }

    render(){

        const {email,password} = this.state;
        return(
            <div className='sign-in'>
                <h1 className = 'title'>
                    I Already have account
                </h1>
                <span>Please sign in with your email and password</span>
            
            <form onSubmit = {this.handleSubmit} classNme = 'sign-in-form'>
                <FormInput 
                type = 'email'
                name = 'email'
                value = {email}
                handleChange = {this.handleChange}
                required 
                label = 'email'
                />
              
                <FormInput 
                type = 'password'
                name = 'password'
                value = {password}
                handleChange = {this.handleChange}
                required 
                label = 'password'
                />

                <div className = 'buttons'>
                    <CustomButton type = 'submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} type = 'button' isGoogleSignIn >Sign in with Goole</CustomButton>
                </div>
                 </form>
            </div>


        )
    }
}

export default SignIn;