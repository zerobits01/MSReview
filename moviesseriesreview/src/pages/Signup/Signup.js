import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Login.css';
import { useAuthContext } from '../../context/auth/authContext';
import { URLS } from '../../global/global-vars';
import { Redirect } from 'react-router-dom';
const axios = require('axios');
const FormData = require('form-data');

/*

const formData = new FormData();
formData.append('yinyang.png', fs.createReadStream('./yinyang.png'));
const res = await axios.post('http://localhost:3000/upload', formData, {
  // You need to use `getHeaders()` in Node.js because Axios doesn't
  // automatically set the multipart form boundary in Node.
  headers: formData.getHeaders()
});
 */


const Signup = () => {

  const [authState, authDisptacher] = useAuthContext();
  const [data, dispatchData] = useState({});


  const handleEmail = (event) => {
    dispatchData(state => {
      return {
        ...state,
        email: event.target.value
      }
    });
  }

  const handleName = (event) => {
    dispatchData(state => {
      return {
        ...state,
        name: event.target.value
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

  const handlePassword1 = (event) => {
    dispatchData(state => {
      return {
        ...state,
        password1: event.target.value
      }
    });
  }

  const signupButton = (event) => {
    event.preventDefault();

    let image = document.getElementById("profileImage").files[0]
    console.log(data.image);

    if (data.password !== data.password1) { // checks if password and confirm are the same or alert
      alert("password and confirm are not the same")
    } else if ((data.email && data.password && data.password1 && data.name)
      && !(data.email.length === 0 || data.password.length === 0 || data.name.length === 0)) {
      // check if all fields are OK

      let formdata = new FormData(); // create the form data for sending the request to back

      if (image) { // adding the image to form data if the user has entered image
        console.log("test")
        formdata.append("name", image.name)
        formdata.append('image', image);
      }
      formdata.append("data", JSON.stringify(
        { // adding the data to form
          email: data.email,
          name: data.name,
          password: data.password
        }
      ));
      axios({
        method: 'post',
        url: URLS.signup_url,
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      }) // send create use request
        .then((response) => {


          let user = response.data.user; // getting the user from response
          axios.post(URLS.login_url, {
            username: data.email,
            password: data.password
          }) // sending loging request
            .then((response) => {

              authDisptacher({ // updating the data with loging after signup
                type: 'login',
                isAuthenticated: true,
                user: {
                  username: data.username,
                  token: response.data.token
                }
              });

              dispatchData({ redirect: true });
            }, (error) => {
              console.log(error);
            });


        })
        .catch((error) => {
          let error_message = ''
          for (let err in error.response.data) {
            error_message = error_message + err + ":\t" + error.response.data[err] + "\n";
          }
          console.log(error_message);
          alert(error_message);
        });

      document.getElementById("signup-form").reset(); // this is how we prevent the refresh and clear the form
    } else {
      alert("username and password can not be empty");
    }
  }

  if (data.redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="body bg-div">
      <center>
        <div className='Login col-md-3 myjumbotron bg-black'>
          <form id="signup-form">
            <br />
            <span style={{color: "burlywood"}}>welcome to our site</span><br /><br />
            <div className="col-sm-10">
              <div className="form-group">
                <input type="text" placeholder='full name' className="form-control" onChange={handleName} required /><br />
                <input type="email" placeholder='email' className="form-control" onChange={handleEmail} required /><br />
                <input type="password" className="form-control" placeholder='password' onChange={handlePassword} required /><br />
                <input type="password" className="form-control" placeholder='password confirm' onChange={handlePassword1} required />
              </div>
              <div style={{ height: "4rem" }}>
                <label for="files" className="btn btn-burly ">Select Image</label>
                <input id="files" style={{ visibility: "hidden", height: 0, widows: 0 }} type="file" />
              </div>
            </div>
            <button type="submit" className="btn btn-burly" onClick={signupButton}>Sign Up</button>
            <br />
            <br />
            <span >
              have an acount?   <a href='/signin'>Sign In!</a>
            </span>
            <br />
            <br />
          </form>
        </div>


      </center>
    </div>
  )

}

export default Signup