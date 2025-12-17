import React, { useState } from "react";
import Modal from "../components/modal";
import { IonIcon } from '@ionic/react';
import { logoFacebook } from 'ionicons/icons';
import { logoInstagram } from 'ionicons/icons';
import Carousel from "../components/carousel";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import plancheVege from "../assets/planche-vege.jpg";
import plancheCharcuterieFromage from "../assets/planche-charcuterie-fromage.jpg";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return(  
    <> 
      <main>
        <h1 id='titre'>Rejoignez notre gîte / spa privatif Thermo'Spa de Calais</h1>
        <h2>200 boulevard Leon Gambetta 62100 Calais</h2>
        <p id='numero-tel'>06 14 85 06 77</p>
        <IonIcon icon={logoFacebook}></IonIcon>
        <IonIcon icon={logoInstagram}></IonIcon>
        <Carousel slides={[slide1, slide2, slide3]} autoPlay={true} interval={4000}/>
        <div className='notre-concept'>
          <h2>Découvrez notre concept</h2>
          <p>Notre gîte au coeur de la ville de Calais est un véritable cocon de détente de 95 mètres carrés. Il inclut un patio pour profiter de vos meilleurs apéritifs en toute intimité. Le gîte ThermoSpa Calais possède une capacité d’accueil de 2 à 4 personnes. Ce lieu est pensé pour vous offrir des instants paisibles grâce à son jacuzzi privatif pouvant recevoir 5 personnes, un siège massant haut de gamme et un jeu de fléchettes professionnel. Composé d’un espace de vie lumineux et confortable, notre gîte fraîchement aménagé, vous offre un séjour serein. En couple entre amis ou en famille, tout est mis en place pour que vous ne manquiez de rien. Cerise sur le gâteau nous offrons le petit déjeuner.</p>
        </div>
        <iframe width="467" height="830" src="https://www.youtube.com/embed/IIn5lBkEZpk" title="Présentation Thermo&#39;Spa Calais" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h1>Nos équipements</h1>
        <div class="nos-equipement">
          <div class="equipement1"><h2>Espace nuit</h2>Equipé d'un lit Queen Size 160x180 et d'une TV connecté 4k ultra hd dans une magnifique chambre mansardée</div>
          <div class="equipement2"><h2>Salle de bain</h2>Dispose d'une baignoire, d'une douche à l'italienne, d'un vasque unique et d'un miroir lumineux, les serviette et peignoir sont fournis.</div>
          <div class="equipement3"><h2>Espace repas tout équipé</h2>Table à manger ronde en verre, bouilloire, cafetière, four, firgo / congélateur</div>
          <div class="equipement4"><h2>Zone de détente</h2>Jacuzzi, Jeu de fléchettes connecté, Siège massant bluetooth</div>
        </div>
        <span id='detail-equipement' onClick={() => setIsModalOpen(true)}>Plus de detail sur nos équipement</span>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Detail des équipements"
        >
          <h2>Coin Salon</h2>
            <ul>
                <li>Canapé Convertible XXL (200 x 400)</li>
                <li>TV Ultra 4K d’une taille de 75″ Smart TV</li>
                <li>Table de repas avec 4 chaises</li>
                <li>Cible de fléchettes électronique connectée</li>
                <li>Table de massage</li>
                <li>Porte manteau</li>
            </ul>
          <h2>Installation bien être</h2>
            <ul>
                <li>Patio</li>
                <li>Jacuzzi 2 à 5 personnes</li>
                <li>Douche & WC attenant</li>
                <li>Siège massant avec enceintes intégrées Bluetooth</li>
            </ul>
          <h2>Cuisine équipée</h2>
            <ul>
                <li>Réfrigérateur & congélateur</li>
                <li>Bouilloire</li>
                <li>Cafetière</li>
                <li>Four</li>
                <li>Accessoires de cuisine</li>
            </ul>
          <h2>Etage Chambre</h2>
            <ul>
                <li>Lit Queen Size 160 x 200</li>
                <li>TV Ultra 4K d’une taille de 65″ Smart TV</li>
                <li>Linge de lit avec peignoir et serviettes (fournis)</li>
                <li>Cintres</li>
                <li>Douche italienne</li>
                <li>Baignoire</li>
                <li>Vasque</li>
                <li>WC</li>
            </ul>
          <h2>Accomodations</h2>
            <ul>
                <li>Internet haut débit via Wifi</li>
                <li>Enceintes Hifi Bluetooth au Rez de chaussée</li>
            </ul>
        </Modal>
        <h1>Laissez- vous tentez par nos planches pour deux</h1>
        <p>Réserver 72h avant votre arrivée</p>
        <div id="planche">
          <img src={plancheVege} alt="planche vegetarienne" />
          <img src={plancheCharcuterieFromage} alt="planche charcuterie/fromage" />
          <p>Planche végétarienne 30 €</p>
          <p>Planche de charcuterie / fromage 30 €</p>
        </div>
        <p>Un supermarché et d’autres commerces situés à proximité du Thermo’Spa vous permet également de faire facilement vos courses et d’accéder à tous les produits dont vous pourriez avoir besoin, rendant votre expérience encore plus pratique et agréable</p>
        <h1>Nos Tarifs par nuitée</h1>
        <div id="tarif"> 
          <div id="liste-tarif">   
            <div class="div1">
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
            </div>
            <div class="div2">
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
            </div>
            <div class="div3">
              <h2>Forfait 3h</h2>
              <h2>A partir de 100 € pour deux personnes</h2>
              <ul>
                <li>Arrivée dès 13h30 – Départ 16h30</li>
                <li>120 € pour trois personnes</li>
                <li>140 € pour 4 personnes</li>
                <li>Les tarifs peuvent varier en fonction des jours fériés, consulter le calendrier de réservation.</li>
                <li>La veille d’un jour férié ou le jour férié le prix de la nuité s’élève à 300 euros la nuité</li>
              </ul>
            </div>
          </div>
          <p className="reserver">Disponibilités et réservations</p>
        </div>
        <h1>Infos Pratiques</h1>
        <div id="info-pratique">
          <div class="div1"><h2>Pour tout renseignement</h2>Contactez Cathy et Stéphane au 06 14 85 06 77</div>
          <div class="div2"><h2>Détails</h2>Une boîte à clés est à votre disposition pour votre arrivée, en attendant que nous puissions vous accueillir, Établissement non fumeur sauf sur le patio, Animaux non autorisés</div>
          <div class="div3"><h2>Notre emplacement</h2>Situé en plein coeur de Calais, nous nous trouvons juste en face de l’enseigne Carrefour. Vous pouvez faire vos courses pour vos repas en toute autonomie.La zone est desservie par les bus de villes qui sont gratuits. Le stationnement se fait sur la voie publique, il est gratuit et illimité.</div>
        </div>
        <iframe style={{ width: 600, height: 450, border: "0" }}src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5027.506513936598!2d1.84190527707877!3d50.94677607169127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc3f0e13aad063%3A0x316c2b9f72bbceef!2s200%20Bd%20Gambetta%2C%2062100%20Calais!5e0!3m2!1sfr!2sfr!4v1766001538331!5m2!1sfr!2sfr" stylereferrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Copyright © 2025 Thermo'Spa Gîte Calais</p>
        <p>Politique de confidentialité</p>
        <p>Conditions générales de ventes</p>
        <p>Conditions Générales d’Utilisation</p>
      </main>
    </>
)}


