import { NavLink } from "react-router-dom";
import { FaBars, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./header.css";
import { useState } from "react";
import khoshrozGroupLogo from "../assets/img/khoshroz_group_logo.png"

const Header = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <> 
        <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={khoshrozGroupLogo} width={210} alt="Khoshroz Group" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/companies"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Companies
              </NavLink>
            </li>
            
            
          </ul>
          <div className="social-logo">
          <span><FaFacebookSquare/></span>
          <span><FaLinkedin/></span>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
              <IoClose />
              </span>
            ) : (
              <span className="icon">
              <FaBars />
              </span>
            )}
          </div>
        </div>
      </nav>
        </>
    );
};

export default Header;