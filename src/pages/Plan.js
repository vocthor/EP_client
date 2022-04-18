import React from "react";
import Navigation from "../components/Navigation";
// import "../../styles/components/plan.scss";

function info(type, num) {
  let json = require("./infos-plan.json");
  let infoBat = document.getElementById("info");
  const elem =
    type === "bus" ? "\nArrêt de bus " + num : "\nBâtiment " + num + " :\n";
  infoBat.innerText = elem + json[type][num];
}

const About = () => {
  return (
    <div className="plan">
      <Navigation />
      <img
        className="plan_insa"
        src="../../plan_insa.jpg"
        alt="Plan de l'insa"
      />
      <img className="lgd1" src="../../ep_legende1.jpg" alt="Légende 1" />
      <img className="lgd2" src="../../ep_legende2.jpg" alt="Légende 2" />
      <div className="infos">
        <p>Cliquez sur un bâtiment pour afficher ses informations.</p>
        <p id="info"></p>
      </div>
      <button
        className="bat1"
        onClick={() => {
          info("batiment", 1);
        }}
      ></button>
      <button
        className="bat2"
        onClick={() => {
          info("batiment", 2);
        }}
      ></button>
      <button
        className="bat3"
        onClick={() => {
          info("batiment", 3);
        }}
      ></button>
      <button
        className="bat4"
        onClick={() => {
          info("batiment", 4);
        }}
      ></button>
      <button
        className="bat5"
        onClick={() => {
          info("batiment", 5);
        }}
      ></button>
      <button
        className="bat6"
        onClick={() => {
          info("batiment", 6);
        }}
      ></button>
      <button
        className="bat7"
        onClick={() => {
          info("batiment", 7);
        }}
      ></button>
      <button
        className="bat8"
        onClick={() => {
          info("batiment", 8);
        }}
      ></button>
      <button
        className="bat9"
        onClick={() => {
          info("batiment", 9);
        }}
      ></button>
      <button
        className="bat10"
        onClick={() => {
          info("batiment", 10);
        }}
      ></button>
      <button
        className="bat11"
        onClick={() => {
          info("batiment", 11);
        }}
      ></button>
      <button
        className="bat12"
        onClick={() => {
          info("batiment", 12);
        }}
      ></button>
      <button
        className="bat13"
        onClick={() => {
          info("batiment", 13);
        }}
      ></button>
      <button
        className="bat14"
        onClick={() => {
          info("batiment", 14);
        }}
      ></button>
      <button
        className="bat15"
        onClick={() => {
          info("batiment", 15);
        }}
      ></button>
      <button
        className="bat16"
        onClick={() => {
          info("batiment", 16);
        }}
      ></button>
      <button
        className="bat17"
        onClick={() => {
          info("batiment", 17);
        }}
      ></button>
      <button
        className="bat18"
        onClick={() => {
          info("batiment", 18);
        }}
      ></button>
      <button
        className="bat19"
        onClick={() => {
          info("batiment", 19);
        }}
      ></button>
      <button
        className="bat20"
        onClick={() => {
          info("batiment", 20);
        }}
      ></button>
      <button
        className="bat21"
        onClick={() => {
          info("batiment", 21);
        }}
      ></button>
      <button
        className="bat22"
        onClick={() => {
          info("batiment", 22);
        }}
      ></button>
      <button
        className="bat23"
        onClick={() => {
          info("batiment", 23);
        }}
      ></button>
      <button
        className="bat24"
        onClick={() => {
          info("batiment", 24);
        }}
      ></button>
      <button
        className="busINSA"
        onClick={() => {
          info("bus", "Beaulieu - INSA");
        }}
      ></button>
      <button
        className="busRU"
        onClick={() => {
          info("bus", "Beaulieu - RU");
        }}
      ></button>
      <button
        className="busIUT"
        onClick={() => {
          info("bus", "IUT");
        }}
      ></button>
    </div>
  );
};

export default About;
