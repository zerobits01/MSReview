import React from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {

    render() {
        // # is for sectioning in html
        return <div>
            <nav className="nav navbar-fixed-top">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">Critics</a></li>
                    <li><a href="#contact">About us!</a></li>
                    {/* <li><a href="javascript:void(0)" className="dropbtn">Dropdown</a></li>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div> */}
                    <li className="fright"><a className="btn btn-burly" href="#" >Sign In</a></li>
                    <li className="fright"><a className="btn btn-burly" href="#" >Sign Up</a></li>            
                </ul>
            </nav>
            <hr style={{
                backgroundColor: 'burlywood',
                height: 20
            }}/>
        </div>;
    }
}


export default NavBar;