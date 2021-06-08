import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import '../csspages/Login.css'

class Signup extends Component{
    render(){
        return(
          <div className="body">
            <center>
            <div className='Login col-md-3 myjumbotron bg-black'>
            <form>
                <span>welcome to yyy</span><br/><br/>
                <div className="col-sm-10">
                <div className="form-group">
                    <input type="text" placeholder='full name' className="form-control" required="true"/><br/>
                    <input type="email" placeholder='email' className="form-control" required="true"/><br/>
                    <input type="password" className="form-control" placeholder='password'  required="true" />
                  </div>
                </div>
                <button type="Submit" className="btn btn-shima" >Sign Up</button><br/>
                <span >
                   have an acount?   <a href='#'>Sign In!</a>
                </span>
            </form>
          </div>


            </center>
          </div>
          )
    }

}
export default Signup