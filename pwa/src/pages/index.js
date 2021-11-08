import * as React from "react"
import { Avatar, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { Link } from "gatsby"
import Layout from "../components/common/layout";
import {useUrlContext} from "../context/urlContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DigiDImg from "../images/digid_button.svg";
import {
  AccountBalance,
  AccountTree,
  BusinessCenter,
  Description,
  Group, Groups,
  Person,
  PersonOutline, RecordVoiceOver
} from "@mui/icons-material";

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
        <title>Demodam</title>
          <div style={{textAlign: 'left'}}>
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Welkom</h1>
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Dit is de skeleton NL Design applicatie.
            </h4>
            <p className="utrecht-p">
              Hier kunt u verschillende NL Design tokens testen en applicaties maken waarbij NL Design gebruikt wordt.
            </p>
          <button class="utrecht-button" type="button">
            <a href="/digid/login">
              <img src={DigiDImg} width='55px' height='55px' />
              <b class="utrecht-b" style={{ textAlign: 'center', verticalAlign: 'middle', paddingLeft: '45px' }}>
                INLOGGEN
              </b>
            </a>
          </button>

          <br/>
          <br/>

          <button class="utrecht-button" type="button">
            <Link href="/cases">
              <b class="utrecht-b" style={{ verticalAlign: 'middle' }}>
                Mijn aanvragen
              </b>
            </Link>
          </button>

          <br/>
          <br/>

          <button class="utrecht-button" type="button">
            <Link href="/products">
              <b class="utrecht-b" style={{ verticalAlign: 'middle' }}>
                Diensten
              </b>
            </Link>
          </button>


            {/*<Grid container spacing={2} sx={{marginTop: '20px'}}>*/}
            {/*  */}{/* Start Verhuizen */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://verhuizen.demodam.nl'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <LocalShippingIcon sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Verhuizen*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Verhuizen */}
            {/*  */}{/* Start Begraven */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://begraven.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <AccountBalance sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Begraven*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Begraven */}
            {/*  */}{/* Start Digispoof */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://digispoof.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <Person sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Digispoof*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Digispoof */}
            {/*  */}{/* Start Huwelijksplanner */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://huwelijksplanner.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <Group sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Huwelijksplanner*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Huwelijksplanner */}
            {/*  */}{/* Start NLX */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://nlx.io/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <AccountTree sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            NLX*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Open Zaak */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://open-zaak.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <BusinessCenter sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Open Zaak*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Open Formulieren */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://openforms.maykin.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <Description sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Open Formulieren*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Open Formulieren */}
            {/*  */}{/* End Open Personen */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://open-personen.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <PersonOutline sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Open Personen*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Open Zaakbrug */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://sudwest-fryslan.github.io/OpenZaakBrug/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <Description sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Open Zaakbrug*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Open Zaakbrug */}
            {/*  */}{/* End VrijBRP */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'http://vrij-brp.demodam.nl/personen'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <Groups sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            VrijBRP*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End VrijBRP */}
            {/*  */}{/* End Signalen */}
            {/*  <Grid item xs={12} sm={6} lg={4}>*/}
            {/*    <Card>*/}
            {/*      <CardActionArea onClick={() => {window.location = 'https://signalen.demodam.nl/'}}>*/}
            {/*        <CardContent sx={{textAlign: "center"}}>*/}
            {/*          <div style={{color: "black"}}>*/}
            {/*            <RecordVoiceOver sx={{fontSize: 80}} />*/}
            {/*          </div>*/}
            {/*          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">*/}
            {/*            Signalen*/}
            {/*          </h4>*/}
            {/*        </CardContent>*/}
            {/*      </CardActionArea>*/}
            {/*    </Card>*/}
            {/*  </Grid>*/}
            {/*  */}{/* End Signalen */}
            {/*</Grid>*/}
          </div>
        </main>
      </Layout>

  )
}

export default IndexPage
