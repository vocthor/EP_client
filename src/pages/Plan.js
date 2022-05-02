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
        className="btn bat1"
        onClick={() => {
          info("batiment", 1);
        }}
      ></button>
      <button
        className="btn bat2"
        onClick={() => {
          info("batiment", 2);
        }}
      ></button>
      <button
        className="btn bat3"
        onClick={() => {
          info("batiment", 3);
        }}
      ></button>
      <button
        className="btn bat4"
        onClick={() => {
          info("batiment", 4);
        }}
      ></button>
      <button
        className="btn bat5"
        onClick={() => {
          info("batiment", 5);
        }}
      ></button>
      <button
        className="btn bat6"
        onClick={() => {
          info("batiment", 6);
        }}
      ></button>
      <button
        className="btn bat7"
        onClick={() => {
          info("batiment", 7);
        }}
      ></button>
      <button
        className="btn bat8"
        onClick={() => {
          info("batiment", 8);
        }}
      ></button>
      <button
        className="btn bat9"
        onClick={() => {
          info("batiment", 9);
        }}
      ></button>
      <button
        className="btn bat10"
        onClick={() => {
          info("batiment", 10);
        }}
      ></button>
      <button
        className="btn bat11"
        onClick={() => {
          info("batiment", 11);
        }}
      ></button>
      <button
        className="btn bat12"
        onClick={() => {
          info("batiment", 12);
        }}
      ></button>
      <button
        className="btn bat13"
        onClick={() => {
          info("batiment", 13);
        }}
      ></button>
      <button
        className="btn bat14"
        onClick={() => {
          info("batiment", 14);
        }}
      ></button>
      <button
        className="btn bat15"
        onClick={() => {
          info("batiment", 15);
        }}
      ></button>
      <button
        className="btn bat16"
        onClick={() => {
          info("batiment", 16);
        }}
      ></button>
      <button
        className="btn bat17"
        onClick={() => {
          info("batiment", 17);
        }}
      ></button>
      <button
        className="btn bat18"
        onClick={() => {
          info("batiment", 18);
        }}
      ></button>
      <button
        className="btn bat19"
        onClick={() => {
          info("batiment", 19);
        }}
      ></button>
      <button
        className="btn bat20"
        onClick={() => {
          info("batiment", 20);
        }}
      ></button>
      <button
        className="btn bat21"
        onClick={() => {
          info("batiment", 21);
        }}
      ></button>
      <button
        className="btn bat22"
        onClick={() => {
          info("batiment", 22);
        }}
      ></button>
      <button
        className="btn bat23"
        onClick={() => {
          info("batiment", 23);
        }}
      ></button>
      <button
        className="btn bat24"
        onClick={() => {
          info("batiment", 24);
        }}
      ></button>
      <button
        className="btn busINSA"
        onClick={() => {
          info("bus", "Beaulieu - INSA");
        }}
      ></button>
      <button
        className="btn busRU"
        onClick={() => {
          info("bus", "Beaulieu - RU");
        }}
      ></button>
      <button
        className="btn busIUT"
        onClick={() => {
          info("bus", "IUT");
        }}
      ></button>
    </div>
  );
};

export default About;
