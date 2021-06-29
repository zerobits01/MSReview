import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const axios = require("axios");

const ShowCritic = () => {
    const [state, dispatchState] = useState({ isData: false });
    const { id } = useParams();

    useEffect(() => {
        axios.get(URLS.critic_url + id)
            .then((response) => {
                console.log(response.data);
                dispatchState({ ...response.data, isData: true });
            })
            .catch((error) => {
                console.log(error);
                dispatchState({ isData: false });

            });
    }, []);

    if (!state.isData) {
        return <NotFound />;
    }

    return (
        <div className="bg-div" style={{
            color: "burlywood"
        }}>

            <div className="row bg-div">
                <div className="col-sm-9 justify-content-center bg-div">
                    <br />
                    <br />

                    <h1>
                        Title: {state.movie.title}
                    </h1>
                    <br />
                    <div className="row bg-div">
                        <div className="col-sm-3 justify-content-center">
                            <center>
                                <Image src={URLS.media_url + state.movie.imagesrc} alt="Random Name" height="300rem" width="300rem" />
                            </center>
                        </div>
                        <div className="col-sm-9" style={{
                            paddingRight: "10rem",
                            fontSize: "1.3rem"
                        }}>
                            {state.movie.description}

                            <br />
                            <br />
                            <br />
                            {// add rate here
                                state.critic.rate
                            }
                        </div>

                    </div>
                    <br />

                    <h4>
                        <hr style={{
                            backgroundColor: 'burlywood',
                            height: "0.1rem"
                        }} />
                        <br />

                        user {state.user.name} says:<br />
                        {state.critic.text}
                    </h4>
                    {/* {JSON.stringify(state)} */}
                </div>

                <div className="side-nav">
                    <Link to={"/showprofile/" + state.user.email}>
                        <Image src={URLS.media_url + state.user.profile} alt="Random Name" roundedCircle height="300rem" width="300rem" />
                        <br />
                        <br />
                        <h2>
                            Username: &nbsp; {state.user.email}
                        </h2>

                    </Link>
                </div>
            </div>

        </div>
    );
}


export default ShowCritic;


