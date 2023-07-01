import React, {Component } from "react";
import '../Auth/auth.css'
import {Form, Button, Input } from "reactstrap"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import app from "../firebaseConfig";


class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            mode: 'Sign Up',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {}

        }
    }
    switchModeHandler  = () => {
        this.setState({ mode: this.state.mode==="Sign Up"?"Login": "Sign Up" })
    }   
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    SignIn = (e) => {
      e.preventDefault()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          console.log("Succesfully Logged in")
          // window.location.href("/dashboard")
      

        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          alert(errorCode)
        });
    }

    validateForm = () => {
        const { email, password, passwordConfirm } = this.state;
        const errors = {};
        // Validate email
        if (!email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Invalid email format';
        }
    
        // Validate password
        if (!password) {
          errors.password = 'Password is required';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters long';
        }
        
        if(this.state.mode=== 'Sign Up'){
          if (!passwordConfirm) {
            errors.passwordConfirm = 'Confirm password is required';
          } else if (password !== passwordConfirm) {
            errors.passwordConfirm = 'Passwords do not match';
          }
        }
        // Validate confirm password
    
        this.setState({ errors });
    
        // Return true if there are no errors
        return Object.keys(errors).length === 0;
      };
 
    handleSubmit = (e) => {
        e.preventDefault();
       if (this.validateForm()){
          const auth = getAuth(app);
          createUserWithEmailAndPassword(auth, this.state.email, this.state.password, this.state.passwordConfirm)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              console.log("Successfully created an account")
             

              this.setState({
                values: {
                    email: '',
                    password: '',
                    passwordConfirm: '',
                },
            })
            })
            .catch((error) => {
              const errorCode = error.code;
              //const errorMessage = error.message;
              alert(errorCode)
              // ..
            });      
           }
           
        
    }
    render(){
        const { email, password, passwordConfirm, errors } = this.state;
        return(
            <div style={{border: '1px solid grey', padding: '15px', borderRadius: '8px', marginTop: '20px'}}>
                    <button style={{width: "100%", backgroundColor:"#D70F64", color:"#fff"}} className="btn btn-lg" onClick={this.switchModeHandler}>Switch to {this.state.mode==="Sign Up"? "Login":"Sign Up"} </button>
                    <Form onSubmit={this.state.mode==="Sign Up"?this.handleSubmit:this.SignIn } style={{margin: '10px 0'}} >
                        <Input
                        name='email'
                        placeholder="Enter your mail"
                        className="form-control"
                        style={{margin: '7px 0px'}}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                         />
                         <span>{errors.email}</span>
                        <Input
                        name='password'
                        placeholder="Password"
                        className="form-control"
                        style={{margin: '7px 0px'}}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                         />
                         <span>{errors.password}</span>
                        
                        
                        {this.state.mode==="Sign Up"? <div> 

                            <Input
                            name='passwordConfirm'
                            placeholder="Confirm Password"
                            className="form-control"
                            style={{margin: '7px 0px'}}
                            onChange={this.handleInputChange}
                            value={this.state.passwordConfirm}
                            required
                            />    
                             <span>{errors.passwordConfirm}</span>             
                         

                            <br/>
                        
                        </div>:null }

                       
                         <Button type="submit" className="btn btn-success">{this.state.mode==="Sign Up"?"Sign Up":"Login" }</Button>
                    </Form>
                    </div>
        )
    }
}
export default Auth


        // errors = {};
        // if (!values.email){
        //     errors.email = 'Required'
        // }else if(!/^[A-Z0-9._%+-]+@[A-Z]{2,}$/i.test(values.email)){
        //     errors.email = 'Invalid email Address'
        // }
        // if (!values.password){
        //     errors.password = 'Required'
        // } else if(values.password.length < 4){
        //     errors.password = 'Must be atleast 4 characters'
        // }
        // if(!values.passwordConfirm) {
        //     errors.passwordConfirm = 'Required'
        // } else if( values.password !== values.passwordConfirm){
        //     errors.passwordConfirm = 'Password does not matcht.'
        // }
        // return errors

     
     
     
     
     
        // https://technews24.site/links/UkUyZjczcWpsMHg0N1E2SWdSMjV1NklFSUpxUXFCTEhQZGRWK3VjVE9Vb0JJM0ZWSXovUGJjZkxtbDNKOVlDVg==