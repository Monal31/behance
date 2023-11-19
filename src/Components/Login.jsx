import React from 'react';
import './Login.css';
// import './Signup.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Link } from 'react-router-dom';


export const Login = () => {
   
  return (
    
   
    <div className="container" >
         <img className='bg' src=''></img>
    <div className="row justify-content-end">
      <div className="col-md-6 log-in-box">
        <div className="col-md-12 title">
            <h2>Login</h2>
          </div>

          <div className="col-lg-12">
            <form>
              <div className="form-group">
                <label htmlFor="email" className="form-control-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
             

              <div className="col-4">
              <div className="form-group">
                <button className="btn btn-light btn-login continue"><a><Link to="Home">Continue</Link></a></button>
              </div>
              </div>
              <div class="or-divider">OR</div>
              <div className="form-group">
                <button type="submit" className="btn btn-outline-primary  social-btn">Continue with Google</button>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-outline-dark social-btn">Continue with Apple</button>
              </div>
             
              
              
            </form>
          </div>

          <div className="col-lg-12 login-link">
            <p>New user? <Link to="Signup">Creat an account</Link></p>
          </div>
        </div>
      </div>
      <div className='logo-container'>
      <div>
    <img src='/image2.png' alt='logo' className='logo'/><div className='logotitle'>BEHANCE</div>
    <div className='note'>Explore creativity!</div>
    </div>

  </div>
  
  </div>
  
  );
};

export default Login;
