import React from 'react';
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './member.css'

class CardMember extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="jumbotron col-sm-2 justify-content-center card-member">
                <center>

                    <div className="justify-content-center" >
                        <h4 className="justify-content-center">First Name: {this.props.firstname}</h4><br />
                        <h4 className="justify-content-center">Last Name: {this.props.lastname}</h4><br />
                        <p className="text-center">
                            {this.props.bio}
                        </p>
                    </div>
                    <div className="justify-content-center">
                        <Image src={this.props.imagesrc} className="person" alt="Random Name" roundedCircle/>
                    </div>
                </center>
            </div>
        );
    }
}


export default CardMember;