import React, { useState } from "react";

export default function Calendar () {
  const [cal, setCal] = useState([]);
  return (
    <div className="calendar">
      <h1>Emploi du temps</h1>
      <img
        src="html/images_ade/vocthor5698.gif"
        height="450"
        width="450"
      />
    </div>
  );
};


//ancien (deprecated) : src="http://applisjava.insa-rennes.fr/MonAde6Image/html/images_ade/HugoLAMOUREUX5413.gif" 

