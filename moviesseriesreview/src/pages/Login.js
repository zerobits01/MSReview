import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import '../csspages/Login.css'

class Login extends Component{
    render(){
        return(
          <div className="body">
            <center>
            <div className='Login col-md-3 myjumbotron bg-black'>
            <form>
                <span>welcome to yyy</span><br/><br/>
                <div className="col-sm-10">
                <div className="form-group">
                    <input type="email" placeholder='email' className="form-control"  /><br/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder='password'  />
                  </div>
                </div>
                <button type="button" className="btn btn-shima" >Sign In</button><br/>
                <span >
                  Don't have an acount?   <a href='#'>Sign up!</a>
                </span>
            </form>
          </div>


            </center>
          </div>
          )
    }

}
export default Login