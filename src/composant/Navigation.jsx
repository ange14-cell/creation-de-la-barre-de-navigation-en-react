import React from 'react';
import { NavLink } from 'react-router-dom';
import nagation from './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>acceuille</li>
        </NavLink>
        <NavLink to="/About">
          <li>nos meilleurs ventes</li>
        </NavLink>
        <NavLink to="/Coachting">
          <li>proposition</li>
        </NavLink>
        <NavLink to="/Market">
          <li>ventes en promotions</li>
        </NavLink>
        <NavLink to="/Minceur">
          <li>Minceur</li>
        </NavLink>

        <NavLink to="/Vergeture">
          <li>Vergeture</li>
        </NavLink>
        <NavLink to="/Tousproduits">
          <li>tous nos produits</li>
        </NavLink>

        <NavLink to="/Compte">
          <li>compte</li>
        </NavLink>
      </ul>
      <p className="diseign"></p>
    </div>
  );
};

export default Navigation;