import Hero from "../Hero/Hero";
import About from "../About/About";
import Slogan from "../Slogan/Slogan";
import HelmetComponent from "../HelmetComponent";

const Home = () => {
    return (
        <section className="home py-5">
            <HelmetComponent
                title="Home | Khoshroz Group"
                description="While diversifying and expanding its capacity, has no doubt been lucrative moves for the Magura Group, the management has much more in mind."
                keywords="Khoshroz, Khoshroz Group, Publication, Bangladesh Business, Business Tycoon, khoshroz Kitab mahal, magura agriculture, dream international, estylez, group of company"
                author="Khoshroz Group Developers"
                ogTitle="Khoshroz Group of Company"
                ogDescription="Description of your page goes here"
                ogUrl="https://www.khoshrozltd.com"
                ogImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
                twitterTitle="Khoshroz Group of Company"
                twitterDescription="Description of your page goes here"
                twitterImage="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png"
            />
            <Hero />
            <Slogan />
            <About />
        </section>
    );
};

export default Home;