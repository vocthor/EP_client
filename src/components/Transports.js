import React, { useState, useEffect } from "react";
import axios from "axios";
import Transport from "./Transport";

const Transports = () => {
  const URLAPI =
    "https://data.explore.star.fr/api/v2/catalog/datasets/tco-bus-circulation-passages-tr/records?select=%2A&where=nomarret%3D%27IUT%27&order_by=arrivee%20asc&limit=10&offset=0&timezone=Europe%2FParis"; //Var pr savoir si la page est en train de charger
  const [loading, setLoading] = useState(true);

  //Var pr stocker les valeurs de l API
  const [resultatapi, setResultatAPI] = useState();

  useEffect(
    () => {
      /**
       * Fonction pr aller chercher l'API.
       * Stocke le resultat dans resultatAPI.
       */
      const fetchTransport = async () => {
        try {
          const res = await axios.get(URLAPI);
          setResultatAPI(res.data);
          setLoading(false);
        } catch (err) {
          // faudra mieux catch les erreurs
          console.error(err);
        }
      };

      fetchTransport();
    },
    [
      //Condition de changement pr MaJ
    ]
  );
  // .then(function (res) {
  //   return res.records;
  // });

  if (loading) {
    return (
      // faudra mettre un logo de chargement
      <div className="transports">
        <h1>Transports</h1>
        <div>
          <p>Chargement</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transports">
      <h1>Transport</h1>
      <Transport data={resultatapi} />
    </div>
  );
};

export default Transports;
