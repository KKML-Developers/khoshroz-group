import { FaEnvelope, FaFacebookSquare, FaLinkedinIn, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer__content">
                            <h4>Corporate Office</h4>
                            <ul className="footer__content--list">
                                <li>
                                    <FaMapMarkerAlt /> <span>Eunoos Trade Center-Level 8,<br />52,53 Dilkusha, Dilkusha C/A, Dhaka-1000</span>
                                </li>
                                <li>
                                    <FaPhone /> <span>+88 02 47121760</span>
                                </li>
                                <li>
                                    <FaEnvelope /> <span>ndcl.kkml@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer__content">
                            <h4>Factory Office</h4>
                            <ul className="contact">
                                <li>
                                    <p>
                                        <FaMapMarkerAlt /> <span>Krishnapur Bogiya, Magura Sadar, Magura</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaPhone /> <span>+88 01324-711333</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaEnvelope /> <span>ndcl.kkml@gmail.com</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer__content">
                            <h4>Register Office</h4>
                            <ul className="contact">
                                <li>
                                    <p>
                                        <FaMapMarkerAlt /> <span>16/17 p. K Roy Road, Banglabazar Dhaka-1100</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaPhone /> <span>+88 01324-711307</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaEnvelope /> <span>ndcl.kkml@gmail.com</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright-text">
                            Khoshroz Group © 2024 / All Rights Reserved.
                        </div>
                        <div className="col-md-6 social-links-wrap">
                            <ul className="social-links">
                                <li>
                                    <a target="/_blank" title="Facebook" href="https://www.facebook.com/KhoshrozCorporateOffice/"> <FaFacebookSquare />
                                    </a>
                                </li>
                                <li>
                                    <a target="/_blank" title="Linkedin" href="https://www.linkedin.com/company/khoshroz-kitab-mahal/"> <FaLinkedinIn />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;