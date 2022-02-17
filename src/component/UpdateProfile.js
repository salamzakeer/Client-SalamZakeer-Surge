import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {update} from './UserFunction'

export default class UpdateProfile extends Component {
    constructor(){
        super();
        this.state={
            _id:"",
            first_name:"",
            last_name:"",
            email:"",
            password:""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    onSubmit(e){
        e.preventDefault();

        const user ={
            id: this.state._id,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            //password:this.state.password
            
        }
//console.log(this.state._id)
        update(user).then(res=>{
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }

    componentDidMount(){
        try{ 

        const token= localStorage.usertoken

        if(token){
        const decode = jwt_decode(token)

        this.setState({
            _id:decode._id,
            first_name:decode.first_name,
            last_name:decode.last_name,
            email:decode.email
        })
        console.log(decode._id)
    }else{
        alert("token not found");
    }
    }catch(err){
        console.log(err+ "token error")
    }
    }


    render() {
        return (
            <div className="container">
                <h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h3 className="h3 mb-3 font-weight-normal">
                                    <h1 align="center"> <a style={{ color: '#FF3841' }}>Update</a> User</h1><br/>
                                    <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="first_name"
                                                placeholder="enter the first name"
                                                value={this.state.first_name}
                                                onChange={this.onChange}
                                                />

                                        </div><br/>

                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="last_name"
                                                placeholder="enter the last name"
                                                value={this.state.last_name}
                                                onChange={this.onChange}
                                                />

                                        </div><br/>

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

                                        {/* <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                placeholder="enter the Password"
                                                value={this.state.password}
                                                onChange={this.onChange}
                                                />
                                                
                                        </div> */}
                                        <button className="btn btn-lg btn-primary btn-block">Update</button>

                                </h3>
                            </form>
                        </div>
                    </div>
                </h2>
                
            </div>
        )
    }
}

