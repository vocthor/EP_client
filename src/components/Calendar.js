import React, { useState } from "react";
import axios from "axios";

const Calendar = () => {
  const [cal, setCal] = useState([]);
  return (
    <div className="calendar">
      <h1>Emploi du temps</h1>
      <img
        src="http://applisjava.insa-rennes.fr/MonAde6Image/html/images_ade/HugoLAMOUREUX5413.gif"
        alt="ADE Campus"
        height="450"
      />
    </div>
  );
};

export default Calendar;
