import React, { useState, useEffect } from "react";
import axios from "axios";
import Transport from "./Transport";

const Transports = () => {
  const URLAPI1 =
    "https://data.explore.star.fr/api/v2/catalog/datasets/tco-bus-circulation-passages-tr/records?select=%2A&where=nomarret%3D%27IUT%27&order_by=arrivee%20asc&limit=10&offset=0&timezone=Europe%2FParis"; //Var pr savoir si la page est en train de charger
  const URLAPI2 =
    "https://data.explore.star.fr/api/v2/catalog/datasets/tco-bus-circulation-passages-tr/records?select=%2A&where=nomarret%3D%27Beaulieu%20INSA%27&order_by=arrivee%20asc&limit=10&offset=0&timezone=Europe%2FParis"; //Var pr savoir si la page est en train de charger
  const URLAPI3 =
    "https://data.explore.star.fr/api/v2/catalog/datasets/tco-bus-circulation-passages-tr/records?select=%2A&where=nomarret%3D%27Beaulieu%20Restau%20U%27&order_by=arrivee%20asc&limit=10&offset=0&timezone=Europe%2FParis"; //Var pr savoir si la page est en train de charger
  const [loading, setLoading] = useState(true);

  //Var pr stocker les valeurs de l API
  const [resultatapi1, setResultatAPI1] = useState();
  const [resultatapi2, setResultatAPI2] = useState();
  const [resultatapi3, setResultatAPI3] = useState();

  useEffect(
    () => {
      /**
       * Fonction pr aller chercher l'API.
       * Stocke le resultat dans resultatAPI.
       */
      const fetchTransport = async () => {
        try {
          const res = await axios.get(URLAPI1);
          setResultatAPI1(res.data);
          const res2 = await axios.get(URLAPI2);
          setResultatAPI2(res2.data);
          const res3 = await axios.get(URLAPI3);
          setResultatAPI3(res3.data);
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
      <span className="rowarret">
        <Transport data={resultatapi1?.records} />
        <Transport data={resultatapi2?.records} />
        <Transport data={resultatapi3?.records} />
      </span>
    </div>
  );
};

export default Transports;
