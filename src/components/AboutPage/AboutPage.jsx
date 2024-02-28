import Banner from "../Banner/Banner";
import HelmetComponent from "../HelmetComponent";
import Title from "../Title/Title";
import "./aboutPage.scss";

const AboutPage = () => {
    const aboutBadge = "In the 21st century, we pledge to work to give greater vitality to our social commitment to the country and its people. Magura Group is poised to face the future with a distinct sense of optimism.";
    const aboutDesc = [
        "KKML While diversifying and expanding its capacity, has no doubt been lucrative moves for the Magura Group, the management has much more in mind.", "Magura Group has always held on to the philosophy of doing business that will benefit people. It has been more than 25 years of exploration and hardworking, the Group has become a Multilateral Enterprise with its business covering different aspects including food, cloth, housing, education and medicare.", "The products and services of Magura Group are extremely well-received owing to their superb quality and reasonable prices.", "The Group is very much in tune with current trends. Bangladesh Advanced Technologies Ltd. is an example of how the Group has recognized the immense importance of technology in today's world.", "There is therefore a constant effort is rendered to improve the quality of life of people. On a broader scale, each company of Magura Group in its own way contributes to the development of the country. By setting up industries and export oriented businesses, the Group significantly contributes to the economy of Bangladesh.", "In the 21st century, we pledge to work to give greater vitality to our social commitment to the country and its people.", "Magura Group is poised to face the future with a distinct sense of optimism."
    ]
    return (
        <>
            <HelmetComponent
                title="Company Profile | Khoshroz Group"
                description="Description of your page goes here"
                keywords="Khoshroz, Khoshroz Group, Publication, Bangladesh Business, Business Tycoon"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Description of your page goes here"
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Description of your page goes here"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <section className="aboutPage">

                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <Banner />

                            <div className="aboutPage__content mt-4">
                                <Title titleOuter={'Corporate'} titleInner={'Profile'} />
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
                </div>
            </section>

        </>
    )
}

export default AboutPage