import { data } from 'jquery';
import React, { useEffect, useState } from "react";
import { Image } from 'react-bootstrap';
import {
    Redirect,
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import CriticCarousel from '../../components/carousel/critic_carousel';
import TableExample from '../../components/table-view/table-view';
import { useAuthContext } from '../../context/auth/authContext';

const axios = require("axios");

const ShowProfile = () => {
    const [state, dispatchState] = useState({ isData: false });
    const [authState, authDisptacher] = useAuthContext();
    const { email_param } = useParams();

    const requestOnLoad = () => {
        if (authState.isAuthenticated) {
            // let email = email_param;
            // console.log(URLS.user_email_url + authState.user.username)
            axios.get(URLS.user_email_url + email_param)
                .then((response) => {
                    console.log(response.data);
                    dispatchState({ ...response.data, isData: true });
                })
                .catch((error) => {
                    console.log("###################################");
                    console.log(error);
                    dispatchState({ isData: false });

                });

        }
    }
    console.log(authState);
    useEffect(() => {
        requestOnLoad()
    }, []);

    if (!authState.isAuthenticated) {
        return <Redirect to="/signin" />
    }

    if (!state.isData) {
        return <NotFound />;
    }
    
    return (
        <div className="bg-div" style={{
            color: "burlywood"
        }}>

            {/* {JSON.stringify(state)} */}
            <div className="bg-div justify-content-center" style={{ 
                backgroundColor: "rgba(0,0,0,0.8)",
                height: "100%"
                }}>
                <Image src={URLS.media_url + state.user.profile} alt="Random Name" roundedCircle height="300rem" width="300rem" />
                <br />
                <br />
                <h2>
                    Username: &nbsp; {state.user.username}
                </h2>
                <br />
                <hr style={{
                    backgroundColor: 'burlywood',
                    height: "0.1rem"
                }} />
                <br />
                {
                    state.critics
                    ? <CriticCarousel data={{ title: "list of " + state.user.username + " critics", items: state.critics }} />
                    : <h1>user {state.user.username} has no critics</h1>

                }
            </div>

        </div>
    );
}


export default ShowProfile;

