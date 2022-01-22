import React from "react";
import IframeResizer from "iframe-resizer-react";

export default function Calendar({ pseudo }) {

  const URL = `http://applisjava.insa-rennes.fr/MonAde6Image/main?action=PSEUDO_RECHERCHE_AUTRE&param=0&pseudo=${pseudo}`;

  //ATTENTION les dimensions de l'itemframe
  //sont MALS FAITES (faudrait utiliser IframeResizer)
  //TODO
  return (
    <div className="calendar">
      <h1>Emploi du temps</h1>
      <IframeResizer log src={URL} height="870px" width="1550px" />
    </div>
  );
}

//ancien (deprecated) : src="http://applisjava.insa-rennes.fr/MonAde6Image/html/images_ade/HugoLAMOUREUX5413.gif"
