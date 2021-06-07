import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './AboutUs.css';
import { Icon} from '@iconify/react';
import globeIcon from '@iconify-icons/simple-line-icons/globe';
import bxMapPin from '@iconify-icons/bx/bx-map-pin';
import phoneVoiceFilled from '@iconify-icons/carbon/phone-voice-filled';
import bxMailSend from '@iconify-icons/bx/bx-mail-send';
import CardMember from '../../components/member/member';



class AboutUs extends React.Component {

    render() {
        let data = [
            {
                firstname: "mohammad",
                lastname: "moradi",
                bio: "something",
                imagesrc: "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg"
            },
            {
                firstname: "shima",
                lastname: "tahizadeh",
                bio: "something",
                imagesrc: "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg"
            }
        ]
        return (
            <div className="bg-black">
                
                {/* <div className="text-center">
                    <br />
                    <hr 
                    style={{
                        margin: 0,  
                        height: "1",
                        backgroundColor: "burlywood"
                    }}
                    />
                </div> */}

                <br />

                <div class="container-fluid ">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                            <div className="row  justify-content-center">
                                <span>
                                    <Icon icon={globeIcon} className="logo"/>
                                </span>
                                <div className="col-sm-1"></div>
                                <span>
                                <br />
                                <br />
                                <h2>Our Values</h2>
                                    <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
                                    <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                
                <br />
                
                <hr style={{
                    backgroundColor: 'burlywood',
                    height: 1
                }}/>
                
                <br />
                <br />
                <div className="row justify-content-center">
                    
                    {/* {data.map((item,index)=>{
                        return (
                            <CardMember firstname={item.firstname} lastname={item.lastname} bio={item.bio} imagesrc={item.imagesrc}/>
                        );

                    })} */}

                    <CardMember firstname={data[0].firstname} lastname={data[0].lastname} bio={data[0].bio} imagesrc={data[0].imagesrc}/>
                    <div className="col-sm-3"></div>
                    <CardMember firstname={data[1].firstname} lastname={data[1].lastname} bio={data[1].bio} imagesrc={data[1].imagesrc}/>
                    


                </div>

                <hr style={{
                    backgroundColor: 'burlywood',
                    height: 1
                }}/>

                <div className="container-fluid">
                    <h2 className="text-center">CONTACT</h2>
                    <br />
                    <div className="row">
                        <div className="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><Icon icon={bxMapPin} className="logo-small"/> Isfahan, Iran</p>
                        <p><Icon icon={phoneVoiceFilled} className="logo-small"/> +98 9398116641</p>
                        <p><Icon icon={bxMailSend} className="logo-small"/> zerobits0101@gmail.com</p>
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
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
                        <div className="row">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6 form-group">
                                <button className="btn btn-block btn-lg btn-burly pull-right" type="submit">Send</button>
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


/*
https://iconify.design/icon-sets/simple-line-icons/globe.html
// npm install --save-dev @iconify/react @iconify-icons/simple-line-icons
import { Icon, InlineIcon } from '@iconify/react';
import globeIcon from '@iconify-icons/simple-line-icons/globe';

*/