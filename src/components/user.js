import React from "react";
import Axios from "axios";

export default function User({ user }) {
  /* Fonction appelée lorsqu'on veut changer le rôle de quelqu'un */
  const changeRole = (role) => {
    //Appel au back
    Axios.post("http://localhost:3001/modifRole", {
      id: user.id,
      role: role,
      email: user.email,
    }).then((res) => {
      sessionStorage.removeItem("accessToken"); //déconnexion pour avoir un nouveau token avec les bonnes valeurs
    });
  };
  return (
    <div className="user">
      <div className="userInfo">
        <h3>
          {user.prenom} {user.nom}, {user.email}
        </h3>
      </div>
      <div className="roleUser">
        <h3>Rôle: {user.role}</h3>
        <button onClick={() => changeRole("moderator")}>
          Promouvoir Modérateur
        </button>
        <button onClick={() => changeRole("admin")}> Promouvoir Admin</button>
        <button onClick={() => changeRole("user")}>Dégrader Utilisateur</button>
      </div>
    </div>
  );
}
