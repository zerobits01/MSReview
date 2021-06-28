import React, { useEffect, useState } from "react";
import { Image } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import './show-movie.css';
import CriticCarousel from '../../components/carousel/critic_carousel';

const axios = require("axios");

const ShowMovie = () => {
    const [state, dispatchState] = useState({ isData: false });
    const { id } = useParams();

    useEffect(() => {
        axios.get(URLS.movie_url + id)
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
        <div style={{
            color: "burlywood"
        }}>

            <div className="row">
                <div className="col-sm-9">
                    <CriticCarousel data={{ title: "critics", items: state.critics }} />
                </div>
                <div className="side-nav">
                    <Image src={URLS.media_url + state.movie.image.image} alt="Random Name" roundedCircle height="300rem" width="300rem" />
                    <br />
                    <br />
                    <h2>
                        Title: &nbsp; {state.movie.title}
                    </h2>

                    <div className="row justify-content-center">
                        <h3>
                            Rate:
                        </h3>
                        <h3>
                            &nbsp; Rate place
                        </h3>

                    </div>
                    <h3>
                        summary:
                        </h3>
                    <h5 className="float-left">
                        {state.movie.description}
                    </h5>

                </div>
            </div>

        </div>
    );
}


export default ShowMovie;