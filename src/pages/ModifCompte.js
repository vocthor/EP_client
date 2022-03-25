import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";

const ModifCompte = () => {
  const [user, setUser] = useState({});
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [validFields, setValidFields] = useState(true);

  /* Fonction qui permets de récupérer les données associées à l'id connecté et lets mets dans la const user*/
  const recupDataUser = () => {
    Axios.post(
      "http://localhost:3001/getUserData",
      { variable: 1 }, // je suis obligé de mettre ça sinon il y a un probleme avec le header mais en soit cette ligne est inutile
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      }
    ).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    recupDataUser();
  }, [user.prenom]);

  /* Fonction appelée lorsqu'on veut changer le prénom de quelqu'un */
  const changePrenom = () => {
    let valid = true;
    //Appel au back
    Axios.post("http://localhost:3001/modifPrenom", {
      id: user.id,
      prenom: prenom,
      email: user.email,
    })
      .then((res) => {
        if (res.data == "Invalid fields") {
          setValidFields(false);
          valid = false;
        } else {
          setValidFields(true);
          valid = true;
        }
      })
      .then(() => {
        if (valid) {
          document.getElementById("prenom").value = "";
          sessionStorage.removeItem("accessToken"); //déconnexion pour avoir un nouveau token avec les bonnes valeurs
        }
      });
  };

  /* Fonction appelée lorsqu'on veut changer le Nom de quelqu'un */
  const changeNom = () => {
    let valid = true;
    //Appel au back
    Axios.post("http://localhost:3001/modifNom", {
      id: user.id,
      nom: nom,
      email: user.email,
    })
      .then((res) => {
        if (res.data == "Invalid fields") {
          setValidFields(false);
          valid = false;
        } else {
          setValidFields(true);
          valid = true;
        }
      })
      .then(() => {
        if (valid) {
          document.getElementById("nom").value = "";
          sessionStorage.removeItem("accessToken"); //déconnexion pour avoir un nouveau token avec les bonnes valeurs
        }
      });
  };

  /* Fonction appelée lorsqu'on veut changer le pseudo de quelqu'un */
  const changePseudo = () => {
    let valid = true;
    //Appel au back

    Axios.post("http://localhost:3001/modifPseudo", {
      id: user.id,
      pseudo: pseudo,
      email: user.email,
    })
      .then((res) => {
        if (res.data == "Invalid fields") {
          setValidFields(false);
          valid = false;
        } else {
          setValidFields(true);
          valid = true;
        }
      })
      .then(() => {
        if (valid) {
          document.getElementById("pseudo").value = "";
          sessionStorage.removeItem("accessToken"); //déconnexion pour avoir un nouveau token avec les bonnes valeurs
        }
      });
  };

  /* Fonction appelée lorsqu'on veut changer l'adresse mail de quelqu'un */
  const changeEmail = () => {
    let valid = true;
    //Appel au back

    Axios.post("http://localhost:3001/modifEmail", {
      id: user.id,
      nouvemail: email,
      email: user.email,
    })
      .then((res) => {
        if (res.data == "Invalid fields") {
          setValidFields(false);
          valid = false;
        } else {
          setValidFields(true);
          valid = true;
        }
      })
      .then(() => {
        if (valid) {
          document.getElementById("email").value = "";
          sessionStorage.removeItem("accessToken"); //déconnexion pour avoir un nouveau token avec les bonnes valeurs
        }
      });
  };
  return (
    <div className="modifCompte">
      <Navigation />
      <div className="Form">
        <div className="FormRegister">
          <h1>Modifier vos données personnelles</h1>

          <div className="SousForm">
            <label>Prenom actuel : {user.prenom}</label>
            <input
              type="text"
              id="prenom"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <button onClick={changePrenom}>Modifier</button>
          </div>
          <div className="SousForm">
            <label>Nom actuel : {user.nom}</label>
            <input
              type="text"
              id="nom"
              onChange={(e) => setNom(e.target.value)}
            />
            <button onClick={changeNom}>Modifier</button>
          </div>
          <div className="SousForm">
            <label>Pseudo ENT actuel : {user.pseudo}</label>
            <input
              type="text"
              id="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
            />
            <button onClick={changePseudo}>Modifier</button>
          </div>
          <div className="SousForm">
            <label>Email actuel : {user.email}</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={changeEmail}>Modifier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifCompte;
