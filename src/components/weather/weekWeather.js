import React, { useEffect } from "react";

export default function WeekWeather({ forecast }) {
  useEffect(() => {}, [forecast]);
  return (
    <div>
      {forecast.map((f) => (
        <div>
          <p>{f.temp.day}</p>
        </div>
      ))}
    </div>
  );
}
