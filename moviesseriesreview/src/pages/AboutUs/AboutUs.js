import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './AboutUs.css';
import { Icon } from '@iconify/react';
import globeIcon from '@iconify-icons/simple-line-icons/globe';
import bxMapPin from '@iconify-icons/bx/bx-map-pin';
import phoneVoiceFilled from '@iconify-icons/carbon/phone-voice-filled';
import bxMailSend from '@iconify-icons/bx/bx-mail-send';
import CardMember from '../../components/member/member';
import { URLS } from '../../global/global-vars';
const axios = require('axios');


const AboutUs = () => {

    const [contactus, contactusDispatcher] = useState({});

    let data = [
        {
            firstname: "mohamad",
            lastname: "moradi",
            bio: "something",
            // imagesrc: "data:image/png;base64,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"
            imagesrc: "data:image/png;base64,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"
        },
        {
            firstname: "shima",
            lastname: "taghizadeh",
            bio: "something",
            // imagesrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUEhEWFRIRGBUYDxgSEhgYGRISGBUSGBgZGhgYGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs2NDE0MTE0PTQ0NDU0NDQ6NDQ0NDU0NDQ0MTQ2NDQ0NDQ0PTQ0NDQ0NDQ0MTQ0NDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIHAwUGCAT/xABIEAACAQIDAwgFCQUECwAAAAAAAQIDEQQSIQUGMQcTQVFhcYGRFCIykqFCUmJyk6KxwdEWVIKywiNzdPAVJCUzNUNTZLPD4f/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAnEQEBAAIBAwQCAgMBAAAAAAAAAQIRAwQhMRIiQVETMmFxFELRBf/aAAwDAQACEQMRAD8A3MYthyKkBEjIhQAAAAEAXKCAUAAADDOuteaAzMGytkTXQ0BkkUlygAAAAIAuUEAoAAAEAoJcAEigACFAAEZE7gUoAAAwlNJNtpJK7b0SQGFerGEZSnKMYxi5SlJqKilq229EjUu9nK8ouVPAxjKzs6808vfCHT3y8mea5S9+ZY2pKhRm1hITtppz8k/al9BP2V4vW1vAxWpW1rjh81220t5sbiG3WxeIlf5OeUIeEI2ivBHVwm4yUk/WTun03MWrdIIayR3M96Ma6PMvF1+avfLmkuy2Zetl+je3YdRTqSjLNGUoy602n5owANR6jYu/u0MK1lxM5xT1hWvWi11Xl60V9WSNxbl8ouHx7jSkuZxNtKbd41Lcebn0vpyuz48Umz51M6c3FqUW1JNSi02mpLVNNcGmTKplhK+wAa75MN+HjaboV3/rVON09Fz9NaZ7fPWmZdqa6UthlmNmlKAEAAAhQRgUgKBLAoAAhQABAAKAJcoIANYcs29DoUI4SnK1SvFuq1xjh+DX8Tuu6Mus2XVqKMZSk0opNyb4JJXbZ8wbx7SeNxeIxU5WjOb5uLdrUo3jTjxutEr6au9iLVsJuvPg5sRKLk3FWXDv7bdGljhKOgAASAAAAAP2bK2jUw1elXpSy1Kc1OL6H1xfWmm011Nn1LsHa0MXhqOIp+zUgpW0bjLhKLt0xaafcfJ5t7kM2474jBylpb0iitdHpGpH+R2+sy0rLkx7bblAIWYqAYtgZAiKBCgAAQAUgKBCkKAAAAEJxA8hynbW9H2dWtJKVVrDxv0qd3NLtyRn42PnGtXlLi3a+i6v1NrcvG0L1MHh09IwnXmu2TUIP7s/M1IVrbjnYABVqAAAZKKte+vUYmag2m0nZWu+hX4BDE7HHbHqUqGGrSi8leEpRdtE4zlHK+1pKS61LsZz7tbAqY2vGnBWimpVZ9FOnfVvt6Eul9l2t6YzYtCrhvRpQXMqEYQS4xUVaMovokrcSmfJMbImY2vnM7rc7avomPwte9oxrRVR8FzU/VnfujJvwObendatgZ2ms1KUrUqqXqy6csvmysuHY7XPPMvLL3iLO2n2IQ6Xc/aHpGz8HVbvKWHhn+vFZZ/eizueJo5UvcySFgBQAAAAAEuAKAABCgACMIAUAD5v5WsZzm18SuinCnRj3KCk/vSkeMO33rruptDHTbvmxta31VOSivJJHNu7uriMaqkqPN5YSUZOcstm1daJNsztk7104ztHQg2NR5LqkY5q2JircY0YTrSfYnJx18Dz+3cHTw8nQpYSvGbSzVMTKGe0nplhH1YJ29p3dn0cSJlL4Wss8vMg9dguTzHVHrThTj11Jx4d0Mz+B63ZfJhShZ16zqSvwjHLBcO27ffp2EXkxnySWtaYDZsqic3KMKMXapVnfLF8cqS1lO3CMbvuWp6ejurOpTdSpGeFwNKLnecc1eovlTcF8p8NdIqyV9W9qYHYOHpOEo04ucVaEp2k4LqgvZprsgkdnJXunqno763Rleb6WnH9vD7tbao06ahgtm46VLi55acVUl85zctX46cLLgenwm1VJqM6VejJ6RjVikpPqjOLlFvszXfUTGbew1GpGlUrwhN2tF39VPhmaVo+NjsZxTTTSaas09U0ZZXfwvjP5eW5SsNn2bXdruEoVF2Wmk37spGiz6D3yhfZ2NX/AG0n7qv+R8/Na6G/Dfapl5b+5FcZn2Zk/wCliqlPwllqX86j8mbDNRcguJvDaFPoU6VRd8lOMv5Im3Tonhx5TVqgAlCFBGBSBFAAAACFAAxbKkAKABCSdk31K5kcOKdoTfVCT+DA+RsTUzTqS+dOUvNt/mbT5HP9zi/76H8rNTrgu42jyN4hWxsOm9Oa7U80X5WXmYcv6114eY2aaJ27UlPF4qUvaeJqJ36ozcUvBJLwN7HlNs7jUcRiHW5ycM7TqwiotTfS4t+y308es5uPKY3uvnjbOzsdz6kp4DCOd83NZddW4xlKMH7qidvN8PrL8SYehGEIQhFRhCChBLgoxVkvIVOMV9K/kVt3drztHIEAQs0NtipKeJxMp6yeInmv2Tat4JW8DcW6lWUsDhJTbcnQirvVtLRN+CR1m1NxaFfESrOpOCnLNUhFK0pdLUuMW+njqenpU4wjGMUlGMVGKXBRSska55SyaY4Y2Wup3wdtn47/AAs15xaPno39v5Uy7Nxj66Sj704x/M0Ca8P6mfltTkGqWxWMj87DQl7s7f1m7zQnIZP/AGlWXXgZvyqU/wBTfZ0Tw5c/KgEJUCgAQoAAEAFMGxcySAJFIUAAABwYxXp1P7uX4M5zjqRvGS64teaA+QYJW462/I9Xya7SVDaFNSdo1YyoPqzSs4fejFeJ5SUcrafFOz8C0qjjKMotqUZKUWuKkndNeJnZuadU7PpsHV7t7XjjMLSrRteUbVEvk1I6Sj56rsaO0OGzV03l2HHxl3L4s5DGSV1fR+RCWRUS6va6vbgCfCAANkDwvKxtJQwcaKtmrVVddVOm1Jv3si8WabPR777c9MxlSUXelD+yo9ThFu8v4nd9zXUecO3DH046Y27u2xuQ7/iVX/AVP/JSN+mieQqF8diJdWCa96pD9DexrPDnz8hQQlRQAAAI2BQY5gBkAABLFAEKRkXaBSgAfJO26OTFYqHzMTVh7s5L8j8J6TlDwvNbVx8evEOp9qlU/rPNlK6cfD124G9HoddwqN+j1WlU4+pLhGol8H2dyRu+E00mmmmrprVNPg0+lHzGe53H33nhnDD1lKdByUYv5VG7tpfjG74dHR1GPJx+rvGmOWu1bjnG6a61Y85iacoztJu64N3d11pnooST1TTE6akrSSa7Vc58bp08XJ6K8zBScllu5N6W43PRYWm4wSbu+l8bszp0ox9mMV3JIzGV2ty8vr7SBr7lL3qVKnLCUZf2s42rtf8ALptex2SkvKL7Ucu/G/Xoznh6CvXyrNNr1aSkk1lT9qVmuxX6eBqGrUcpSlKTlKTcpSbbbk3dtt8W2a8XH/tXLnl8RxgqD7DoUbZ5BKV6u0J24U6MfedR/wBKN0mrOQfDWwmLqfOxSp+EIRl/7GbTLzw5sv2qgAlVCgjApLBFAAAACFAAhQAAAhQQDQXLbgcm0YVLaVcNF365wcoy+7kNcm8+XHZbqYXD14xblSruErdEKq4+9CC/iNMQoqMc0k79Ct9ZcGrN6X8usrfLfC+1+NoyhJpqS4p3XetTkr1c0r8Ohd1+nrMsPhKlTSnSqTfC0Iyn/Kiq76MVBSUZxbi3FSuuDurl/tF82X+fA49jSk8NhnKMoyeGp5oyTjKMskbpp8GmftOGt9PzZqr+TFf57x6PKXtzv2LRH6QNp00Nyh2/0nikuCdNLwpQPNnqOUDC1FtDFzdOooOoss3Gai0oxV1K1mtDy524+IwvlADkoUnOUYRV5TmoRXXKTsl5tEofRnJPgua2ThbqzqOdZ9qnN5X7qiezPybLwUaFCjRj7NOjClHuhFR/I/WaOaqCXMeIQyKRIoEBQABLACkBQIikAFAAEIwzy+/u1JYfBycJZZzmqUJLjHMm2125U9e0i3U2tx4XPKYz5dZv5vFh3QrYV3qTnBxeW2WnNNOMnJ/KjJJ2XVrY08tlU73lml42XglY/e3chzZZ5V9Dw9Hxcc1Zu/y4KeDprhCPfZN+bNubrzTweGtbSkoadcLxf4GqjYO4OLzYedPphUbS+hPVfezmWW7EdVxyYe2eK9SADNwAAAM0vtKlCpVqyyRearOS9VcHJtG19vYzmcNWnfVQcYfXl6sfi/gamRfD7dnSccstsfhnsmk+EZR7m/zudluds2jS2jhqlaqo0YTz+un7cU8l2tElKzu+GU4wazPKNuTpOLOa1r+n0ZCaaTTTTV010mVzXvJXtOUoV6EpNxp5JUr62jK6cV9FNJpdGY2EdON9U2+f5uK8Wdxvwi1MwQsyUAAAAABABQAAAAEKRhADXXKzW9XCQ65zn7qUf62bFNVcq9W+Kw8Pm4dy9+TX9BTkvtdnQTfPi8KADlfRB2m7u1PR68Zu+SSy1F9B9K7U7Pz6zqwFcsZlLK3RTmpJSi04tJxa1TT4NMyNZbD3kqYe0Ws9K/st2cbvVxl0d3DuPW0N8MLJLNOcH1SjJ/FJozuNjzM+nzxvabj0AOirb24SK0qSk+qMJ/i0l8TzO2t7qlWLhSTpwatKV/Xkuq60iu7XtExtRhwZ5Xxr+1302wqtRUoO8ISvNrhKpw07Iq672+o8uAXk09PjwmGPpgAgyV3sOTCvlxzj0Sw0l4qUWvhmNvmj9xq2TaOF6pSnF9zpzS+Njd50cV9rwf8A0sdc2/uMgAavPQFMX2AUE/EyAAAACC4FJcjZUgBQAMTUXKXQn6a6jhPIqEIRnZ5dHJvXo1k+Jt06PaWtRrosl8P/AKY811i6uj5PRyerXw0ac3o75rnPk89zS+vkzteVjY+0N1sPVu1Dm5P5ULQ17Y+y/I/Nt7dj0fY9RKSnOGIWKzZcvG0Hpd6qDa8DHD3bexesx9s+bZGuwIu4IdgAYSqIFumbBgqhyQjmdl4doRuIVqx+iKUEm9ZPVcOHn8bH55zbd2CXblo0XKNRpO0Kam+yLnCH4zXkcJ7nk92L6Rhdo3eXnYrDwbV8rjFyzW6dZx90/ds/c6hT1nmqyXHN6sb/AFF+bZOU9Mlcn+XjM8sb8f8AHkN1aFSWMw0qcJSy4mDm4ptRhmWdt8F6tzex57AwjCUFGMYxUkkopRST00SPQmvDdyvK67l/JnLrXZkAQ3cQUAAQoAAlgBTDiLXMwIikFwKAAIdBi5XnLva8tDvzztZ3lJ/Sf4nP1HiN+Cd6xSvZdeh221cGq2HrUuidGcPei0dZho3nH6y/E9A0R087Vbmy1lNPmmMnp0O2pnzj7D928WG5rGYqHViJ2+rKTlH7skdcVse9jnuSz5WU2yAyppOSvwvr0BNqRjf/ACkfq5xU9Fxtra/Hovr8P01xnUjFOML3tq+3S/Tr+R+YK+WbqvsMJSbBGm+HHgl1voKrbreHJ1hOb2bh+ueaq/45Nx+7lOfEq05L6T/E7bZuGVKjRprhCjGmu6MUvyOu2gv7SXg/gjTmx1jHg4Zerkyv3twQdmn1NM9EjzbPR03dLuRHT3yjqJ4ZFBDqcygAAAS4FBjr2FAoAAAACFIyJWApw+jQ+bHyRzAiyXyS2OGNCKd1GKfXZHMAJJPCbXV4nYGFqTlOphcNOcvalKnCcnZWV21d6JHF+zGB/csJ9lS/Q7gDUTM8p810/wCy+B/csJ9lS/Qfsvgf3LCfZUv0O4RRqfSfyZfddN+y+B/csJ9lS/Qfsvgf3LCfZUv0O5A1D8mX3XTfsvgf3LCfZUv0LHdnBJprB4VNO6apU001wa0O4A1D8mX3Q4p0Yt3cYt9qTOVhCzakunB6ND5kfJHMlYoEknhNtqgAlCApg2BXIqQSKAAAAAAAABP1DAAFAAAACBAAGUAAAAAAAiH6gAUgAFAAGMuAiABWUAAAAP/Z"
            imagesrc: "https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
        }
    ]

    const contactusButton = (event) => {
        event.preventDefault();

        console.log(document.getElementById('contact-name').value);
        console.log(document.getElementById('contact-email').value);
        console.log(document.getElementById('contact-comments').value);
        let comment = {
            'name': document.getElementById('contact-name').value,
            'email': document.getElementById('contact-email').value,
            'comment': document.getElementById('contact-comments').value
        }
        axios.post(URLS.contacus_url, comment)
            .then((response) => {
                console.log(response);                
                document.getElementById('contact-name').value = '';
                document.getElementById('contact-email').value = '';
                document.getElementById('contact-comments').value = '';
                alert("we received your message");
            
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className="bg-black bg-div">

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

            <div className="container-fluid bg-div">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="row  justify-content-center">
                            <span>
                                <Icon icon={globeIcon} className="logo" />
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
            }} />

            <br />
            <br />

            <div className="row justify-content-center no-gutter bg-div">

                {/* {data.map((item,index)=>{
                    return (
                        <CardMember firstname={item.firstname} lastname={item.lastname} bio={item.bio} imagesrc={item.imagesrc}/>
                    );

                })} */}

                    <CardMember firstname={data[0].firstname} lastname={data[0].lastname} bio={data[0].bio} imagesrc={data[0].imagesrc} />

                <div className="col-sm-3"></div>
                    <CardMember firstname={data[1].firstname} lastname={data[1].lastname} bio={data[1].bio} imagesrc={data[1].imagesrc} />



            </div>
            <hr style={{
                backgroundColor: 'burlywood',
                height: 1
            }} />

            <div className="container-fluid bg-div">
                <h2 className="text-center">CONTACT</h2>
                <br />
                <div className="row">

                    <div className="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><Icon icon={bxMapPin} className="logo-small" /> Isfahan, Iran</p>
                        <p><Icon icon={phoneVoiceFilled} className="logo-small" /> +98 9398116641</p>
                        <p><Icon icon={bxMailSend} className="logo-small" /> zerobits0101@gmail.com</p>
                    </div>
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="contact-name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="contact-email" name="email" placeholder="Email" type="email" required />
                            </div>
                        </div>
                        <textarea className="form-control" id="contact-comments" name="comments" placeholder="Comment" rows="5"></textarea>
                        <div className="row">
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6 form-group">
                                <button className="btn btn-block btn-lg btn-burly pull-right" type="submit"
                                    onClick={contactusButton}>Send</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default AboutUs;


/*
https://iconify.design/icon-sets/simple-line-icons/globe.html
// npm install --save-dev @iconify/react @iconify-icons/simple-line-icons
import { Icon, InlineIcon } from '@iconify/react';
import globeIcon from '@iconify-icons/simple-line-icons/globe';

*/