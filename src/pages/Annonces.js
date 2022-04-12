import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import banList from "../components/annonces/banList";

import "../styles/components/annonces.scss";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Annonces() {
  // Vars de l'annonce en train d'être rentrée
  const [input, setInput] = useState("");
  const [contact, setContact] = useState("");
  const [count, setCount] = useState(0);
  const [anon, setAnon] = useState(false);

  // Var pr stocker la liste des annonces
  const [annonceList, setAnnonceList] = useState([]);

  const [validFields, setValidFields] = useState(true);
  const [errorBackEnd, setErrorBackEnd] = useState("");

  // Vars de l'authentification
  const [authState, setAuthState] = useState(false);
  const [id, setId] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [role, setRole] = useState("");

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
        setRole(res.data.info);
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
    // Pre processing
    let filteredInput = input;
    filteredInput = insultFilter(filteredInput); // Enlever les insultes
    filteredInput = filteredInput.replace(/\s+/g, " ").trim(); // Enlever les espaces
    // Objet contenant les caractéristiques de l'annonce
    const newAnnonce = {
      id: Math.round(Math.random() * 10080), //10080 = nb minute en 7 jours
      text: filteredInput,
      ownerID: id,
      ownerName: prenom + " " + nom,
      anon: anon,
      contact: contact,
    };
    // On rajoute l'annonce à la liste, puis on RaZ l'input
    sendToBackEnd(newAnnonce);
    setInput("");
    setContact("");
    setCount(0);
    setAnon(false);
  };

  /**
   *  Fonction pour enlever les insultes
   * @param {*} text
   */
  const insultFilter = (text) => {
    let res = text;
    banList.map((word) => {
      let re = new RegExp(word, "ig");
      if (res.match(re)) {
        res = res.replaceAll(re, "*beep*");
        // console.log("INSULTE DETECTEE : "+word);
      }
    });
    return res;
  };

  /**
   * Fonction pour envoyer au Back-End la nouvelle annonce à ajouter.
   * @param {*} annonce à ajouter
   */
  const sendToBackEnd = (annonce) => {
    Axios.post("http://localhost:3001/addAnnonce", {
      id_annonce: annonce.id,
      id_owner: annonce.ownerID,
      text: annonce.text,
      contact: annonce.contact,
      anon: annonce.anon,
    })
      .then((res) => {
        console.log(res);
        setErrorBackEnd(res.data);
        if (res.data !== "Invalid fields") {
          setValidFields(true);
        } else {
          setValidFields(false);
        }
      })
      .then(() => askBackEnd());
  };

  /**
   * Demande au Back-End de lui envoyé toute la base de donnée
   */
  const askBackEnd = () => {
    Axios.post("http://localhost:3001/retrieveAnnonces").then((res) => {
      // console.log(res);
      const newList = res.data.map((e) => {
        let own = e["nom"] + " " + e["prenom"]; // en vrai faudrait peut etre faire ca côté backEnd.
        if (e["anon"]) own = "Anonymous";
        return {
          id: e["id_annonce"],
          text: e["text_annonce"],
          ownerID: e["id_owner"],
          ownerName: own,
          contact: e["contact_annonce"],
        };
      });
      setAnnonceList(newList);
    });
  };
  
  /**
   * 
   * @param {*} a 
   */
  const confirmDelete = (a) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="annonceConfirmationDelete">
            <h1 className="title">Suppresion</h1>
            <p className="par">
              Etes-vous sûr(e) de vouloir supprimer cette annonce ?
            </p>
            <button className="buttonNo" onClick={onClose}>
              No
            </button>
            <button
              className="buttonYes"
              onClick={() => {
                deleteAnnonce(a);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };

  /**
   * Fonction pour supprimer une annonce si on en est le propriétaire
   * @param {*} annonce
   */
  const deleteAnnonce = (annonce) => {
    Axios.post("http://localhost:3001/deleteAnnonce", {
      id_annonce: annonce.id,
      id_owner: id,
    })
      .then((res) => {
        console.log(res);
        setErrorBackEnd(res.data);
        if (res.data !== "Invalid fields") {
          setValidFields(true);
        } else {
          setValidFields(false);
        }
      })
      .then(() => askBackEnd());
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
        <textarea
          type="text"
          placeholder="Quelle est votre annonce ?"
          value={input}
          name="text"
          className="annonce-input"
          maxLength="150"
          onChange={(e) => {
            setInput(e.target.value);
            setCount(e.target.value.length);
          }}
        />
        <div className="annonce-truc">
          <span className="annonce-count">{count}/150</span>
          <input
            type="text"
            placeholder="Comment vous contacter ?"
            className="annonce-contact"
            value={contact}
            maxLength="45"
            onChange={(e) => setContact(e.target.value)}
          />
          <div className="annonce-anon">
            <input
              type="checkbox"
              className="anonBox"
              checked={anon}
              onChange={(e) => setAnon(e.target.checked)}
            />
            <label className="anonLabel">Anonyme</label>
          </div>
          <button type="submit" className="annonce-addButton">
            Ajouter
          </button>
        </div>
        <div className="annonce-error">{errorBackEnd}</div>
      </form>

      <div className="annonceList">
        {annonceList.map((a) => (
          <div className="annonce" key={a.id}>
            <div className="annonceOwnerName">{a.ownerName}</div>
            <div className="annonceText">{a.text}</div>
            <div className="annonceDelete">
              {(a.ownerID === id) || (role==="admin") || (role==="moderator") ? (
                <button onClick={() => confirmDelete(a)}>Supprimer</button>
              ) : (
                ""
              )}
            </div>
            <div className="annonceContact">{a.contact}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
