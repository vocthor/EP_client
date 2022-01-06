import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const [authState, setAuthState] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  let history = useHistory();

  /*  Fonction qui permets de supprimer le token associée au compte connecté, donc permets de 
  déconnecter l'utilisateur puis le redirige sur la page Home*/
  const logout = () => {
    sessionStorage.removeItem("accessToken");
    setAuthState(false);
    history.push("/");
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
    ).then((res) => {
      if (res.data.error) {
        setAuthState(false);
      } else {
        setAuthState(true);
        setPrenom(res.data.prenom);
        setNom(res.data.nom);
      }
    });
  });

  return (
    <div className="navigation">
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
        <NavLink exact to="/compte" activeClassName="nav-active">
          Se connecter
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
