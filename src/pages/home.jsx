import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import Carousel from "../components/carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

export default function Home() {
  return(  
    <> 
      <main>
        <h1>Le bien-être autrement</h1>
        <h2>200 boulevard Leon Gambetta 62100 Calais</h2>
        <p>06 14 85 06 77</p>
        <IonIcon icon={logoFacebook}></IonIcon>
        <IonIcon icon={logoInstagram}></IonIcon>
        <h1 style={{ textAlign: "center" }}>Thermo'Spa</h1>
        <Carousel slides={[slide1, slide2, slide3]} />
        <h2>Découvrez notre concept</h2>
        <p>Notre gîte au coeur de la ville de Calais est un véritable cocon de détente de 95 mètres carrés. Il inclut un patio pour profiter de vos meilleurs apéritifs en toute intimité. Le gîte ThermoSpa Calais possède une capacité d’accueil de 2 à 4 personnes. Ce lieu est pensé pour vous offrir des instants paisibles grâce à son jacuzzi privatif pouvant recevoir 5 personnes, un siège massant haut de gamme et un jeu de fléchettes professionnel. Composé d’un espace de vie lumineux et confortable, notre gîte fraîchement aménagé, vous offre un séjour serein. En couple entre amis ou en famille, tout est mis en place pour que vous ne manquiez de rien. Cerise sur le gâteau nous offrons le petit déjeuner.</p>
        <p>Disponibilités / Réservation</p>
        <p>Spécificité de la maison (95m2, divers équipement)</p>
        <h1>Rejoignez notre gîte Thermo'Spa de Calais</h1>
        <p>EMBED VIDEO YOUTUBE</p>
        <p>Jacuzzi : Capacité de 5 personnes avec technologie Bluetooth pour la sonorisation, luminothérapie, hydrothérapie, jets hautes pressions pour les membres inférieurs et les dorsaux.</p>
        <p>Jeu de fléchettes connecté : Cible fléchée avec écran tactile, médias attractifs, scoring en temps réel, jusqu'à 8 joueurs.</p>
        <p>Siège massant : Méthode de relaxation avec massage intégrale: mains, bras, dos, jambes, pieds, fesses.</p>
        <p>Des Formules adaptées : Une ou plusieurs nuitée(s) / 3 heures de détente l'après-midi</p>
        <h1>Nos équipements</h1>
        <ul>
          <li>Coin Salon</li>
          <li>Canapé Convertible XXL (200 x 400)</li>
          <li>TV Ultra 4K d’une taille de 75″ Smart TV</li>
          <li>Table de repas avec 4 chaises</li>
          <li>Cible de fléchettes électronique connectée</li>
          <li>Table de massage</li>
          <li>Porte manteau</li>
        </ul>
        <ul>
          <li>Installation bien être</li>
          <li>Patio</li>
          <li>Jacuzzi 2 à 5 personnes</li>
          <li>Douche & WC attenant</li>
          <li>Siège massant avec enceintes intégrées Bluetooth</li>
        </ul>
        <ul>
          <li>Cuisine équipée</li>
          <li>Réfrigérateur & congélateur</li>
          <li>Bouilloire</li>
          <li>Cafetière</li>
          <li>Four</li>
          <li>Accessoires de cuisine</li>
        </ul>
        <ul>
          <li>Etage Chambre</li>
          <li>Lit Queen Size 160 x 200</li>
          <li>TV Ultra 4K d’une taille de 65″ Smart TV</li>
          <li>Linge de lit avec peignoir et serviettes (fournis)</li>
          <li>Cintres</li>
          <li>Douche italienne</li>
          <li>Baignoire</li>
          <li>Vasque</li>
          <li>WC</li>
        </ul>
        <ul>
          <li>Accomodations</li>
          <li>Internet haut débit via Wifi</li>
          <li>Enceintes Hifi Bluetooth au Rez de chaussée</li>
        </ul>
        <h1>Laissez- vous tentez par nos planches pour deux</h1>
        <p>
        Réserver 72h avant votre arrivée

        Un supermarché et d’autres commerces situés juste en face du Thermo’Spa vous permet également de faire facilement vos courses et d’accéder à tous les produits dont vous pourriez avoir besoin, rendant votre expérience encore plus pratique et agréable

        La cuisine aménagée et équipée du Thermo’Spa pour cuisiner en toute autonomie Elle possède des rangements pratiques, afin que vous puissiez cuisiner en toute tranquillité.​
        </p>
        <p>Planche de charcuterie / fromage 30 €</p>
        <p>Planche végétarienne 30 €</p>     
        <h1>Nos Tarifs par nuitée</h1>
        <h2>Prix de la nuitée en semaine</h2>
        <h2>Du Dimanche soir au Jeudi soir</h2>
        <ul>
          <li>260 € / nuit</li>
          <li>Petit déjeuner offert</li>
          <li>Arrivée dès 18h</li>
          <li>Départ avant 11h</li>
          <li>*40 € par personne supplémentaire</li>
          <li>Capacité totale 4 personnes</li>
        </ul>
        <h2>Prix de la nuitée le week-end</h2>
        <h2>Du Vendredi au Dimanche</h2>
        <h2>Veille et jours fériés inclus</h2>
        <ul>
          <li>300 € / nuit</li>
          <li>Petit déjeuner offert</li>
          <li>Arrivée dès 18h</li>
          <li>Départ avant 11h</li>
          <li>*40 € par personne supplémentaire</li>
          <li>Capacité totale 4 personnes</li>
        </ul>
        <h2>Forfait 3h</h2>
        <h2>A partir de 100 € pour deux personnes</h2>
        <ul>
          <li>Arrivée dès 13h30 – Départ 16h30</li>
          <li>120 € pour trois personnes</li>
          <li>140 € pour 4 personnes</li>
          <li>Les tarifs peuvent varier en fonction des jours fériés, consulter le calendrier de réservation.</li>
          <li>La veille d’un jour férié ou le jour férié le prix de la nuité s’élève à 300 euros la nuité</li>
        </ul>
        <h1>Infos Pratiques</h1>
        <h2>Pour tout renseignement</h2>
        <h2>Détails</h2>
        <ul>
          <li>Contactez Cathy et Stéphane au 06 14 85 06 77</li>
          <li>Une boîte à clés est à votre disposition pour votre arrivée, en attendant que nous puissions vous accueillir</li>
          <li>Établissement non fumeur sauf sur le patio</li>
          <li>Animaux non autorisés</li>
        </ul>
        <h1>Notre emplacement</h1>
        <p>Situé en plein coeur de Calais, nous nous trouvons juste en face de l’enseigne Carrefour.
        Vous pouvez faire vos courses pour vos repas en toute autonomie.La zone est desservie par les bus de villes qui sont gratuits.
        Le stationnement se fait sur la voie publique, il est gratuit et illimité. AFFICHER GOOGLE MAP</p>   
        <p>Copyright © 2025 Thermo'Spa Gîte Calais</p>
        <p>Politique de confidentialité</p>
        <p>Conditions générales de ventes</p>
        <p>Conditions Générales d’Utilisation</p>
      </main>
    </>
)}
