import React, { useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Home = ({}) => {
  const [authState, setAuthState] = useState(false);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  let history = useHistory();
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
    <div className="home">
      <Navigation />
      {authState ? <Calendar /> : ""}
      <Weather />
    </div>
  );
};

export default Home;
