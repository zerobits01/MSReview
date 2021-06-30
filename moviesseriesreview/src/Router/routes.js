import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import LandingPage from '../pages/landingpage/landingpage';
import NotFound from '../pages/notfound/notfound';
import AboutUs from '../pages/AboutUs/AboutUs';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/index';
import Critics from '../pages/Critics/index';
import Profile from '../pages/profile/index';
import ShowProfile from '../pages/showprofile/show-profile';
import ShowMovie from '../pages/ShowMovie/index';
import ShowCritic from '../pages/ShowCritic/index';
import Create from '../pages/Create/create';


class MyRouter extends React.Component {

    render() {
        return (
            <Switch>
                <Route
                    path="/"
                    exact
                    // this is so important to use exact here
                    component={LandingPage}
                // we jave render for inline components
                // child like render, but in every situation it will be rendered
                />

                <Route
                    path="/home"
                    component={Home}
                // we jave render for inline components
                // child like render, but in every situation it will be rendered
                />
                <Route
                    path="/critics"
                    component={Critics}
                />
                <Route
                    path="/movies"
                // component={Movies}
                />

                <Route
                    path="/aboutus"
                    component={AboutUs}
                />
                <Route
                    path="/showprofile/:email_param"
                    component={ShowProfile}
                />
                <Route
                    path="/signin"
                    component={Login}
                />
                <Route
                    path="/signup"
                    component={Signup}
                />
                <Route
                    path="/go-to-profile"
                    component={Profile}
                />
                <Route
                    path="/movie/:id"
                    component={ShowMovie}
                />
                <Route
                    path="/critic/:id"
                    component={ShowCritic}
                />
                <Route
                    path="/new-critic"
                    component={Create}
                />
                <Route
                    component={NotFound}
                />


            </Switch>

        );
    }
}


export default MyRouter;

// react router
// context api