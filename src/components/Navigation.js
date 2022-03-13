import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const [authState, setAuthState] = useState(false);
  const [id, setId] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  let history = useHistory();

  /*  Fonction qui permets de supprimer le token associée au compte connecté, donc permets de 
  déconnecter l'utilisateur puis le redirige sur la page Home*/
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setAuthState(false);
    history.push("/");
    window.location.reload(false); //dans le cas ou on est déja sur la page Home
  };

  /*  Permets de savoir s'il y a un user connecté au chargement de la page et donc de 
  définir les constantes qui seront necessaires dans l'affichage */
  useEffect(() => {
    Axios.post(
      "http://localhost:3001/getUserData",
      { variable: 1 }, // je suis obligé de mettre ça sinon il y a un probleme avec le header mais en soit cette ligne est inutile
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      }
    )
      .then((res) => {
        if (res.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
          setPrenom(res.data.prenom);
          setNom(res.data.nom);
          setId(res.data.id);
          setTimeout(logout, 600000);
        }
      })
      .then(() => {
        setInterval(login, 1000);
      });
  });

  /* Fonction qui va permettre de se faire connecter l'id renseigné, elle redirige ensuite suite la page Home*/
  const login = () => {
    if (authState == false) {
      fetch("../login.txt")
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          setId(text);
        });
      /*let fichier = "../login.txt";
      //On lance la requête pour récupérer le fichier
      let fichierBrut = new XMLHttpRequest();
      fichierBrut.open("GET", fichier, false);
      //On utilise une fonction sur l'événement "onreadystate"
      fichierBrut.onreadystatechange = function () {
        if (fichierBrut.readyState === 4) {
          //On contrôle bien quand le statut est égal à 0
          if (fichierBrut.status === 200 || fichierBrut.status == 0) {
            //On peut récupérer puis traiter le texte du fichier
            setId(fichierBrut.responseText);
            console.log(typeof id);
            console.log(id);
          }
        }
      };
      fichierBrut.send(null);*/
      if (id) {
        Axios.post("http://localhost:3001/getUser", {
          id: id,
        }).then((res) => {
          if (res.data.error) {
            history.push("/compte");
          } else {
            sessionStorage.setItem("accessToken", res.data.accessToken);
            history.push("/");
            window.location.reload(false);
          }
        });
      }
    }
  };

  return (
    <div className="navigation" background-color="RED">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>

      <NavLink exact to="/plan" activeClassName="nav-active">
        Plan
      </NavLink>
      <NavLink exact to="/salles-tp" activeClassName="nav-active">
        Salles de TP
      </NavLink>
      <NavLink exact to="/annonces" activeClassName="nav-active">
        Annonces
      </NavLink>
      {authState ? (
        <div className="Loginfo">
          <h4>
            {prenom} {nom}
          </h4>
          <button onClick={logout}>Se déconnecter</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navigation;
