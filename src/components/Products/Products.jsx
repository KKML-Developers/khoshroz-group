import Banner from '../Banner/Banner';
import './products.scss';
import HelmetComponent from '../HelmetComponent';
const Companies = () => {


    return (
        <section className="products">
            <HelmetComponent
                title="Products | Khoshroz Group"
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
            </div>
        </section>
    )
}

export default Companies