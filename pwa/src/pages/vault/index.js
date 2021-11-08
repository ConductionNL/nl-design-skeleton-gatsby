import * as React from "react"
import {Avatar, Card, CardActionArea, CardContent, Grid} from "@mui/material";
import Layout from "../../components/common/layout";
import {useUrlContext} from "../../context/urlContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  AccountBalance,
  AccountTree,
  BusinessCenter,
  Description,
  Group, Groups,
  Person,
  PersonOutline, RecordVoiceOver
} from "@mui/icons-material";

function Index() {

  return <>
    <Layout>
      <main>
        <nav className="utrecht-breadcrumb">
          <ol className="utrecht-breadcrumb__list">
            <li className="utrecht-breadcrumb__item">
              <a className="utrecht-breadcrumb__link utrecht-breadcrumb__link--focus utrecht-link utrecht-link--focus"
                 href="/">
                <span className="utrecht-breadcrumb__text">Home</span>
              </a>
            </li>
            <li className="utrecht-breadcrumb__item">
              <a className="utrecht-breadcrumb__link utrecht-link" href="/vault">
                <span className="utrecht-breadcrumb__text">Mijn kluis</span>
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Mijn kluis</h1>
        <div className="utrecht-html">
          <table lang="nl" summary="Overzicht van de stemmen voor en tegen het betaald parkeren." className="">
            <caption>...</caption>
            <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Aangemaakt op</th>
              <th scope="col">Pdf</th>
              <th scope="col">QR</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Locatie A</td>
              <td>53</td>
              <td>113</td>
              <td>113</td>
            </tr>
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  </>

}
export default Index
