import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonial.css';

const TestimonialItem = (props) => {
    return (
        <div className="col-lg-4">
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img className="img-fluid rounded-circle mb-3" src={props.imagesrc} alt="" />
                <h5>{props.name}</h5>
                <p className="font-weight-light mb-0">{props.comment}</p>
            </div>
        </div>

    );

}

export default TestimonialItem;