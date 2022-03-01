import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";

export default function Annonces() {
  // Var pr stocker le corps de l'annonce en train d'être rentrée
  const [input, setInput] = useState("");
  // Var pr stocker la liste des annonces
  const [annonceList, setAnnonceList] = useState([]);

  const [contact, setContact] = useState("");
  const [validFields, setValidFields] = useState(true);

  // Vars de l'authentification
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
  }, []);

  // Update lors d'un reload de la page
  useEffect(() => {
    askBackEnd();
  }, []);

  /**
   * Fonction pour gérer la publication d'une annonce
   * @param {*} e
   */
  const handleSubmit = (e) => {
    // Eviter le rechargement incessant
    e.preventDefault();
    // Objet contenant les caractéristiques de l'annonce
    const newAnnonce = {
      id: (new Date().getTime() * 60000) % 10080, //10080 = nb minute en 7 jours
      text: input,
      ownerID: id,
      ownerName: prenom + " " + nom,
      contact: contact,
    };
    // On rajoute l'annonce à la liste, puis on RaZ l'input
    sendToBackEnd(newAnnonce);
    setInput("");
  };

  /**
   * Fonction pour envoyer au Back-End la nouvelle annonce à ajouter.
   * @param {*} annonce à ajouter
   */
  const sendToBackEnd = (annonce) => {
    let valid = true;
    Axios.post("http://localhost:3001/addAnnonce", {
      id_annonce: annonce.id,
      id_owner: annonce.ownerID,
      text: annonce.text,
      contact: annonce.contact,
    }).then((res) => {
      if (res.data != "Invalid fields") {
        setValidFields(true);
        valid = true; // je n'utilise pas validFields car sinon il y a un bug au premier déclenchement et pas arpes je ne sais pas pourquoi
      } else {
        setValidFields(false);
        valid = false;
      }
    });
  };

  /**
   * Demande au Back-End de lui envoyé toute la base de donnée
   */
  const askBackEnd = () => {
    Axios.post("http://localhost:3001/updateAnnonces").then((res) => {
      const newList = res.data
        .map((e) => {
          return {
            id: e["id_annonce"],
            text: e["annonce"],
            ownerID: e["id_owner"],
            ownerName: "",
            contact: e["contact"],
          };
        })
        setAnnonceList(newList);
    });
  };

  /* Si l'utilisateur n'est pas connecté mais est quand-même arrivé sur cette pages, on le lui dis gentiment.*/
  if (!authState) {
    return (
      <div>
        <Navigation />
        <h1>
          Vous vous êtes perdu, vous n'êtes pas censé être ici sans vous être
          connecté !
        </h1>
      </div>
    );
  }

  return (
    <div className="annonces">
      <Navigation />
      <h1>Annonces</h1>
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
        <div key={a.id}>
          {a.ownerName} : {a.text}
        </div>
      ))}
    </div>
  );
}
