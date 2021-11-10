import * as React from "react";
import { Link } from "gatsby";


export default function ActionMenu() {

  return (
    <nav className="utrecht-sidenav">
      <ul className="utrecht-sidenav__list">
        <li className="utrecht-sidenav__item">
          <Link className="utrecht-sidenav__link" to="/products">Diensten</Link><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <Link className="utrecht-sidenav__link" to="/cases">Mijn aanvragen</Link><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <Link className="utrecht-sidenav__link" to="/data">Mijn gegevens</Link><span></span>
        </li>
        <li className="utrecht-sidenav__item">
          <Link className="utrecht-sidenav__link" to="/vault">Mijn kluis</Link><span></span>
        </li>
        {/*<li className="utrecht-sidenav__item utrecht-sidenav__item--has-children">*/}
        {/*  <Link className="utrecht-sidenav__link utrecht-sidenav__link--current utrecht-sidenav__link--has-children" href="#">Crumb #4</Link><span></span>*/}
        {/*  <ul className="utrecht-sidenav__list utrecht-sidenav__list--child">*/}
        {/*    <li className="utrecht-sidenav__item utrecht-sidenav__item--child">*/}
        {/*      <Link className="utrecht-sidenav__link utrecht-sidenav__link--child" href="#">Child 1</Link>*/}
        {/*    </li>*/}
        {/*    <li className="utrecht-sidenav__item utrecht-sidenav__item--child">*/}
        {/*      <Link className="utrecht-sidenav__link utrecht-sidenav__link--child utrecht-sidenav__link--focus utrecht-sidenav__link--focus-visible" href="#">Child 2 :focus</Link>*/}
        {/*    </li>*/}
        {/*    <li className="utrecht-sidenav__item utrecht-sidenav__item--child">*/}
        {/*      <Link className="utrecht-sidenav__link utrecht-sidenav__link--child" href="#">Child 3</Link>*/}
        {/*    </li>*/}
        {/*  </ul><span></span>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}
