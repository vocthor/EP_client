import React, { useEffect, useState } from "react";

import "../../styles/components/weather/currentWeather.scss";

//Fct pr aller chercher l'image correspondante au temps
const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function CurrentWeather({ data }) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    console.log(currentWeather);
    const currentData = data?.map((f) => {
      const dt = new Date(f.dt * 1000);
      return {
        date: dt,
        hour: dt.getHours(),
        temp: Math.round(f.temp),
        icon: f.weather[0].icon,
      };
    });
    setCurrentWeather(currentData.slice(1, 6)); //on garde que les 5 prochaines heures
  }, [data]);

  if (data === undefined) {
    //si data est null
    return (
      <div>
        <p>Erreur de chargement</p>
      </div>
    );
  }

  return (
    /*
    <div className="currentWeather">
      <h2 className="todayDate">Aujourd'hui</h2>
      <img src={getIcon(data?.weather[0].icon)} height="150" width="150" />
      <h3 className="todayTemp">{Math.round(data?.temp)}°C</h3>
      <h3 className="todaySky">{data?.weather[0].description}</h3>
    </div>
  */
    <div className="currentWeather">
      <h1>Aujourd'hui</h1>
      <div className="hourCards">
      {currentWeather.map((f) => (
        <div className="hourWeather">
          <h2>{f?.hour}h</h2>
          <img src={getIcon(f?.icon)} className="icon" />
          <p>{f?.temp}°C</p>
        </div>
      ))}
      </div>
    </div>
  );
}
