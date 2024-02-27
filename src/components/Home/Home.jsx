import Hero from "../Hero/Hero";
import About from "../About/About";
import Slogan from "../Slogan/Slogan";
import HelmetComponent from "../HelmetComponent";
import Brands from "../Brands/Brands";

const Home = () => {
    return (
        <section className="home py-5">
            <HelmetComponent
                title="Home | Khoshroz Group"
                description="Explore our website for Khoshroz Group of Companies, a renowned family business excelling in publications with companies like Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, and more"
                keywords="Export family business, Khoshroz publications exports, Export company group, Khoshroz family business exports, Export group of companies, Khoshroz company, Export business, Export business, Export company names, Khoshroz family business, Export publications, Business publications, Company names, Khoshroz exports, bricks company, Group of companies, Export companies, Khoshroz publications, Family business exports, Publications exports, Dream International Limited, E-stylze fashion limited, MAPL, Magura agriculture park limited, JMPL, Jatiya mudran limited, NDCL, National development company limited, KKML, Khoshroz kitab mahal, Khoshroz group of companies, Book Business, Auto Brick, Auto Brick Company, Paper processing company"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Explore our website for Khoshroz Group of Companies, a renowned family business excelling in publications with companies like Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, and more"
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Explore our website for Khoshroz Group of Companies, a renowned family business excelling in publications with companies like Khoshroz Kitab Mahal, National Development Company Limited, Jatiya Mudran Limited, and more"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <Hero />
            <Slogan />
            <div className="container brands text-center mb-4">

                <div className="row">
                    <div className="col-12">
                        <div className="brands__inner bg-white py-5 rounded">
                            <Brands />
                        </div>
                    </div>
                </div>
            </div>
            <About />
        </section>
    );
};

export default Home;