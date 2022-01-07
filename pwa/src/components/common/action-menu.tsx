import * as React from "react";
import {FaAlignJustify} from "react-icons/all";


export default function ActionMenu() {
  return (
    <nav className="utrecht-sidenav">
      <input type="checkbox" id="sidenav"/>
      <label className="utrecht-sidenav-btn" htmlFor="sidenav">
        <i className="fas fa-bars"/>
      </label>
      <ul className="utrecht-sidenav__list">
        <li className="utrecht-sidenav-item">
          <a className="utrecht-sidenav__link" href="#">
            Diensten
          </a>
        </li>
        <li className="utrecht-sidenav-item">
          <a className="utrecht-sidenav__link" href="#">
            Mijn aanvragen
          </a>
        </li>
        <li className="utrecht-sidenav-item">
          <a className="utrecht-sidenav__link" href="#">
            Mijn gegevens
          </a>
        </li>
        <li className="utrecht-sidenav-item">
          <a className="utrecht-sidenav__link" href="#">
            Mijn kluis
          </a>
        </li>
      </ul>
    </nav>
  );
}
