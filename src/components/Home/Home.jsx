import Hero from "../Hero/Hero";
import About from "../About/About";
import Slogan from "../Slogan/Slogan";

const Home = () => {
    return (
        <section className="home">
            <Hero />
            <Slogan />
            <About />
        </section>
    );
};

export default Home;