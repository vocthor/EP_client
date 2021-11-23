import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import SalleTP from "../components/SalleTP";

const SallesTP = () => {
  const [salles, setSalles] = useState([]);
  useEffect(() => {
    setSalles([
      { nom: "INF-EAUX", estOccupe: true },
      { nom: "INF-BORDEAUX", estOccupe: false },
      { nom: "INF-ECHIQUIER", estOccupe: true },
      { nom: "INF-PC1", estOccupe: false },
      { nom: "INF-PC2", estOccupe: false },
      { nom: "INF-PC3", estOccupe: true },
    ]);
  }, []);

  return (
    <div className="SallesTP">
      <Navigation />
      <ul>
        {salles.map((salle) => (
          <SalleTP key={salle.nom} salle={salle} />
        ))}
      </ul>
    </div>
  );
};

export default SallesTP;
