import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import "./footer.scss";
import { Link } from "react-router-dom";

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
                                    <FaMapMarkerAlt /> <span>Eunoos Trade Center-Level 8, 52,53 Dilkusha, Dilkusha C/A, Dhaka-1000</span>
                                </li>
                                <li>
                                    <FaMobileAlt /> <a href="tel:+880247121760" target="/_top">+88 02 47121760</a>
                                </li>
                                <li>
                                    <FaEnvelope /> <a href="mailto:ndcl.kkml@gmail.com" target="/_top">ndcl.kkml@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer__content">
                            <h4>Factory Office</h4>
                            <ul className="footer__content--list">
                                <li>
                                    <FaMapMarkerAlt /> <span>Krishnapur Bogiya, Magura Sadar, Magura</span>
                                </li>
                                <li>
                                    <FaMobileAlt /> <a href="tel:+8801324711333" target="/_top">+88 01324-711333</a>
                                </li>
                                <li>
                                    <FaEnvelope /> <a href="mailto:ndcl.kkml@gmail.com" target="/_top">ndcl.kkml@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer__content">
                            <h4>Register Office</h4>
                            <ul className="footer__content--list">
                                <li>
                                    <FaMapMarkerAlt /> <span>16/17 p. K Roy Road, Banglabazar Dhaka-1100</span>
                                </li>
                                <li>
                                    <FaMobileAlt /> <a href="tel:+8801324711307" target="/_top">+88 01324-711307</a>
                                </li>
                                <li>
                                    <FaEnvelope /> <a href="mailto:ndcl.kkml@gmail.com" target="/_top">ndcl.kkml@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 copyright-text col-9">
                            <p className="m-0">Khoshroz Group &copy; 2024 / All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 social-links-wrap col-3">
                            <ul className="social-links">
                                <li>
                                    <Link to={'career'}>Career</Link>
                                </li>
                                <li>
                                    <Link to={'contact'}>Contact</Link>
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