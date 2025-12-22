import React from 'react';
import { Link } from "react-router-dom";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
        <p>Copyright © 2025 Thermo'Spa Gîte Calais</p>

        <Link to="/politiqueConfidentialite">
          Politique de confidentialité
        </Link>

        <Link to="/CGV">
          Conditions Générales de Vente
        </Link>

        <Link to="/CGU">
          Conditions Générales d'Utilisation
        </Link>

        <p>Réalisé par Microskale</p>
    </div>
  );
}

export default Footer;