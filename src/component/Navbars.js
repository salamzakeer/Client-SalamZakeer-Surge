import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
     const loginRegLink = (
        <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/login" className="nav-link">
            <i className="far fa-sign-in-alt">Login</i>
          </Link>
        </li>

        <li class="nav-item">
           <Link to="/Register" className="nav-link">
            <i className="far fa-sign-in-alt">Register</i>
          </Link>
          </li>
      </ul>
     );

        const userLink=(
            <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link" >
            <i className="far fa-sign-in-alt" variant="primary">Profile</i>
          </Link>
        </li>
        
        <li className="nav-item">
          < a href="/register" onClick={this.logOut.bind(this)} className="nav-link">
              <i className="far fa-sign-in-alt">Logout</i>
          </a>
        </li>
      </ul>
        );



    return (
      <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#FF3841"}}>
        <div class="container-fluid">
         
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="far fa-sign-in-alt">Home</i>
                                </Link>
                            </li>
                        </ul>

                        {localStorage.usertoken ?  userLink:loginRegLink}
          
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
