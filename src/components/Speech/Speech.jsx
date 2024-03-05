import Banner from "../Banner/Banner";
import HelmetComponent from "../HelmetComponent";
import Title from "../Title/Title";
import './speech.scss'
const Speech = () => {
    const description = ["The emergence of Magura Group as a Conglomerate is the result of combined efforts for over the past two and a half decade. The Group is working with the vision to ensure welfare for the people through better social services. To this aim, the Group is being thoroughly involved in multi dimensional activities, related to satisfying the basic needs of human expectation.", "Adaptability, versatility, reliability and capability are the ideals of Magura Group, which are being successfully followed in all our business units. Over the years, we have extended our business activities in different dimensions and have been able to emerge as a promoter of business houses and industrial enterprises with the support of highly capable professionals.", "Since inception we are contributing significantly to the national economy through effective utilization of indigenous resources for production and marketing of quality products at a competitive price and are thereby creating scope for employment.", "The members of Magura Group are dedicated to achieve their goals through all out efforts and excellent team spirit. I sincerely hope to join with our prospective friend in addition to existing ones, both domestic as well as overseas, to have closer cooperation for making a better tomorrow. We will be continuing our efforts to improve the performance and thereby enhance our contribution towards the socio-economic upliftment of Bangladesh."];
    return (
        <section className="speech">
            <HelmetComponent
                title="Chairman's Speech | Khoshroz Group"
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
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-4">
                            <Banner />
                        </div>
                        <div className="speech__title text-center">
                            <Title titleOuter={'Chairman\'s'} titleInner={'Speech'} />
                        </div>

                        <div className="speech__content">
                            <figure>
                                <img src="https://res.cloudinary.com/dfaw271y6/image/upload/v1708749510/Founder_sir1_kcly2d_efc727.jpg" alt="" />
                                <figcaption>
                                    <a href="https://mohiuddinahahmad.com/" target="/_blank">Mr. Mohiuddin Ahmed</a>
                                </figcaption>
                            </figure>
                            <div className="speech__content--description">
                                {description.map((item) => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speech;