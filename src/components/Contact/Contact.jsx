import Banner from "../Banner/Banner"
import Title from "../Title/Title"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import bannerMobile from '../../assets/img/cover_mobile.jpg'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_va96in8', 'template_h3hkf5f', form.current, {
                publicKey: 'n1EN5ySRdSSRcAn6v',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <Banner />
                        </div>
                        <div className="contact__form d-flex align-items-stretch">
                            <div className="contact__form--left h-100 ">
                                <img src={bannerMobile} alt="" className="img-fluid h-100 object-cover" />
                            </div>
                            <div className="contact__form--right">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" type="text" name="user_name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input className="form-control" type="text" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" name="user_email" placeholder="example@yourmail.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" name="message" placeholder="Write your message here..." required />
                                    </div>
                                    <button type="submit" value="Send" className="primary__btn" >Send Message </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact