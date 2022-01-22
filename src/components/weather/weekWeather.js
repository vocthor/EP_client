import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import "../../styles/components/weather/weekWeather.scss";

//Fct pr aller chercher l'image correspondante au temps
const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function WeekWeather({ data }) {
  //Tableau pr stocker le temps des (7) prochains jours
  const [forecastWeather, setForecast] = useState([]);

  //Mise en forme de la data en un tableau forecast
  //Attention, data est deja un tableau (@see Weather.js)
  useEffect(
    () => {
      //On decoupe data pr recuperer les champs qui nous interessent
      const forecastData = data?.map((f) => {
        const dt = new Date(f.dt * 1000);
        return {
          date: dt,
          tempMor: Math.round(f.temp.morn),
          tempEve: Math.round(f.temp.eve),
          icon: f.weather[0].icon,
          name: format(dt, "EEEE", { locale: fr }),
        };
      });
      setForecast(forecastData);
    },
    //useEffect se re-execute si data est modifiée
    [data]
  );

  return (
    <div className="weekWeather">
      {forecastWeather.map((f) => (
        <div className="weekDays">
          <p className="name">{f?.name}</p>
          <img src={getIcon(f?.icon)} height="50" width="50" />
          <p className="temp">
            {f?.tempMor}°C / {f?.tempEve}°C
          </p>
        </div>
      ))}
    </div>
  );
}
