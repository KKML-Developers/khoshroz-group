import HomeAbout from "../HomeAbout/HomeAbout";

const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>This is home component</h1>
                    </div>
                </div>
            </div>
            <HomeAbout />
        </section>
    );
};

export default Home;