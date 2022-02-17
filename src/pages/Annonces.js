import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";

export default function Annonces() {
  // Var pr stocker le corps de l'annonce en train d'être rentrée
  const [input, setInput] = useState("");
  // Var pr stocker la liste des annonces
  const [annonceList, setAnnonceList] = useState([]);

  const [authState, setAuthState] = useState(false);
  const [id, setId] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");

  // Connection
  useEffect(() => {
    Axios.post(
      "http://localhost:3001/getUserData",
      { variable: 1 }, // je suis obligé de mettre ça sinon il y a un probleme avec le header mais en soit cette ligne est inutile
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      }
    ).then((res) => {
      if (res.data.error) {
        setAuthState(false);
      } else {
        setAuthState(true);
        setPrenom(res.data.prenom);
        setNom(res.data.nom);
        setId(res.data.id);
      }
    });
  });

  useEffect(() => {
    // Update via requete au back
    // TODO
  }, [annonceList]);

  const handleSubmit = (e) => {
    // Eviter le rechargement incessant
    e.preventDefault();
    // Objet contenant les caractéristiques de l'annonce
    const newAnnonce = {
      id: new Date().getTime(),
      text: input,
      // owner: TODO
    };
    // On rajoute l'annonce à la liste, puis on RaZ l'input
    setAnnonceList([newAnnonce, ...annonceList]);
    setInput("");
  };

  return (
    <div className="annonces">
      <Navigation />
      <h1>À faire</h1>
      <form className="annonce-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quelle est votre annonce ?"
          value={input}
          name="text"
          className="annonce-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="annonce-addButton">
          Ajouter
        </button>
      </form>
      {annonceList.map((a) => (
        <div key={a.id}>{a.text}</div>
      ))}
    </div>
  );
}
