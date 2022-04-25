import React, { useState, useEffect } from "react";

const Transport = ({ data }) => {
  //Tableau pr stocker le temps des (48) prochaines heures
  const [donnees, setDonnees] = useState([]);

  const [filtered, setFiltered] = useState([]);

  useEffect(
    () => {
      const currentData = data?.map((f) => {
        let filtered1 = [];
        filtered1 = f?.record.fields.depart.match(/T(\d\d):(\d\d):(\d\d)/);
        return {
          nomarret: f?.record.fields.nomarret,
          nomcourtligne: f?.record.fields.nomcourtligne,
          heure: filtered1[1],
          minute: filtered1[2],
          seconde: filtered1[3],
          direction: f?.record.fields.destination,
        };
      });
      console.log(currentData);

      // currentData?.forEach((element) => {

      // });
      // setFiltered(filtered1);
      let bababab = currentData.slice(0, 10);
      console.log(bababab);
      setDonnees(bababab);
      console.log(donnees);
      // setFiltered(filtered);
      // console.log(filtered1);
      // console.log(bababab);
    },
    //useEffect se re-execute si data est modifiée
    [data]
  );

  if (donnees === []) {
    //si donnees est null
    return (
      <div>
        <p>Erreur de chargement</p>
      </div>
    );
  }

  return (
    <div className="Untransport">
      <span>
        <h2>À {donnees?.[0]?.nomarret}</h2>
        <div className="infostransport">
          <h3>
            {donnees?.[0]?.nomcourtligne} direction {donnees[0]?.direction}
          </h3>
          <p>
            À {donnees?.[0]?.heure}:{donnees?.[0]?.minute}
          </p>
        </div>
        <div className="infostransport">
          <h3>
            {donnees?.[1]?.nomcourtligne} direction {donnees[1]?.direction}
          </h3>
          <p>
            À {donnees?.[1]?.heure}:{donnees?.[1]?.minute}
          </p>
        </div>
        <div className="infostransport">
          <h3>
            {donnees?.[2]?.nomcourtligne} direction {donnees[2]?.direction}
          </h3>
          <p>
            À {donnees?.[2]?.heure}:{donnees?.[2]?.minute}
          </p>
        </div>
      </span>
    </div>
  );
};

export default Transport;
