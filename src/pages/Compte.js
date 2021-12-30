import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Compte = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [id, setId] = useState();
  const [user, setUser] = useState({});
  const [listUser, setListUser] = useState([]);
  let history = useHistory();

  /* Fonction déclenchée lorsqu'on valide la création d'un compte, elle permets d'ajouter ce qui est rentré
  par l'utilisateur dans les champs directement dans la base de données donc elle crée un utilisateur*/
  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      prenom: prenom,
      nom: nom,
      pseudo: pseudo,
    }).then(() => console.log("success"));
  };

  /* Fonction qui va permettre de se faire connecter l'id renseigné, elle redirige ensuite suite la page Home*/
  const login = () => {
    Axios.post("http://localhost:3001/getUser", {
      id: id,
    }).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        sessionStorage.setItem("accessToken", res.data.accessToken);
        recupDataUser();
        history.push("/");
      }
    });
  };

  /* Fonction qui permets de récupérer les données associées à l'id connecté et lets mets dans la const user*/
  const recupDataUser = () => {
    Axios.post(
      "http://localhost:3001/getUserData",
      { variable: 1 }, // je suis obligé de mettre ça sinon il y a un probleme avec le header mais en soit cette ligne est inutile
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      }
    ).then((res) => {
      setUser(res.data);
    });
  };

  /* Pour que les données soient présentes au chargement de la page, mais je crois ce n'est plus utile apres les 
  modifs que j'ai faites, à check*/
  useEffect(() => {
    recupDataUser();
  });

  return (
    <div className="Compte">
      <Navigation />
      {user.nom ? (
        <div className="Connected">
          <h1>
            {user.prenom} {user.nom} est connecté
          </h1>
          <button>Se déconnecter</button>
        </div>
      ) : (
        <div className="Form">
          <div className="FormLogin">
            <h1>Se connecter</h1>
            <label>Id:</label>
            <input type="text" onChange={(e) => setId(e.target.value)} />
            <button onClick={login}>Se connecter</button>
          </div>
          <div className="FormRegister">
            <h1>Créer un Compte</h1>
            <label>Prenom:</label>
            <input type="text" onChange={(e) => setPrenom(e.target.value)} />
            <label>Nom:</label>
            <input type="text" onChange={(e) => setNom(e.target.value)} />
            <label>Pseudo ENT:</label>
            <input type="text" onChange={(e) => setPseudo(e.target.value)} />
            <button onClick={addUser}>Valider</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compte;
