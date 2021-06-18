import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel-item.css'



const CarouselItem = (props) => {
    return (
        <div className="" style={{
            margin: "2rem"
        }}>
            <div className="row">
                <div className="jumbotron justify-content-center card-member">
                    <center>

                        <div className="justify-content-center" >
                            <b className="justify-content-center">Title: {props.data.title ? props.data.title : 'This is the title'}</b><br />
                        </div>

                        <br />


                        <div className="justify-content-center">
                            {/*  style={{ background: `url(${bgshow3})`, backgroundSize: "cover" }} */}
                            <img
                                src={props.data.imagesrc}
                                alt={props.data.alt ? props.data.alt : 'This is the alt'}
                                className="rounded img-thumbnail"
                                style={{
                                    width: "20rem",
                                    height: "15rem",
                                    objectFit: "cover",
                                    backgroundSize: "cover"
                                  
                                }}
                            />

                        </div>

                        <br />

                        <div className="justify-content-center">
                            <p className="justify-content-center" style={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                            }}>
                                {props.data.description ? props.data.description : 'This is the description'}
                            </p>
                        </div>

                    </center>
                </div>

            </div>

        </div>
    );
}



export default CarouselItem;

