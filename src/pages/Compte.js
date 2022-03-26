import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Compte = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [validFields, setValidFields] = useState(true);
  const [user, setUser] = useState({});
  let history = useHistory();

  /* Fonction déclenchée lorsqu'on valide la création d'un compte, elle permets d'ajouter ce qui est rentré
  par l'utilisateur dans les champs directement dans la base de données donc elle crée un utilisateur*/
  const addUser = () => {
    let valid = true;
    //Appel au back
    Axios.post("http://localhost:3001/create", {
      id: id,
      prenom: prenom,
      nom: nom,
      pseudo: pseudo,
      email: email,
    })
      .then((res) => {
        if (res.data == "Invalid fields") {
          setValidFields(false);
          valid = false; // je n'utilise pas validFields car sinon il y a un bug au premier déclenchement et pas arpes je ne sais pas pourquoi
        } else {
          setValidFields(true);
          valid = true;
        }
      })
      .then(() => {
        if (valid) {
          document.getElementById("prenom").value = "";
          document.getElementById("nom").value = "";
          document.getElementById("pseudo").value = "";
          document.getElementById("email").value = "";
          login();
        }
      });
  };

  /* Fonction pour relancer sur la page d'accueil */

  const redirect = () => {
    history.push("/");
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
    if (id == "") {
      fetch("../login.txt")
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          setId(text);
          console.log(text);
        });
    }
  });

  return (
    <div className="Compte">
      <div className="Retour">
        <button onClick={redirect}>Retour à une utilisation générale</button>
      </div>
      {user.nom ? (
        <div className="Connected">
          <h1>
            {user.prenom} {user.nom} est connecté
          </h1>
          <button>Se déconnecter</button>
        </div>
      ) : (
        <div className="Form">
          {/* { <div className="FormLogin">
            <h1>Se connecter</h1>
            <label>Id:</label>
            <input type="text" onChange={(e) => setId(e.target.value)} />
            <button onClick={login}>Se connecter</button>
          </div> } */}
          <div className="FormRegister">
            <h1>Créer un Compte</h1>
            <label>Prenom:</label>
            <input
              type="text"
              id="prenom"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <label>Nom:</label>
            <input
              type="text"
              id="nom"
              onChange={(e) => setNom(e.target.value)}
            />
            <label>Pseudo ENT:</label>
            <input
              type="text"
              id="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={addUser}>Valider</button>
            {validFields ? (
              ""
            ) : (
              <h4> Veuillez remplir les champs correctement</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Compte;
