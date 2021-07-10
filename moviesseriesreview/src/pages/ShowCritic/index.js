import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";
import { URLS } from '../../global/global-vars';
import NotFound from '../notfound/notfound';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../../components/rating/Rating';
import { useAuthContext } from '../../context/auth/authContext';
import TableExample from '../../components/table-view/table-view';

const axios = require("axios");

const ShowCritic = () => {
    const [state, dispatchState] = useState({ isData: false, rate: 0 });
    const { id } = useParams();
    const [authState, authDisptacher] = useAuthContext();

    const rateCallBack = (rate_temp) => {
        dispatchState(prevState => {
            return { ...prevState, rate: rate_temp };
        });
    }

    const updateComments = () => {
        axios.get(URLS.comment_of_critics_url + id)
        .then(response => {
            console.log(response.data)
            dispatchState(prevState => {
                return {
                    ...prevState,
                    comments_table: response.data.comments
                }
            });
        })
        .catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        updateComments();
        axios.get(URLS.critic_url + id)
            .then((response) => {
                console.log(response.data);
                dispatchState(prevState => {
                    return { ...prevState, ...response.data, isData: true }
                });
            })
            .catch((error) => {
                console.log(error);
                dispatchState({ isData: false });

            });
    }, []);

    if (!state.isData) {
        return <NotFound />;
    }


    console.log(state)
    // handling rating state
    // should have credential

    const commentButton = (event) => {
        event.preventDefault();

        if (state.rate !== 0 && document.getElementById('comment-text').value.length != 0) {
            let config = {
                headers: {
                    'Authorization': "Token " + authState.user.token,
                    'Content-Type': "application/json"
                }
            }

            let comment = {
                'critic': id,
                'text': document.getElementById('comment-text').value,
                'rate': state.rate
            }
            axios.post(URLS.comment_url, comment, config)
                .then((response) => {
                    console.log(response);
                    document.getElementById('comment-text').value = '';
                    alert("we received your comment");
                    updateComments();

                })
                .catch((error) => {
                    console.log(error);
                });

        }
    }


    return (
        <div className="bg-div" style={{
            color: "burlywood"
        }}>

            <div className="row bg-div">
                <div className="col-sm-9 justify-content-center bg-div">
                    <br />
                    <br />

                    <div className="row">

                        <div className="col-sm-1"></div>
                        <div className="col-sm-11">
                            <h1 style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }}>
                                Title: {state.movie.title}
                            </h1>

                        </div>
                    </div>
                    <br />
                    <div className="row no-gutter container-fluid">
                        <div className="col-lg-3 order-lg-1" style={{
                            paddingLeft: "3rem"
                        }}>
                            <center>
                                <Image src={URLS.media_url + state.movie.imagesrc} alt="Random Name" height="300rem" width="300rem" />
                            </center>
                        </div>
                        <div className="col-lg-9 order-lg-2" style={{
                            paddingRight: "5rem",
                            paddingLeft: "5rem",
                            fontSize: "1.3rem"
                        }}>
                            {state.movie.description}

                            <br />
                            <br />
                            <br />
                            <h2>Rating:</h2>
                            <Rating read_only={true} givenRating={state.critic.rate} />

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
                    <div>
                        <TableExample table_data={state.comments_table} />
                        <br />
                        <br />
                    </div>
                    {/* {JSON.stringify(state)} */
                        authState.isAuthenticated
                            ? < div> <br />
                                <br />
                                <br />
                                <div className="container-fluid bg-div">
                                    <h2 className="text-center">Comment on this rate</h2>
                                    <div className="row justify-content-center">

                                        <div className="col-sm-7">

                                            <textarea className="form-control" id="comment-text" name="comments" placeholder="Comment" rows="5"></textarea>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <br />
                                                    <Rating rateCB={rateCallBack} />
                                                </div>
                                                <div className="row col-sm-6 form-group">

                                                    <button className="btn btn-block btn-lg btn-burly pull-right" type="submit"
                                                        onClick={commentButton}>Send Comment</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <br />
                                <br />
                                <br />
                            </div>

                            : <div></div>

                    }

                    <div className="side-nav justify-content-center">
                        <Link to={"/showprofile/" + state.user.email}>
                            <Image src={URLS.media_url + state.user.profile} alt="Random Name" roundedCircle style={{
                                height: "30%",
                                width: "45%"
                            }} />
                            <br />
                            <br />
                            <div className="col-sm-12">
                            <h2>
                                Username: &nbsp; {state.user.email}
                            </h2>
                            </div>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ShowCritic;


