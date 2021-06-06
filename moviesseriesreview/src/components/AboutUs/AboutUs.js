import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './AboutUs.css';
import {Image} from 'react-bootstrap';

var icons = require('glyphicons');

class AboutUs extends React.Component {

    render() {
        return (
            <div className="bg-black">
                <div className="row justify-content-center">
    
                    <div className="col-sm-4 justify-content-center">
                        <div className="text-center" style={{"margin-right": "20%"}}>
                            <h3>Mohammad Moradi</h3><br />
                            <p>
                                something else here
                            </p>
                        </div>
                        <div>
                            <Image src={require("./bandmember.jpg")} className="person" alt="Random Name" roundedCircle/>
                        </div>

                    </div>

    
                    <div className="col-sm-4 justify-content-center">
                        <div className="text-center" style={{"margin-right": "20%"}}>
                            <h3>Shima TaghiZadeh</h3><br />
                            <p>
                                something else here
                            </p>
                        </div>
                        <div>
                            <Image src={require("./bandmember.jpg")} className="person" alt="Random Name" roundedCircle/>
                        </div>
                    </div>

                </div>

                <hr style={{
                    backgroundColor: 'burlywood',
                    height: 1
                }}/>

                <div className="container-fluid">
                    <h2 className="text-center">CONTACT</h2>
                    <div className="row">
                        <div className="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span>{icons.map}</span> Isfahan, Iran</p>
                        <p><span>{icons.mobilePhone}</span> +98 9398116641</p>
                        <p><span>{icons.mail}</span>zerobits0101@gmail.com</p>
                        </div>
                        <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div className="col-sm-6 form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
                            </div>
                        </div>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                        <div className="row">
                            <div className="col-sm-12 form-group">
                            <button className="btn btn-burly pull-right" type="submit">Send</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}



export default AboutUs;