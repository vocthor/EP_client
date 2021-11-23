import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";

const Compte = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      prenom: prenom,
      nom: nom,
      pseudo: pseudo,
    }).then(() => console.log("success"));
  };

  return (
    <div className="Compte">
      <Navigation />
      <div className="Form">
        <label>Prenom:</label>
        <input type="text" onChange={(e) => setPrenom(e.target.value)} />
        <label>Nom:</label>
        <input type="text" onChange={(e) => setNom(e.target.value)} />
        <label>Pseudo ENT:</label>
        <input type="text" onChange={(e) => setPseudo(e.target.value)} />
        <button onClick={addUser}>Valider</button>
      </div>
    </div>
  );
};

export default Compte;
