import React from "react";

export default function Calendar({ pseudo }) {
  //URL de monADE selon le pseudo
  const URL = `http://applisjava.insa-rennes.fr/MonAde6Image/main?action=PSEUDO_RECHERCHE_AUTRE&param=0&pseudo=${pseudo}`;

  /* ATTENTION
Il n'est pas possible de redimensionner automatiquement le iframe selon son contenu
 (il faudrait mettre un script dans la page ADE)
 MAIS on peut gérer le zoom et les dimensions A LA MAIN depuis le fichier CSS
*/
  return (
    <div className="calendar">
      <h1>Emploi du temps</h1>
      <iframe className="IframeADE" src={URL} scrolling="no" />
    </div>
  );
}

//ancien (deprecated) : src="http://applisjava.insa-rennes.fr/MonAde6Image/html/images_ade/HugoLAMOUREUX5413.gif"
