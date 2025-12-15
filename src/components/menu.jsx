import React from 'react';
import "../style/menu.css";
import logo from "../assets/thermospa-logo.png";

function Menu() {
  return (
    <nav className="menu">
        <img src={logo} alt="thermospalogo" />
        <a href="/">Accueil</a>
        <a href="/contact">Contact</a>
        <a className="reserver" href="/reserver">Reserver</a>
    </nav>
  );
}

export default Menu;
