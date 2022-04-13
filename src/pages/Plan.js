import React from "react";
import Navigation from "../components/Navigation";
// import "../../styles/components/plan.scss";

function info(num) {
  console.log(num);
  const infoBat = document.getElementById("info");
  infoBat.innerText = "\nBâtiment " + num;
}
const About = () => {
  return (
    <div className="plan">
      <Navigation />
      <img src="../../plan_insa_zoom.jpg" alt="Plan de l'insa" height="850" />
      <div className="infos">
        <p>Cliquez sur un bâtiment pour afficher ses informations.</p>
        <p id="info"></p>
      </div>
      <button
        className="bat1"
        onClick={() => {
          info(1);
        }}
      ></button>
      <button
        className="bat2"
        onClick={() => {
          info(2);
        }}
      ></button>
      <button
        className="bat3"
        onClick={() => {
          info(3);
        }}
      ></button>
      <button
        className="bat17"
        onClick={() => {
          info(17);
        }}
      ></button>
      <button
        className="bat23"
        onClick={() => {
          info(23);
        }}
      ></button>
    </div>
  );
};

export default About;
