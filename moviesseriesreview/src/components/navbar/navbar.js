import './navbar.css';
import React from 'react';
import MyRouter from '../../Router/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../../context/auth/authContext'; // using {} is improtant because it is exporting multiple options
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

const NavBar = () => {

    const [authState, authDisptacher] = useAuthContext(); // const is important for definition

    const logOut = () => {
        authDisptacher({
            type: 'logout'
        });
    }

    let right_hand = null;
    let right_hand_first = null;
    let right_hand_second = null;
    console.log(authState.isAuthenticated);
    if (authState.isAuthenticated) {
        right_hand_first = (
            <li className="fright">
                <Link to="/go-to-profile">Go to Profile</Link>
            </li>
        );
        right_hand_second = (
            <li className="fright">
                <Link to="/new-critic">New Critic</Link>
            </li>
        );
        right_hand = (
            <li className="fright" onClick={logOut}>
                <Link to="#">logout</Link>
            </li>
        );
    } else {
        right_hand_first = (
            <li className="fright">
                <Link to="/signin">Sign In</Link>
            </li>
        );
        right_hand_second = (
            <li className="fright">
                <Link to="/signup">Sign Up</Link>
            </li>
        );
    }

    return (
        <Router>
            <nav className="nav navbar-fixed-top">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/critics">Critics</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li> */}
                    <li>
                        <Link to="/aboutus">AboutUs</Link>
                    </li>
                    {right_hand}
                    {right_hand_first}
                    {right_hand_second}
                </ul>
            </nav>

            <hr style={{
                backgroundColor: 'burlywood',
                height: 20
            }} />

            <MyRouter />
        </Router>
    );



}

export default NavBar;