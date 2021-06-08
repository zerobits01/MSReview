import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonial.css';

class TestimonialItem extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid rounded-circle mb-3" src={this.props.imagesrc} alt="" />
                    <h5>{this.props.name}</h5>
                    <p className="font-weight-light mb-0">{this.props.comment}</p>
                </div>
            </div>

        );
    }
}



export default TestimonialItem;