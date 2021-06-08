import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import MyRouter from '../../Router/routes';

class NavBar extends React.Component {

    render() {
        // # is for sectioning in html
        return <Router>
            <nav className="nav navbar-fixed-top">
                <ul>
                    <li>
                        <Link to="/">Home</Link>    
                    </li>
                    <li>
                        <Link to="/critics">Critics</Link>    
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>    
                    </li>
                    <li>
                        <Link to="/aboutus">AboutUs</Link>    
                    </li>


                    <li className="fright">
                        <Link to="/signin">Sign In</Link>    
                    </li>
                    <li className="fright">
                        <Link to="/signup">Sign Up</Link>    
                    </li>            
                </ul>
            </nav>
            <hr style={{
                backgroundColor: 'burlywood',
                height: 20
            }}/>

            <MyRouter />
        </Router>;

}
}


export default NavBar;