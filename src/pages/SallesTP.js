import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import SalleTP from "../components/SalleTP";
import Axios from "axios";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const SallesTP = () => {
  const [salles, setSalles] = useState([]);
  let items2 = [];
  let listeCours = [];

  /* Lignes de la timeline : les salles */
  const groups = [
    { id: 1, title: "INF-ECHIQUIER" },
    { id: 2, title: "INF-EAUX : 118" },
    { id: 3, title: "INF-PC3 : 124" },
    { id: 4, title: "INF-BORDEAUX : 128" },
    { id: 5, title: "INF-PC2 : 134" },
    { id: 6, title: "INF-PC1 : 138" },
    { id: 7, title: "INF-016 (TD INFO)" },
    { id: 8, title: "INF-008 " },
  ];

  //Récupère les données ADE au chargement
  useEffect(() => {
    RecupTPBack();
  }, []);

  /* Ajoute les cours dans le bon format dans items2 pour l'affichage */
  const TraitementBack = () => {
    let ajout, match;
    for (let i = 1; i < listeCours.length; i++) {
      ajout = new Object();
      ajout.id = i;
      //Association à la bonne salle
      if (listeCours[i].location.includes("INF-ECHIQUIER")) ajout.group = 1;
      if (listeCours[i].location.includes("INF-EAUX")) ajout.group = 2;
      if (listeCours[i].location.includes("INF-PC3")) ajout.group = 3;
      if (listeCours[i].location.includes("INF-BORDEAUX")) ajout.group = 4;
      if (listeCours[i].location.includes("INF-PC2")) ajout.group = 5;
      if (listeCours[i].location.includes("INF-PC1")) ajout.group = 6;
      if (listeCours[i].location.includes("INF-016")) ajout.group = 7;
      if (listeCours[i].location.includes("INF-008")) ajout.group = 8;

      ajout.title = listeCours[i].summary;
      /* Conversion des dates dans le bon format */
      match = listeCours[i].dtstart.match(
        /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)/
      );
      //Ajout de la date de début
      ajout.start_time = new Date(
        RegExp.$1,
        parseInt(RegExp.$2) - 1,
        RegExp.$3,
        parseInt(RegExp.$4) + 1,
        RegExp.$5,
        RegExp.$6
      );
      match = listeCours[i].dtend.match(
        /^(\d{4})(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)/
      );
      //Ajout de la date de fin
      ajout.end_time = new Date(
        RegExp.$1,
        parseInt(RegExp.$2) - 1,
        RegExp.$3,
        parseInt(RegExp.$4) + 1,
        RegExp.$5,
        RegExp.$6
      );
      items2[i - 1] = ajout;
    }
  };

  //Récupère les données de ADE Campus : une liste d'objets qui comportent les noms des cours, les dates de débuts et fin et la salle associée
  const RecupTPBack = () => {
    Axios.post("http://localhost:3001/SallesTpLibres").then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        listeCours = res.data;
        TraitementBack();
      }
    });
  };

  return (
    <div className="SallesTP">
      <Navigation />
      {
        <Timeline
          groups={groups}
          items={items2}
          defaultTimeStart={moment().add(-1, "hour")}
          defaultTimeEnd={moment().add(7, "hour")}
          sidebarWidth={180}
        />
      }
    </div>
  );
};

export default SallesTP;
