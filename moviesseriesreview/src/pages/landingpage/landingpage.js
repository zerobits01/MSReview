import React from 'react';
import './landingpage.css';
import SimpleIcons from 'react-simple-line-icons';
import bgshow1 from './img/bg-showcase-1.jpg';
import bgshow2 from './img/bg-showcase-2.jpg';
import bgshow3 from './img/bg-showcase-3.jpg';
import { Icon} from '@iconify/react';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlFaceBook from '@iconify-icons/bx/bxl-facebook';
import Testimonial from '../../components/testimonials/testimonial';

class LandingPage extends React.Component {
    
    render() {
        let data = [
            {
                name: "Paolo M.",
                comment: "Site Design is really good and its easy to use the site",
                imagesrc: "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg"
            },
            {
                name: "Sara J.",
                comment: "Site Design is really good and its easy to use the site",
                imagesrc:"https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg"
            },
            {
                name: "Amanda K.",
                comment: "Its terrible its not good i hate it",
                imagesrc: "https://cdn4.vectorstock.com/i/1000x1000/35/68/person-icon-male-user-profile-avatar-vector-18833568.jpg"
            }
        ]
        return (
            <div className="body bg-black" style={{color: 'burlywood'}}>
                <header className="masthead text-center">
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="mb-5">find the best movies and write your critics about them!</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <button type="button" className="btn btn-block btn-lg btn-burly">Get started!</button> 
                        </div>
                    </div>
                    </div>
                </header>


                <div className="text-center bg-000">
                <hr 
                style={{
                    margin: 0,  
                    height: "1",
                    backgroundColor: "burlywood"
                }}
                />

                </div>
                

                <section className="features-icons text-center bg-000">
                    <div className="container bg-000" >
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <i className="icon-user m-auto txt-color"></i>
                            </div>
                            <h3>Follow other critics</h3>
                            <p className="lead mb-0">you can follow other critics and be in contact with them</p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <i className="icon-film m-auto txt-color" ></i>
                            </div>
                            <h3>Find the Best movies</h3>
                            <p className="lead mb-0">Based on other people opinion and their rating and critics</p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <i className="icon-settings m-auto txt-color"></i>
                            </div>
                            <h3>Fully Responsive</h3>
                            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>


                <div className="text-center bg-000">
                <br />
                <hr 
                style={{
                    margin: 0,  
                    height: "1",
                    backgroundColor: "burlywood"
                }}
                />

                </div>

                <section className="showcase bg-000">

                    <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6 my-auto mx-auto order-lg-2 showcase-img" style={{background: `url(${bgshow1})`, backgroundSize: "cover"}}></div>
                        <div className="col-lg-6 my-auto mx-auto order-lg-1 showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                        </div>
                    </div>
                  
                    <hr 
                    style={{
                        margin: 0,  
                        height: "1",
                        backgroundColor: "burlywood"
                    }}
                    />

                    <div className="row no-gutters">
                        <div className="col-lg-6 my-auto mx-auto showcase-img" style={{background: `url(${bgshow2})`, backgroundSize: "cover"}}></div>
                        <div className="col-lg-6 my-auto mx-auto showcase-text">
                        <h2>Like, Share and Follow</h2>
                        <p className="lead mb-0">You can like and comment the critics, also you can share the critics. This is really important to comment on critics because some people may write biased</p>
                        </div>
                    </div>
    
                    <hr 
                    style={{
                        margin: 0,  
                        height: "1",
                        backgroundColor: "burlywood"
                    }}
                    />

                    <div className="row no-gutters">
                        <div className="col-lg-6 my-auto mx-auto order-lg-2 showcase-img" style={{background: `url(${bgshow3})`, backgroundSize: "cover"}}></div>
                        <div className="col-lg-6 my-auto mx-auto order-lg-1 showcase-text">
                        <h2>Find The Best Movies &amp; Series</h2>
                        <p className="lead mb-0">In this site you can find the best movies and series based on other people rating. After watching the movie or series you can read the critics and comment on them and you will read other people idea about the movie</p>
                        </div>
                    </div>
                    <br />
                    <hr 
                    style={{
                        margin: 0,  
                        height: "1",
                        backgroundColor: "burlywood"
                    }}
                    />
                    
                    </div>
                </section>


                
                <div className="text-center bg-000">
                    <Testimonial data={data}/>
                    <br />
                    <hr 
                        style={{
                            margin: 0,  
                            height: "1",
                            backgroundColor: "burlywood"
                        }}
                    />
                </div>
                

                <section className="call-to-action text-center">
                    <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                            <div className="col-12 col-md-9 mb-2 mb-md-0">
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                            </div>
                            <div className="col-12 col-md-3">
                                <button type="submit" className="btn btn-block btn-lg" style={{color: "burlywood", borderColor: 'burlywood'}}>Sign up!</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>


                <footer className="footer bg-000">
                    <div className="container" >
                    <div className="row" >
                        <div className="col-lg-6 h-100 text-center text-lg-left my-auto" >
                        <ul className="list-inline mb-2" >
                            <li className="list-inline-item">
                            <a href="#" className="txt-color">About</a>
                            </li>
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                            <a href="#" className="txt-color">Contact</a>
                            </li>
                            
                            <li className="list-inline-item">&sdot;</li>
                            <li className="list-inline-item">
                            <a href="#" className="txt-color">Privacy Policy</a>
                            </li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-right my-auto" >
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mr-3">
                            <a href="#">
                            <Icon icon={bxlTwitter} className="logo-small"/>
                            </a>
                            </li>
                            <li className="list-inline-item logo-small">
                            <a href="#">
                                <Icon icon={bxlInstagram} className="logo-small"/>
                            </a>
                            </li>
                            <li className="list-inline-item logo-small">
                            <a href="#">
                                <Icon icon={bxlFaceBook} className="logo-small"/>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>

            </div>
        );
    }
}


export default LandingPage;