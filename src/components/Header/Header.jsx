import { NavLink } from "react-router-dom";
import { FaBars, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./header.scss";
import { useState } from "react";
import khoshrozGroupLogo from "../../assets/img/khoshroz_group_logo.png";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const headerData = [
    { id: 1, label: "Home", to: "/", exact: true },
    { id: 2, label: "About", to: "/about", exact: true },
    { id: 3, label: "Companies", to: "/companies", exact: true },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={khoshrozGroupLogo} alt="Khoshroz Group" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {headerData.map((item) => (
              <li key={item.id} className="nav-item">
                <NavLink
                  exact={item.exact}
                  to={item.to}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="social-logo">
            <span>
              <FaFacebookSquare />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>

          <div className="nav-icon" onClick={handleClick}>
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
