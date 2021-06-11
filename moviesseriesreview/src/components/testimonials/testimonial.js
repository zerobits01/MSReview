import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonial.css';
import TestimonialItem from './testimonialitem';


class Testimonial extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="testimonials text-center bg-000">
                <div className="container">
                    <h2 className="mb-5">Critics Comments</h2>
                    <div className="row">
                        {this.props.data.map((item, index) => {
                            return <TestimonialItem key={index.toString()} name={item.name} imagesrc={item.imagesrc} comment={item.comment} />

                        })}
                    </div>
                </div>
            </section>
        );
    }
}


export default Testimonial;