// 2 imports pour la date
import { format } from "date-fns";
import { fr } from "date-fns/locale";
// import du style
import "../../styles/components/ephemeride.scss";

// fonction fournissant la date actuelle sous leformat : jour chiffre mois année
function date_ajd() {
  return format(new Date(), "EEEE d MMMM y", { locale: fr });
}

// fonction fournissant la saint du jour sous le format : saint(e) François(e)
function ephemeride_ajd() {
  var json = require("./ephemeride.json");
  let mois = format(new Date(), "MMMM").toLowerCase();
  let jour = format(new Date(), "d");
  return json[mois][jour - 1][1].toLowerCase() + " " + json[mois][jour - 1][0];
}

// fonction créant la phrase affichée sur le home
function phrase() {
  return (
    "Nous sommes le " +
    date_ajd() +
    " et nous fêtons la " +
    ephemeride_ajd() +
    " !"
  );
}

// function loadJson() {
//   var requestURL = "https://nominis.cef.fr/json/saintdujour.php";
//   var request = new XMLHttpRequest();
//   request.open("GET", requestURL);
//   request.responseType = "json";
//   request.send();
//   request.onload = function () {
//     var data_json = request.response;
//     console.log("Load ok : " + data_json.response.saintdujour.nom);
//   };
// }
const Ephemeride = () => {
  return (
    <div className="ephemeride">
      <h4>{phrase()}</h4>
    </div>
  );
};

export default Ephemeride;
