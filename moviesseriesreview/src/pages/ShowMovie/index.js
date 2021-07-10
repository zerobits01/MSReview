import React, { useEffect, useState } from "react";
import { Image } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import '../../css/show-movie.css';
import CriticCarousel from '../../components/carousel/critic_carousel';
import Rating from '../../components/rating/Rating';

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
        <div className="bg-div" style={{
            color: "burlywood"
        }}>

            <div className="row bg-div">
                <div className="col-sm-9">
                    <br />

                    <h2>
                        summary:
                    </h2>

                    <br />

                    <h4 className="float-left">
                        {state.movie.description}
                    </h4>

                    <CriticCarousel data={{ title: "critics", items: state.critics }} />
                </div>

                <br />
                <br />

                <div className="side-nav">
                    <Image src={URLS.media_url + state.movie.image.image} alt="Random Name" roundedCircle height="30%" width="45%" />
                    <br />
                    <br />
                    <br />
                    <br />

                    <h2>
                        Title: &nbsp; {state.movie.title}
                    </h2>
                    <br />
                    <br />

                    <div className="justify-content-center">
                        <h3>
                            Average Rate:
                        </h3>

                        <Rating read_only={true} givenRating={state.movie.avgrate.rate__avg} />

                    </div>

                </div>
            </div>

        </div>
    );
}


export default ShowMovie;