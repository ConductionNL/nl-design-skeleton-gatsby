import * as React from "react"
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
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn gegevens', href: '/data' }]} />
        <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Identiteit</h1>
      </main>
    </Layout>
    </>

}
export default Index
