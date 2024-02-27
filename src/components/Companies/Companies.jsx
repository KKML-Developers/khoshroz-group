import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import './companies.scss';
import HelmetComponent from '../HelmetComponent';
import Brands from '../Brands/Brands';
const Companies = () => {

    const message = ["The expansion and diversification have indeed opened new opportunities for the Khoshroz Group, with the management focusing on providing a range of benevolent services beyond mere profit-making. The rising Khoshroz Group adheres to the principle of conducting business operations for the betterment of society. Through years of dedication and hard work, the Khoshroz Group has evolved into a multi-faceted entity, covering essential sectors such as food, clothing, housing, education, and healthcare.", "The Khoshroz Group has been instrumental in enhancing the lifestyle of the Bangladeshi people. Each subsidiary of the Khoshroz Group plays a significant role in the economic development of the country, by establishing industries, plants, and engaging in various activities across multiple sectors.", "The Khoshroz Group is dedicated to shaping the future of the nation. The various concerns under the Khoshroz Group are as follows:"]

    return (
        <section className="companies">
            <HelmetComponent
                title="Companies | Khoshroz Group"
                description="The emergence of Magura Group as a Conglomerate is the result of combined efforts for over the past two and a half decade. The Group is working with the vision to ensure welfare for the people through better social services. To this aim, the Group is being thoroughly involved in multi dimensional activities, related to satisfying the basic needs of human expectation."
                keywords="Khoshroz, Khoshroz Group, Publication, Bangladesh Business, Business Tycoon"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="The emergence of Magura Group as a Conglomerate is the result of combined efforts for over the past two and a half decade. The Group is working with the vision to ensure welfare for the people through better social services. To this aim, the Group is being thoroughly involved in multi dimensional activities, related to satisfying the basic needs of human expectation."
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="The emergence of Magura Group as a Conglomerate is the result of combined efforts for over the past two and a half decade. The Group is working with the vision to ensure welfare for the people through better social services. To this aim, the Group is being thoroughly involved in multi dimensional activities, related to satisfying the basic needs of human expectation."
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <div className="companies__content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="mb-4">
                                <Banner />
                            </div>
                            <Title titleOuter={'Our'} titleInner={'Companies'} />
                            <div className="companies__message">
                                {message.map((item) => (
                                    <p key={Math.random()}>{item}</p>
                                ))}
                            </div>
                        </div>
                        <Brands />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies