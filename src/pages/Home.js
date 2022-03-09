import React, { useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather";
import Menu from "../components/Menu";
import Ephemeride from "../components/ephemeride/Ephemeride";
import Axios from "axios";

const Home = ({}) => {
  const [authState, setAuthState] = useState(false);
  const [pseudo, setPseudo] = useState("");

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
        setPseudo(res.data.pseudo);
      }
    });
  }, []);
  return (
    <div className="home">
      <Navigation />
      <Ephemeride />
      {authState ? <Calendar pseudo={pseudo} /> : ""}
      <Weather />
      <Menu />
    </div>
  );
};

export default Home;
