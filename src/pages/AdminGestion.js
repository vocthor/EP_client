import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import User from "../components/user";
import Axios from "axios";

const Admin = () => {
  const [user, setUser] = useState({});
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    recupDataUser();
    recupList();
    console.log("test");
    // console.log(listUser);
  }, []);

  const recupList = () => {
    Axios.post("http://localhost:3001/getUsersList").then((res) => {
      if (res.data.error) {
        console.log("error");
      } else {
        setListUser(res.data);
      }
    });
  };

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

  return (
    <div className="admin">
      <Navigation />
      {/* <button onClick={recupList}>Bonjour test</button> */}
      <ul>
        {user.role == "admin"
          ? listUser.map((u) => <User id={u.id} user={u}></User>)
          : ""}
      </ul>
    </div>
  );
};

export default Admin;
