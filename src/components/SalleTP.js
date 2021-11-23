import React from "react";

const SalleTP = ({ salle }) => {
  return (
    <div className="salleTP">
      Salle {salle.nom}
      <img
        src={salle.estOccupe ? "../rouge.png" : "../vert.png"}
        height="20"
        alt={salle.estOccupe ? "Occupé" : "Libre"}
      />
    </div>
  );
};

export default SalleTP;
