import React from "react";
import Navigation from "../components/Navigation";

const Bibli = () => {
  //Lien du site pour réserver les salles de la bibli
  const URL = `https://affluences.com/biblinsa/reservation?lang=fr&type=1`;

  return (
    <div className="bibli">
      <Navigation />
      <h1>Réservation : salles de la bibliothèque</h1>
      <iframe className="IframeADE" src={URL} frameBorder="0" />
    </div>
  );
};

export default Bibli;
