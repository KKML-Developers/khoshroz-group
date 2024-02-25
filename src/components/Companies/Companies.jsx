import Banner from '../Banner/Banner';
import Title from '../Title/Title';
import './companies.scss';
const Companies = () => {
    const message = ["The expansion and diversification have indeed opened new opportunities for the Khoshroz Group, with the management focusing on providing a range of benevolent services beyond mere profit-making. The rising Khoshroz Group adheres to the principle of conducting business operations for the betterment of society. Through years of dedication and hard work, the Khoshroz Group has evolved into a multi-faceted entity, covering essential sectors such as food, clothing, housing, education, and healthcare.", "The Khoshroz Group has been instrumental in enhancing the lifestyle of the Bangladeshi people. Each subsidiary of the Khoshroz Group plays a significant role in the economic development of the country, by establishing industries, plants, and engaging in various activities across multiple sectors.", "The Khoshroz Group is dedicated to shaping the future of the nation. The various concerns under the Khoshroz Group are as follows:"]
    const companies = [
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/Khoshros_group_jsb3lt.png",
            "alt": "Khoshroz Group",
            "url": "https://www.khoshrozltd.com/",
            "text": "Khoshroz Group Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/KKML_sdoumt.png",
            "alt": "Khoshroz Kitab Mahal",
            "url": "https://www.khoshrozltd.com/",
            "text": "Khoshroz Kitab Mahal Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/NDCL_euianh.png",
            "alt": "National Development Company Limited",
            "url": "https://www.ndcautobrick.com/",
            "text": "National Development Company Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/JMPL_sbaoch.png",
            "alt": "Jatiya Mudran",
            "url": "https://www.jatiyamudran.com/",
            "text": "Jatiya Mudran Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706094599/icons/fycwtgnwwvvhe2hbxfc7.png",
            "alt": "Magura Agriculture Park Limited",
            "url": "https://maguraagriculture.com/",
            "text": "Magura Agriculture Park Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/e-stylze_kqda99.png",
            "alt": "E-Stylze fashion e-commerce",
            "url": "https://www.estylzefashion.com/",
            "text": "E-stylze Fashion Limited"
        },
        {
            "logo": "https://res.cloudinary.com/dfaw271y6/image/upload/v1706007093/icons/DIL_vf8tcz.png",
            "alt": "Dream International Limited",
            "url": "https://www.dreaminternationallimited.com/",
            "text": "Dream International Limited"
        }
    ]
    return (
        <section className="companies">
            <Banner />
            <div className="companies__content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <Title titleOuter={'Our'} titleInner={'Companies'} />
                            <div className="companies__message">
                                {message.map((item) => (
                                    <p key={Math.random()}>{item}</p>
                                ))}
                            </div>
                        </div>
                        {companies?.map((item, index) => (
                            <div className="col-lg-5" key={index}>
                                <div className="companies__container">
                                    <a href={item.url} target="/_blank">
                                        <div className="companies__logo">
                                            <img src={item.logo} alt={item.alt} />
                                        </div>
                                        <div className="companies__text">
                                            <p>{item.text}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies