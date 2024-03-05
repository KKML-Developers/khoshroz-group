import { NavLink } from "react-router-dom";
import "./homeAbout.scss";

const HomeAbout = () => {
  return (
    <div className="container my-4 py-5">
      <div className="row home-about g-3">
        <div className="col-md-6 ">
          <div className="home-about-information">
            <h2>Welcome Khoshroz Group</h2>
            <p>
              The expansion and diversification have indeed opened new
              opportunities for the Khoshroz Group, with the management focusing
              on providing a range of benevolent services beyond mere
              profit-making.
            </p>
          </div>
          <div className="home-about-buttons">
              <NavLink to="/about" className="home-about-button">
                Read More
              </NavLink>
              <NavLink to="/about" className="home-about-button">
               Corporate Profile
              </NavLink>
          </div>
        </div>
        <div className="col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6dxRSynuNOI?si=HoHgLuhtaxmdRfUD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

