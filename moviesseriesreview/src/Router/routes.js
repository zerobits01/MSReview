import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import LandingPage from '../pages/landingpage/landingpage';
import NotFound from '../pages/notfound/notfound';
import AboutUs from '../pages/AboutUs/AboutUs';

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
                        // component={Home}
                        // we jave render for inline components
                        // child like render, but in every situation it will be rendered
                    />
                    <Route 
                        path="/critics" 
                        // component={Critics}
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
                        path="/signin"
                        // component={Singin}
                    />
                    <Route 
                        path="/signup"
                        // component={Singup}
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