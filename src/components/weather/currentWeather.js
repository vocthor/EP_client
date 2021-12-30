import React, { useEffect, useState } from "react";

import "../../styles/components/weather/currentWeather.scss";

//Fct pr aller chercher l'image correspondante au temps
const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function CurrentWeather({ data }) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {}, [data]);

  if (!data) {
    //si data est null
    return (
      <div>
        <p>Erreur de chargement</p>
      </div>
    );
  }

  return (
    <div className="currentWeather">
      <h2 className="todayDate">Aujourd'hui</h2>
      <img src={getIcon(data?.weather[0].icon)} height="150" width="150" />
      <h3 className="todayTemp">{Math.round(data?.temp)}°C</h3>
      <h3 className="todaySky">{data?.weather[0].description}</h3>
    </div>
  );
}
