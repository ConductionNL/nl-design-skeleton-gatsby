import * as React from "react"
import { Link } from "gatsby"
import {Avatar, Card, CardActionArea, CardContent, Grid} from "@mui/material";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
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
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn kluis', href: '/vault' } ]} />
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
