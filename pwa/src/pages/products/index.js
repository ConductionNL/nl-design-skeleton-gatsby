import * as React from "react"
import {Avatar, Grid, GridItem} from "@mui/material";
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
import { Card } from "@gemeente-denhaag/denhaag-component-library";

// styles
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
// markup
const IndexPage = () => {
    const context = useUrlContext();

  return (
      <Layout>
        <main>
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Diensten</h1>
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Hier vind u diensten en producten waar u gebruik van kunt maken.
        </h4>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <Card
              date={new Date()}
              href="https://github.com"
              onClick={function noRefCheck() { }}
              subTitle="Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens."
              title="Verhuizen"
            />
          </Grid>

          <Grid item sm={4}>
            <Card
              date={new Date()}
              href="https://github.com"
              onClick={function noRefCheck() { }}
              subTitle="Uittreksel burgelijke stand, basisregistratie personen, VOG."
              title="Uittreksel en verklaringen"
            />
          </Grid>
          <Grid item sm={4}>
            <Card
              date={new Date()}
              href="https://github.com"
              onClick={function noRefCheck() { }}
              subTitle="Trouwen, geregistreerd partnerschap, scheiden."
              title="Trouwen, partnerschap, scheiden"
             />
          </Grid>
        </Grid>

        </main>
      </Layout>

  )
}

export default IndexPage
