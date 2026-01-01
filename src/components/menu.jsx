import React from 'react';
import { Link } from "react-router-dom";
import "../style/menu.css";
import logo from "../assets/thermospa-logo.png";

function Menu() {
  return (
    <nav className="menu">
        <img src={logo} alt="thermospalogo" />
        <a href="/">Accueil</a>
        <a href="/contact">Contact</a>
        <Link to="/reserver" className='reserver'>Reserver</Link>
    </nav>
  );
}

export default Menu;
