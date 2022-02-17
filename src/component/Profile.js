import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import { getprofile } from './UserFunction'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './style.css';

export default class Profile extends Component {
    constructor(){
        super()
        this.state={
            first_name:"",
            last_name:"",
            email:""
        }
    }


    componentDidMount(){
        try{ 
            const token= localStorage.usertoken
        const decode = jwt_decode(token)
            if(token){
        
        getprofile(decode._id).then(res=>{
                if(res){
                    console.log(res)
                    this.setState({
                        first_name:res.data.first_name,
                        last_name:res.data.last_name,
                        email:res.data.email
                    })
                    
                }
            })

  
    }else{
        alert("token not found");
    }
    }catch(err){
        console.log(err+ "token error")
    }
    }


    render() {
        return (
            <div className="container" >
                <div className="jumbotron mt-5">
                    <div className="col-sm8 mx_auto">
                        <h1 className="text-center">User <a style={{ color: '#FF3841' }}>Profile</a></h1>
                    </div>

                 

                    <div class="card shadow-lg p-3 mb-6 bg-white rounded">
                        <div class="card-header">User details</div>
                        <div class="card-body">
                            <h5 class="card-title">Full Name : &nbsp; {this.state.first_name} {this.state.last_name} </h5>
                            <p class="card-text">Email : &nbsp; {this.state.email}</p>
                            <Link to="/UpdateProfile" class="btn btn-primary">Update</Link>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            
        )
    }
}
