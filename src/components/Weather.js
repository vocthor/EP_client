import React, { useEffect, useState } from "react";
import axios from "axios";

import CurrentWeather from "./weather/currentWeather";
import WeekWeather from "./weather/weekWeather";

export default function Weather() {
  //Coordonnees de l'INSA de Rennes
  const LAT = 48.122359;
  const LONG = -1.636877;
  //Cle de OpenWeatherMap du compte de Vocthor
  const CLEAPI = "6bde72fe96278730666f380e0b3610f6";
  //Lien API de OpenWeatherMap
  const URLAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${LAT}&lon=${LONG}&exclude=minutely&lang=fr&units=metric&appid=${CLEAPI}`;

  //Var pr savoir si la page est en train de charger
  const [loading, setLoading] = useState(true);

  //Var pr stocker les valeurs de l API
  const [resultatAPI, setResultatAPI] = useState();

  useEffect(
    () => {
      /**
       * Fonction pr aller chercher l'API.
       * Stocke le resultat dans resultatAPI.
       */
      const fetchWeather = async () => {
        try {
          const res = await axios.get(URLAPI);
          setResultatAPI(res.data);
          setLoading(false);
        } catch (err) {
          // faudra mieux catch les erreurs
          console.error(err);
        }
      };

      fetchWeather();
    },
    [
      //Condition de changement pr MaJ
    ]
  );

  /**
   * Si la page est en train de charger
  */
  if (loading) {
    return (
      // faudra mettre un logo de chargement
      <div className="weather">
        <h1>Météo</h1>
        <div>
          <p>Chargement</p>
        </div>
      </div>
    );
  }

  return (
    <div className="weather">
      <h1>Météo</h1>
      <CurrentWeather data={resultatAPI?.hourly} />
      <WeekWeather data={resultatAPI?.daily} />
    </div>
  );
}

/*
Ancienne Image (deprecated) : src="https://www.prevision-meteo.ch/uploads/widget/rennes_0.png"
*/
