import { NavLink } from "react-router-dom";
import { FaBars, FaFacebookF, FaLinkedin } from "react-icons/fa";
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
  const social = [
    { id: 1, icon: <FaFacebookF />, url: "/" },
    { id: 1, icon: <FaLinkedin />, url: "/" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <div className="header__logo">
                <NavLink exact to="/" className="navbar-brand d-block">
                  <img src={khoshrozGroupLogo} alt="Khoshroz Group" className="img-fluid" />
                </NavLink>
                <button className="navbar-toggler" type="button" onClick={handleClick}>
                  {click ? (
                    <span className="icon">
                      <IoClose />
                    </span>
                  ) : (
                    <span className="icon">
                      <FaBars />
                    </span>
                  )}
                </button>
              </div>
              <div className={click ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'} >
                <ul className="navbar-nav">
                  {headerData.map((item) => (
                    <li className="nav-item" key={item.id}>
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

              </div>
              <ul className="header__social">
                {social.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.icon}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
