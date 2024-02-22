import "./aboutPage.scss";

import bannerImage from '../../assets/img/about_bg.jpg'
const AboutPage = () => {
    const aboutBadge = "THE BASHUNDHARA GROUP HAS STARTED OPERATION AS A REAL ESTATE VENTURE KNOWN AS \"BASHUNDHARA\" UNDER THE AEGIS OF THE GROUP'S FIRST CONCERN - THE EAST-WEST PROPERTY DEVELOPMENT (PVT) LTD IN 1987.";
    const aboutDesc = [
        "While diversifying and expanding its capacity, has no doubt been lucrative moves for the Magura Group, the management has much more in mind.", "Magura Group has always held on to the philosophy of doing business that will benefit people. It has been more than 25 years of exploration and hardworking, the Group has become a Multilateral Enterprise with its business covering different aspects including food, cloth, housing, education and medicare.", "The products and services of Magura Group are extremely well-received owing to their superb quality and reasonable prices.", "The Group is very much in tune with current trends. Bangladesh Advanced Technologies Ltd. is an example of how the Group has recognized the immense importance of technology in today's world.", "There is therefore a constant effort is rendered to improve the quality of life of people. On a broader scale, each company of Magura Group in its own way contributes to the development of the country. By setting up industries and export oriented businesses, the Group significantly contributes to the economy of Bangladesh.", "In the 21st century, we pledge to work to give greater vitality to our social commitment to the country and its people.", "Magura Group is poised to face the future with a distinct sense of optimism."
    ]
    return (
        <>
            <section className="aboutPage">
                <div className="aboutPage__banner">
                    <img src={bannerImage} alt="image" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="aboutPage__title">
                                Corporate <span>Profile</span>
                            </h2>
                            <div className="aboutPage__message">
                                <p>{aboutBadge}</p>
                            </div>
                            <div className="aboutPage__desc">
                                {aboutDesc.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutPage