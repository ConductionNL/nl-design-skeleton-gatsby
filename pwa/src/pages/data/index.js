import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import { Grid } from "@mui/material";
import ActionMenu from "../../components/common/actionMenu";
import { useUrlContext } from "../../context/urlContext";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Paragraph, AccordionDetails } from "@gemeente-denhaag/denhaag-component-library";
import { getUser, isLoggedIn, logout } from "../../services/auth";

function Index() {
  let context = useUrlContext();

  const [user, setUser] = useState(null);

  console.log(getUser());

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (getUser() !== null) {
        getPerson();
        //getDossiers();
      }
    }
  }, []);

  const getPerson = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + getUser().email + "?expand=ouders,kinderen", {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        console.log("Data: ");
        console.log(data.verblijfplaats);
        if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
          getPersonWithoutExpand();
        } else {
          setUser(data);
        }
      });
  }

  const getPersonWithoutExpand = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + getUser().email, {
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

            <Breadcrumbs items={[{ name: 'Home/', href: '/' }, { name: 'Mijn gegevens' }]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Identiteit</h1>
            <br /><br />

            {
              user !== undefined && user !== null &&
              <><Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Persoonlijke gegevens</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ width: "100% !important" }}>
                    {
                      user !== null && user.naam !== undefined && user.naam.voornamen &&
                      <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Voornamen <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.naam.voornamen}</span></h5>
                    }
                    {
                      user !== null && user.naam !== undefined && user.naam.geslachtsnaam &&
                      <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Achternaam <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.naam.geslachtsnaam}</span></h5>
                    }
                    {
                      user !== null && user !== undefined && user.geslachtsaanduiding !== undefined &&
                      <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Geslacht <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.geslachtsaanduiding}</span></h5>
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
                <br />
              </>
            }

            {
              user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].kinderen !== undefined && user['_embedded'].kinderen !== null &&
              <><Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Kinderen</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={{ width: "100% !important" }}>
                    {
                      user['_embedded'].kinderen.map((row) => (
                        <>
                          {
                            row.naam.voornamen !== undefined && row.naam.voornamen !== null &&
                            <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Voornamen <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.voornamen}</span></h5>
                          }
                          {
                            row.naam.voorvoegsel !== undefined && row.naam.voorvoegsel !== null ?
                            <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Achternaam <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.voorvoegsel + ' ' + row.naam.geslachtsnaam}</span></h5> :
                            <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Achternaam <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.geslachtsnaam}</span></h5>

                          }
                          {
                            row.geslachtsaanduiding !== undefined && row.geslachtsaanduiding !== null &&
                            <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Geslacht <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.geslachtsaanduiding}</span></h5>
                          }
                          <br />
                        </>
                      ))
                    }
                  </div>
                </AccordionDetails>
              </Accordion>
                <br />
              </>
            }

            {
              user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].ouders !== undefined && user['_embedded'].ouders !== null &&
              <>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Ouders</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ width: "100% !important" }}>
                      {
                        user['_embedded'].ouders.map((row) => (
                          <>
                            {
                              row.naam.voornamen !== undefined && row.naam.voornamen !== null &&
                              <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Voornamen <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.voornamen}</span></h5>
                            }
                            {
                              row.naam.voorvoegsel !== undefined && row.naam.voorvoegsel !== null ?
                                <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Achternaam <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.voorvoegsel + ' ' + row.naam.geslachtsnaam}</span></h5> :
                                <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Achternaam <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.naam.geslachtsnaam}</span></h5>
                            }
                            {
                              row.geslachtsaanduiding !== undefined && row.geslachtsaanduiding !== null &&
                              <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Geslacht <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{row.geslachtsaanduiding}</span></h5>
                            }
                            <br />
                          </>
                        ))
                      }
                    </div>
                  </AccordionDetails>
                </Accordion>
                <br />
              </>
            }

            {
              user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null &&
              <>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Woongegevens</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ width: "100% !important" }}>
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.adresregel1 !== undefined && user.verblijfplaats.adresregel1 !== null &&
                        <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Straat <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.verblijfplaats.adresregel1}</span></h5>
                      }
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.woonplaats !== null &&
                        <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Plaats <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.verblijfplaats.woonplaats}</span></h5>

                      }
                      {
                        user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.datumAanvangAdreshouding !== null &&
                        <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Vanaf <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>{user.verblijfplaats.datumAanvangAdreshouding.datum}</span></h5>
                      }
                      <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Aantal bewoners <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>3</span></h5>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <br />
              </>
            }

            <>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Paragraph><h3 className="utrecht-heading-3 utrecht-heading-3--distanced">Reisdocumenten</h3></Paragraph>
                </AccordionSummary>
                <AccordionDetails >
                  <Paragraph>
                    <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>Paspoort <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>16561</span></h5>
                    <h5 className="utrecht-pre-heading utrecht-heading-5 utrecht-heading-5--distanced" style={{ width: "100%" }}>ID <span className="utrecht-heading-5 utrecht-heading-5--distanced" style={{ textAlign: "right", float: "right", marginLeft: "10px"}}>65321684</span></h5>
                  </Paragraph>
                </AccordionDetails>
              </Accordion>
              <br />
            </>




          </Grid>
        </Grid>
      </main>
    </Layout>
  </>

}
export default Index
