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
                <span className="utrecht-breadcrumb__text">Identiteit</span>
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Identiteit</h1>
      </main>
    </Layout>
    </>

}
export default Index
