import React, { Component } from 'react';

class Landing extends Component {
   
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron mt-5">
                    <div align="center" className="col-sm-14" mx-auto>
                        <h1 style={{ color: '#FF3841' }}>Surge Global</h1>  <br/>
                        <h2>SE Internship Assignment</h2>
                    </div>
                    <br/>
                    <div align="center" className="col-sm-8 mx-auto">
                        <h1>Welcome to User login portal </h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Landing;