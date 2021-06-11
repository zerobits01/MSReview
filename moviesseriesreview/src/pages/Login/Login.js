import React, { useState } from 'react'
import '../../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../../context/auth/authContext';

const Login = () => {

  const [authState, authDisptacher] = useAuthContext();
  const [data, dispatchData] = useState({});

  
  const handleEmail = (event) => {
    dispatchData(state => {
      console.log(state);
      return {
        ...state,
        username: event.target.value
      }
    });
  }

  const handlePassword = (event) => {
    event.preventDefault();
    dispatchData(state => {
      console.log(state);
      return {
        ...state,
        password: event.target.value
      }
    });
  }

  const loginButton = (event) => {
    event.preventDefault();
    console.log(data);
    authDisptacher({
      type: 'login',
      isAuthenticated: true,
      user: {
        username: data.username,
        password: data.password
      }
    });
    document.getElementById("login-form").reset(); // this is how we prevent the refresh and clear the form
  }

  return (
    <div className="body">
      <center>
        <div className='Login col-md-3 myjumbotron bg-black'>
          <form id="login-form">
            <span>welcome to our site</span><br /><br />
            <div className="col-sm-10">
              <div className="form-group">
                <input type="email" placeholder='email' className="form-control" required onChange={handleEmail} /><br />
                <input type="password" className="form-control" placeholder='password' required onChange={handlePassword} />
              </div>
            </div>
            <button className="btn btn-shima" onClick={loginButton}>Sign In</button><br />
            <span >
              Don't have an acount?   <a href='#'>Sign up!</a>
            </span>

          </form>
        </div>
      </center>
    </div>

  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);  // we can pass {}
  // use context loads the cntext dispatcher 
  // use state creates a new disptcher for this new state

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}

export default Login;