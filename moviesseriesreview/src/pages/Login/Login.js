import React, { useState } from 'react'
import '../../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../../context/auth/authContext';
import { URLS } from '../../global/global-vars';
import { Redirect } from 'react-router-dom';
const axios = require('axios');


const Login = () => {

  const [authState, authDisptacher] = useAuthContext();
  const [data, dispatchData] = useState({});


  const handleEmail = (event) => {
    dispatchData(state => {
      return {
        ...state,
        username: event.target.value
      }
    });
  }

  const handlePassword = (event) => {
    dispatchData(state => {
      return {
        ...state,
        password: event.target.value
      }
    });
  }

  const loginButton = (event) => {
    event.preventDefault();

    if ((data.username && data.password) && !(data.username.length === 0 || data.password.length === 0)) {
      axios.post(URLS.login_url, data)
        .then((response) => {

          if (response.status == 200) {

            authDisptacher({
              type: 'login',
              isAuthenticated: true,
              user: {
                username: data.username,
                token: response.data.token
              }
            });
            console.log("test")
            document.getElementById("login-form").reset(); // this is how we prevent the refresh and clear the form
            dispatchData({ redirect: true });

          }

        })
        .catch(error => {
          alert("username or password is wrong!!")
          // console.log(error.response);
        })
        // .then(() => {
        //   console.log("another thing")
        // });
    } else {
      alert("username and password can not be empty");
    }
  }

  if (data.redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="body">
      <center>
        <div className='Login col-md-3 myjumbotron bg-black'>
          <form id="login-form">
          <br />
          <span style={{color: "burlywood"}}>welcome to our site</span><br /><br />
            <div className="col-sm-10">
              <div className="form-group">
                <input type="email" placeholder='email' className="form-control" required onChange={handleEmail} /><br />
                <input type="password" className="form-control" placeholder='password' required onChange={handlePassword} />
              </div>
            </div>
            <button type="submit" className="btn btn-shima" onClick={loginButton}>Sign In</button><br />
            <span >
              Don't have an acount?   <a href='/signup'>Sign up!</a>
            </span>
            <br />
            <br />
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

/*
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
*/