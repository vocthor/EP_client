import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>

      <NavLink exact to="/plan" activeClassName="nav-active">
        Plan
      </NavLink>
      <NavLink exact to="/salles-tp" activeClassName="nav-active">
        Salles de TP
      </NavLink>
      <NavLink exact to="/annonces" activeClassName="nav-active">
        Annonces
      </NavLink>
      <NavLink exact to="/compte" activeClassName="nav-active">
        Compte
      </NavLink>
    </div>
  );
};

export default Navigation;
