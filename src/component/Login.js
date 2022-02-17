import React, { Component } from 'react'
import {login} from './UserFunction'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }


    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    onSubmit=(e)=>{
        e.preventDefault();

        const user ={
            email:this.state.email,
            password:this.state.password
        }
        login(user).then(res=>{
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }


    render() {
        return (
            <div className="container">
                <h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h4 className="h4 mb-3 font-weight-normal">
                                    <h1 align="center"> User <a style={{ color: '#FF3841' }}> Login</a></h1><br/>
                               
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="enter the email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                />

                                        </div><br/>

                                        <div className="form-group">
                                            <label htmlFor="email">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="enter the Password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                />
                                                
                                        </div><br/>

                                        
                                        <button className="btn btn-lg btn-primary btn-block">Sign In</button>
                                </h4>
                            </form>




                        </div>
                    </div>
                </h2>
                
            </div>
        )
    }
}
