import Banner from '../Banner/Banner';
import './companies.scss';
import Brands from '../Brands/Brands';
import HelmetComponent from '../HelmetComponent';
const Companies = () => {
    const message = ["The expansion and diversification have indeed opened new opportunities for the Khoshroz Group, with the management focusing on providing a range of benevolent services beyond mere profit-making. The rising Khoshroz Group adheres to the principle of conducting business operations for the betterment of society. Through years of dedication and hard work, the Khoshroz Group has evolved into a multi-faceted entity, covering essential sectors such as food, clothing, housing, education, and healthcare.", "The Khoshroz Group has been instrumental in enhancing the lifestyle of the Bangladeshi people. Each subsidiary of the Khoshroz Group plays a significant role in the economic development of the country, by establishing industries, plants, and engaging in various activities across multiple sectors.", "The Khoshroz Group is dedicated to shaping the future of the nation. The various concerns under the Khoshroz Group are as follows:"]

    return (
        <section className="companies">
            <HelmetComponent
                title="Companies | Khoshroz Group"
                description="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                keywords="Khoshroz Group, Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran, Magura Agriculture Park Limited, E-Stylze fashion e-commerce, Dream International Limited, company group, conglomerate, business group, diversified company, investment company, corporate group, Khoshroz, Kitab Mahal, development company, agriculture park, fashion e-commerce, international company, business concerns, company portfolio, group of companies, enterprise group, investment group, corporate entity, business conglomerate, company holdings, business portfolio, company subsidiaries, Khoshroz Group, benevolent services, profit-making, society, multi-faceted entity, food sector, clothing sector, housing sector, education sector, healthcare sector, Bangladeshi people, economic development, industries, plants, future of the nation, business operations, management, diversification, opportunities, dedication, hard work, subsidiaries, economic development, industries, plants, activities, sectors, lifestyle enhancement, Bangladesh, Khoshroz Group concerns"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Leading family business specializing in publications exports, with multiple companies including Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, Magura Agriculture Park Limited, E-Stylze Fashion Limited, and Dream International Limited"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <div className="companies__content py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="mb-4">
                                <Banner />
                            </div>
                        </div>
                    </div>
                </div>
                <Brands description={message.map((item) => (item))} />
            </div>
        </section>
    )
}

export default Companies