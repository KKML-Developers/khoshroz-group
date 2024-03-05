import { NavLink } from "react-router-dom";
import "./about.scss";
const About = () => {

  const title = 'Welcome Khoshroz Group';
  const description = [
    'While diversifying and expanding its capacity, has no doubt been lucrative moves for the Magura Group, the management has much more in mind.', 'Magura Group has always held on to the philosophy of doing business that will benefit people. It has been more than 25 years of exploration and hardworking, the Group has become a Multilateral Enterprise with its business covering different aspects including food, cloth, housing, education and medicare.'
  ]
  return (
    <section className="about pt-4">
      <div className="container">
        <div className="row align-items-stretch flex-lg-row flex-column-reverse">
          <div className="col-lg-6">
            <div className="about__content">
              <h2>{title}</h2>
              <div className="about__content--desc">
                {description.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <NavLink to="/profile" className="primary__btn mt-3">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__video h-100">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-qoaQgZF0E8?si=zrTxeF8IT7R3QXRl" title="YouTube video player" border="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
