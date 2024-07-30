import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import basket from "../../assets/basket_icon.png";
import search from "../../assets/search_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState("controlleur");
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="" onClick={() => setMenuActive("home")} />
      </Link>
      <ul className="navbar-menu">
        <li
          className={menuActive === "employeur" ? "active" : ""}
          onClick={() => setMenuActive("employeur")}
        >
          <Link to="/employeur">Employeur</Link>
        </li>
        <li
          className={menuActive === "travailleur" ? "active" : ""}
          onClick={() => setMenuActive("travailleur")}
        >
          <Link to="/travailleur">Travailleur</Link>
        </li>
        <li
          className={menuActive === "beneficiaire" ? "active" : ""}
          onClick={() => setMenuActive("beneficiaire")}
        >
          <Link to="/beneficiaire">Beneficiaire</Link>
        </li>
        <li
          className={menuActive === "controlleur" ? "active" : ""}
          onClick={() => setMenuActive("controlleur")}
        >
          <Link to="/controlleur">Controlleur</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={search} alt="" />
        <div className="navbar-right-info">
          <img src={basket} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
