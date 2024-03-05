import { useRef } from 'react';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Banner from "../Banner/Banner"
import Title from "../Title/Title"
import emailjs from '@emailjs/browser';

import bannerMobile from '../../assets/img/cover_mobile.jpg'

import './career.scss'
import Input from '../Input/Input';
const Career = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_va96in8', 'template_h3hkf5f', form.current, {
                publicKey: 'n1EN5ySRdSSRcAn6v',
            })
            .then(
                () => {
                    form.current.reset();
                    toast.success('Message sent successfully', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        pauseOnFocusLoss: true,
                        transition: Bounce,
                    });
                },
                // eslint-disable-next-line no-unused-vars
                (error) => {
                    toast.error('Something went wrong, Please check again', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    error.text
                },
            );
    };

    return (
        <section className="contact">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <Banner />
                        </div>
                        <div className="text-center">
                            <Title titleOuter={'Career at'} titleInner={'Khoshroz'} />
                        </div>
                        <div className="contact__form d-flex align-content-stretch my-4">
                            <div className="contact__form--left">
                                <img src={bannerMobile} alt="" className="img-fluid h-100 object-cover" />
                            </div>
                            <div className="contact__form--right  p-4">
                                <form ref={form} onSubmit={sendEmail} method="post">
                                    <Input label={'Name'} placeholder={'Your Full Name'} name={'user_name'} type={'text'} />
                                    <Input label={'Email'} placeholder={'yourmail@mail.com'} name={'from_name'} type={'email'} />
                                    <Input label={'Subject'} placeholder={'Subject'} name={'subject'} type={'text'} />
                                    <Input label={'Resume URL'} placeholder={'your resume URL..'} pattern={'https://.*'} name={'url'} type={'url'} />

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control" name="message" placeholder="Write your message here..." required />
                                    </div>
                                    <button type="submit" value="Send" className="primary__btn mt-4">Send Message </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Career;