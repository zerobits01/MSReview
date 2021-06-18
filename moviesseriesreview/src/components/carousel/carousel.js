import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from '../carousel-item/carousel-item';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const MyCarousel = (props) => {

    return (
        <div className="container-fluid" style={{ 
            color: 'white',
            background: "rgba(0,0,0,0.5)" 
            
            }}>
            <h1 >
                {props.data.title ? props.data.title : "Title"}
            </h1>

            <Carousel
                swipeable={true}
                draggable={true}
                // arrows={false} 
                renderButtonGroupOutside={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                additionalTransfrom={-10 * 2}
                focusOnSelect={true}
                // autoPlay={props.deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .2"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-2-rem"
            >
                {props.data.items.map((item, index) => {
                    return <CarouselItem data={item} />;

                })}
            </Carousel>
            <hr
                style={{
                    margin: 0,
                    height: "1",
                    backgroundColor: "burlywood"
                }}
            />
            <br />
        </div>
    );
}


export default MyCarousel;