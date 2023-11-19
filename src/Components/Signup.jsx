import React, { Component } from 'react'
import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import App from '../App';




export const Signup = () => {
  return (

  <div className="container">
    
    <div className="row justify-content-end">
      <div className="col-md-6 sign-in-box">
        <div className="col-md-12 title">
          <h2>Create an account</h2>
        </div>

        <div className="col-md-12">
          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-control-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-control-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-signin">Sign In</button>
            </div>
          </form>
        </div>

        <div className="col-md-12 login-link">
          <p>Already have an account? <Link to="Login">LOGIN</Link></p>
        </div>
      </div>
    </div>
  
  <div className='logo-container'>
    <div >
    <img src='/image2.png' alt='logo' className='logo'/><div className='logotitle'>BEHANCE</div>
    <div className='note'>Explore creativity!</div>
    </div>

  </div>
  </div>
);
};
export default Signup;