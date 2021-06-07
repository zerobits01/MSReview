import React, { Component } from 'react'

class Login extends Component{
    render(){
        return(
      
          <form>
              <br/>
              <span>welcome to yyy</span>
              <div>
                <input type='email' placeholder='email'></input><br/>
                <input type='text' placeholder='Full name'></input><br/>
                <input type='password' placeholder='password'></input><br/>
              </div>
              <span>
                Don't have an acount?   <a href='#'>Sign up!</a>
              </span>
          </form>
        </div>
        )
    }

}
export default Login