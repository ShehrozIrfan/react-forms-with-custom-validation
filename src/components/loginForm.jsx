import React, { Component } from 'react';
import Input from './input';
import '../App.css';
class LoginForm extends Component {
    state = { 
        accounts: {
            username: "",
            password: ""
        },
        //validation
        errors: {}
     }
     validate = () => {
         const errors = {};
         const { accounts } = this.state;
         if(accounts.username.trim() === '') {
             errors.username = "Username is required!";
         }
         if(accounts.password.trim() === '') {
             errors.password = "Password is required!";
         }
         //the below statement counts the number of keys in our object.
         return Object.keys(errors).length === 0 ? null : errors;
    };

     handleSubmit = (e) => {
         //preventing the default behavior of the form
         e.preventDefault();

         const errors = this.validate();
         //so when there is no error then the errors object contain null, so that will show an error, so to solve this we set the errors object to errors if there is an error, and if there is no error then the errors object is set to empty object.
         this.setState( {errors: errors || {} } );
         if(errors) return;

         console.log("Submitted");
     }

     validateProperty = ({ name, value }) => {
         if(name === 'username') {
             if(value.trim() === '') {
                 return "Username is required!";
             }
             //...
         }
         if(name === 'password') {
            if(value.trim() === '') {
                return "Password is required!";
            }
            //...
        }
     }
     handleChange = ( {currentTarget: input} ) => {
        //validation on change
        const errors = {...this.state.errors};
        const errorMsg = this.validateProperty(input);
        if(errorMsg) {
            errors[input.name] = errorMsg;
        } else {
            delete errors[input.name];
        }

        const accounts = {...this.state.accounts};
        accounts[input.name] = input.value;
        this.setState( { accounts, errors } );
     }
    render() { 
        const { accounts,errors } = this.state;
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 center">
                        <h1 className="text-center m-5">React-Form</h1>
                        <form onSubmit={this.handleSubmit}>
                            <Input 
                                name="username"
                                label="Username"
                                type="text"
                                value={accounts.username}
                                error={errors.username}
                                onChange={this.handleChange}
                            />
                            <Input 
                                name="password"
                                label="Password"
                                type="password"
                                value={accounts.password}
                                error={errors.password}
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LoginForm;
