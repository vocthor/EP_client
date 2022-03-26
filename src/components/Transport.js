import React, { useState, useEffect } from "react";

const Transport = ({ data }) => {
  //Tableau pr stocker le temps des (48) prochaines heures
  const [donnees, setDonnees] = useState();

  useEffect(
    () => {
      console.log(data);
      const currentData = data?.records.map((f) => {
        return {
          nomarret: f.record.fields.nomarret,
          nomcourtligne: f.record.fields.nomcourtligne,
          depart: f.record.fields.depart,
          direction: f.record.fields.destination,
        };
      });
      setDonnees(currentData.slice(0, 10));
      console.log(currentData);
    },
    //useEffect se re-execute si data est modifiée
    [data]
  );

  if (data == null) {
    //si data est null
    return (
      <div>
        <p>Erreur de chargement</p>
      </div>
    );
  }

  return (
    <div className="untransport">
      <span>
        <h2>A {donnees[0].nomarret}</h2>
        <h3>
          {donnees[0]?.nomcourtligne} direction {donnees[0].direction}
        </h3>
        <p>{donnees[0]?.depart}</p>
      </span>
    </div>
  );
};

export default Transport;
