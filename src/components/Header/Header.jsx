import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./header.scss";
import { useState } from "react";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const headerData = [
    { id: 1, label: "Home", to: "/", exact: true },
    { id: 2, label: "About", to: "/about", exact: true },
    { id: 3, label: "Companies", to: "/companies", exact: true },
  ];


  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-md">
              <div className="header__logo d-md-block d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand d-block">
                  <img src="https://res.cloudinary.com/dfaw271y6/image/upload/v1706095346/logos/b1z8dxf7cvrkqugkr5io.png" alt="Khoshroz Group" className="img-fluid" />
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
              <div className={click ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} >
                <ul className="navbar-nav">
                  {headerData.map((item) => (
                    <li className="nav-item" key={item.id}>
                      <NavLink
                        to={item.to}
                        className="nav-links"
                        onClick={handleClick}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
