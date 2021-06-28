import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import MyCarousel from '../../components/carousel/movie_carousel';

const axios = require("axios");

const ShowCritic = () => {
    const [state, dispatchState] = useState({ isData: false });
    const { id } = useParams();

    // useEffect(() => {
    //     axios.get(URLS.movie_url + id)
    //         .then((response) => {
    //             console.log(response.data);
    //             dispatchState({ ...response.data, isData: true });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             dispatchState({ isData: false });

    //         });
    // }, []);

    if (!state.isData) {
        return <NotFound />;
    }

    return (
        <div style={{color: "burlywood"}}>
            id is : {id}
        </div>
    );
}


export default ShowCritic;