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
      </main>
    </>
)}
