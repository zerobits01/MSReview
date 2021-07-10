import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './member.css'

const CardMember = (props) => {
    return (
        <div className="jumbotron col-sm-3 justify-content-center card-member">
            <center>

                <div className="justify-content-center" >
                    <h4 className="justify-content-center">First Name: {props.firstname}</h4><br />
                    <h4 className="justify-content-center">Last Name: {props.lastname}</h4><br />
                    <p className="text-center">
                        {props.bio}
                    </p>
                </div>
                <div className="justify-content-center">
                    <Image src={props.imagesrc} className="person" alt="Random Name" roundedCircle />
                </div>
            </center>
        </div>
    );
}



export default CardMember;