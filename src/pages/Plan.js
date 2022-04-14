import React from "react";
import Navigation from "../components/Navigation";
// import "../../styles/components/plan.scss";

function info(num) {
  let json = require("./batiments.json");
  let infoBat = document.getElementById("info");
  infoBat.innerText = "\nBâtiment " + num + " :" + json[num];
}

function infoBus(nom) {
  let json = require("./bus.json");
  let infoBus = document.getElementById("info");
  infoBus.innerText =
    "\nArrêt de bus " +
    json[nom] +
    "\nVous pouvez consulter les horaires de passage dans l'onglet 'Acceuil.'";
}

const About = () => {
  return (
    <div className="plan">
      <Navigation />
      <img src="../../plan_insa.jpg" alt="Plan de l'insa" height="850" />
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
        className="bat4"
        onClick={() => {
          info(4);
        }}
      ></button>
      <button
        className="bat5"
        onClick={() => {
          info(5);
        }}
      ></button>
      <button
        className="bat6"
        onClick={() => {
          info(6);
        }}
      ></button>
      <button
        className="bat7"
        onClick={() => {
          info(7);
        }}
      ></button>
      <button
        className="bat8"
        onClick={() => {
          info(8);
        }}
      ></button>
      <button
        className="bat9"
        onClick={() => {
          info(9);
        }}
      ></button>
      <button
        className="bat10"
        onClick={() => {
          info(10);
        }}
      ></button>
      <button
        className="bat11"
        onClick={() => {
          info(11);
        }}
      ></button>
      <button
        className="bat12"
        onClick={() => {
          info(12);
        }}
      ></button>
      <button
        className="bat13"
        onClick={() => {
          info(13);
        }}
      ></button>
      <button
        className="bat14"
        onClick={() => {
          info(14);
        }}
      ></button>
      <button
        className="bat15"
        onClick={() => {
          info(15);
        }}
      ></button>
      <button
        className="bat16"
        onClick={() => {
          info(16);
        }}
      ></button>
      <button
        className="bat17"
        onClick={() => {
          info(17);
        }}
      ></button>
      <button
        className="bat18"
        onClick={() => {
          info(18);
        }}
      ></button>
      <button
        className="bat19"
        onClick={() => {
          info(19);
        }}
      ></button>
      <button
        className="bat20"
        onClick={() => {
          info(20);
        }}
      ></button>
      <button
        className="bat21"
        onClick={() => {
          info(21);
        }}
      ></button>
      <button
        className="bat22"
        onClick={() => {
          info(22);
        }}
      ></button>
      <button
        className="bat23"
        onClick={() => {
          info(23);
        }}
      ></button>
      <button
        className="bat24"
        onClick={() => {
          info(24);
        }}
      ></button>
      <button
        className="busINSA"
        onClick={() => {
          infoBus("INSA");
        }}
      ></button>
      <button
        className="busRU"
        onClick={() => {
          infoBus("RU");
        }}
      ></button>
      <button
        className="busIUT"
        onClick={() => {
          infoBus("IUT");
        }}
      ></button>
    </div>
  );
};

export default About;
