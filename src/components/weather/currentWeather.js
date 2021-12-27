import React, { useEffect } from "react";

const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function CurrentWeather({ data }) {
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
    <div>
      <p>Aujourd'hui</p>
      <img src={getIcon(data?.weather[0].icon)} height="150" width="150" />
      <p>{Math.round(data?.temp)}°C</p>
      <p>{data?.weather[0].description}</p>
    </div>
  );
}
