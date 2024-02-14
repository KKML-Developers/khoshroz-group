import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-content">
                            <h4>Corporate Office</h4>
                            <ul className="contact">
                                <li>
                                    <p>
                                        <FaMapMarkerAlt /> <span>Eunoos Trade Center-Level 8,<br />52,53 Dilkusha, Dilkusha C/A, Dhaka-1000</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FaPhone /> <span>+88 02 47121760</span>
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
                        <div className="footer-content">
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
                        <div className="footer-content">
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
        </footer>
    );
};

export default Footer;