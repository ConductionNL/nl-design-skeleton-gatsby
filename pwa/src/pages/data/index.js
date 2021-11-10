import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import { Grid } from "@mui/material";
import ActionMenu from "../../components/common/actionMenu";
import { useUserContext } from "../../context/userContext";
import { useUrlContext } from "../../context/urlContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Paragraph, AccordionDetails } from "@gemeente-denhaag/denhaag-component-library";

function Index() {
  let userContext = useUserContext();
  let context = useUrlContext();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userContext.user !== null) {
        getPerson();
        //getDossiers();
      }
    }
  }, []);

  const getPerson = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn + "?expand=ouders,kinderen", {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
          getPersonWithoutExpand();
        } else {
          setUser(data);
        }
      });
  }

  const getPersonWithoutExpand = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        setUser(data);
      });
  }

  return <>
    <Layout>
      <main>
        <Grid container>
          <Grid item sm={3}>
            <ActionMenu />
          </Grid>
          <Grid item sm={9}>

            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn gegevens', href: '/data' }]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Identiteit</h1>
            <br /><br />

                  {
                    user !== undefined && user !== null &&
                      <>
                        <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
                        <br />
                        <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Persoonlijke gegevens</h3>
                        {
                          user !== null && user.naam !== undefined && user.naam.voornamen &&
                          <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>{user.naam.voornamen}</span></h5>
                        }
                        {
                          user !== null && user.naam !== undefined && user.naam.geslachtsnaam &&
                          <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>{user.naam.geslachtsnaam}</span></h5>
                        }
                        {
                          user !== null && user !== undefined && user.geslachtsaanduiding !== undefined &&
                          <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>{user.geslachtsaanduiding}</span></h5>
                        }
                        <br />
                      </>
                  }

                  {
                    user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].kinderen !== undefined && user['_embedded'].kinderen !== null &&
                    <>
                      <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
                      <br />
                      <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Kinderen</h3>
                      {
                        user['_embedded'].kinderen.map((row) => (
                          <>
                            {
                              row.naam.voornamen !== undefined && row.naam.voornamen !== null &&
                              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>{row.naam.voornamen}</span></h5>
                            }
                            {
                              row.naam.voorvoegsel !== undefined && row.naam.voorvoegsel !== null ?
                                <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>{row.naam.voorvoegsel + ' ' + row.naam.geslachtsnaam}</span></h5> :
                                <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>{row.naam.geslachtsnaam}</span></h5>
                            }
                            {
                              row.geslachtsaanduiding !== undefined && row.geslachtsaanduiding !== null &&
                              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>{row.geslachtsaanduiding}</span></h5>
                            }
                            <br />
                          </>
                        ))
                      }
                    </>
                  }

                  {
                    user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].ouders !== undefined && user['_embedded'].ouders !== null &&
                    <>
                      <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
                      <br />
                      <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Ouders</h3>
                      {
                        user['_embedded'].ouders.map((row) => (
                          <>
                            {
                              row.naam.voornamen !== undefined && row.naam.voornamen !== null &&
                              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>{row.naam.voornamen}</span></h5>
                            }
                            {
                              row.naam.voorvoegsel !== undefined && row.naam.voorvoegsel !== null ?
                                <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>{row.naam.voorvoegsel + ' ' + row.naam.geslachtsnaam}</span></h5> :
                                <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>{row.naam.geslachtsnaam}</span></h5>
                            }
                            {
                              row.geslachtsaanduiding !== undefined && row.geslachtsaanduiding !== null &&
                              <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>{row.geslachtsaanduiding}</span></h5>
                            }
                            <br />
                          </>
                        ))
                      }
                    </>
                  }

                  {
                    user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null &&
                    <>
                      <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
                      <br />
                      <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Woonadres</h3>
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.adresregel1 !== undefined && user.verblijfplaats.adresregel1 !== null &&
                        <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Straat: <span style={{ textAlign: "right", float: "right" }}>{user.verblijfplaats.adresregel1}</span></h5>
                      }
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.woonplaats !== null &&
                        <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Plaats: <span style={{ textAlign: "right", float: "right" }}>{user.verblijfplaats.woonplaats}</span></h5>
                      }
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.datumAanvangAdreshouding !== null &&
                        <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Vanaf: <span style={{ textAlign: "right", float: "right" }}>{user.verblijfplaats.datumAanvangAdreshouding}</span></h5>
                      }
                      <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Aantal bewoners: <span style={{ textAlign: "right", float: "right" }}>3</span></h5>
                      <br />
                    </>
                  }

                  <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
                  <br />
                  <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Reisdocumenten</h3>
                  <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Paspoort: <span style={{ textAlign: "right", float: "right" }}>16561</span></h5>
                  <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >ID: <span style={{ textAlign: "right", float: "right" }}>65321684</span></h5>



                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Paragraph>Click me to collapse me!</Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Paragraph>
                    </AccordionDetails>
                  </Accordion>

                </Grid>
        </Grid>
      </main>
    </Layout>
    </>

}
    export default Index
