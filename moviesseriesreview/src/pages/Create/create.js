import React, { useEffect, useState } from 'react';
import { AlignTop } from 'react-bootstrap-icons';
import Select from 'react-select';
import Rate from '../../components/rating/Rating';
import { URLS } from '../../global/global-vars';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/authContext';
import './create.css';

const axios = require("axios");



const Create = () => {

    const [authState, authDisptacher] = useAuthContext();
    if(!authState.isAuthenticated){
        return <Redirect to="/signin" />;
    }
    const [state, setState] = useState({
        select: null,
        critic: '', rate: 0,
        aquaticCreatures: [
            // { label: 'Us', value: 'Us' },
        ]
    });
    const { select } = state;
    useEffect(() => {


        axios.get(URLS.movie_url)
            .then((response) => {
                for (let movie of response.data) {
                    console.log({ label: movie.title, value: movie.id })
                    state.aquaticCreatures.push({ label: movie.title, value: movie.id })
                }
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    const rateCallBack = (rate_temp) => {
        setState(prevState => {
            return { ...prevState, rate: rate_temp };
        });
    }

    const handleCritic = () => {
        if (state.select == null || state.critic.length == 0 || state.rate === 0) {
            alert("please fill out all fields")
        } else {

            let config = {
                headers: {
                    'Authorization': "Token " + authState.user.token,
                    'Content-Type': "application/json"
                }
            }

            let critic = {
                movie: state.select.value,
                text: state.critic,
                rate: state.rate
            };
            console.log("#############");
            console.log(config);
            console.log(critic);

            axios.post(URLS.critic_url, critic, config)
                .then((response) => {
                    console.log(response);
                    document.getElementById('criticid').value = '';
                    alert("we received your critic");
                    return <Redirect to="/home" />;

                })
                .catch((error) => {
                    console.log(error);
                });


            console.log(state)
        }

    }



    const handleCriticBox = event => {
        setState(prevState => {
            return { ...prevState, critic: event.target.value }
        });

    };

    const handleChange = selectedOption => {
        setState(prevState => {
            return { ...prevState, select: selectedOption }
        });
        console.log(`Option selected:`, selectedOption);
    };


    return (
        <div className='divis bg-div' >
            <center>

                <div className="justify-content-center">

                    <div className=' col-md-12 ' >
                        <br />

                        <div className="col-sm-6 bg-black" style={{ color: "rgba(226,134,14)", width: "100%" }}>
                            <Select
                                options={state.aquaticCreatures}
                                value={select}
                                onChange={handleChange}
                                required id='selectid'
                            />

                        </div>

                        <br />

                    </div>
                    <div className="col-sm-9 bg-black">
                        <textarea className="form-control" id="criticid" onChange={handleCriticBox} name="comments" placeholder="write your critic :)" rows="7" culomn="10"></textarea> <br />
                    </div>
                    <div className="col-sm">
                        <Rate rateCB={rateCallBack} />
                    </div>
                    <button type='submit' onClick={handleCritic} className="btn btn-shima"  > create </button>
                </div>

            </center>

        </div>
    )
}


export default Create;