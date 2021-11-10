import * as React from "react"
import Layout from "../../components/common/layout";
import Breadcrumbs from "../../components/common/breadcrumbs";
import { Grid } from "@mui/material";
import ActionMenu from "../../components/common/actionMenu";

function Index() {

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
            <br/><br/>

            <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
            <br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Persoonlijke gegevens</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>John</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>Doe</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>Male</span></h5>
            <br />

            <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
            <br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Kinderen</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>Johnny</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>Doe</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>Male</span></h5>
            <br />

            <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
            <br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Ouders</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>John senior</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>Doe</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>Man</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Voornamen: <span style={{ textAlign: "right", float: "right" }}>Johnlanda</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Achternaam: <span style={{ textAlign: "right", float: "right" }}>Doe</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Geslacht: <span style={{ textAlign: "right", float: "right" }}>Female</span></h5>
            <br/>

            <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
            <br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Woonadres</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Straat: <span style={{ textAlign: "right", float: "right" }}>John senior</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Plaats: <span style={{ textAlign: "right", float: "right" }}>Doe</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Vanaf: <span style={{ textAlign: "right", float: "right" }}>Man</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Aantal bewoners: <span style={{ textAlign: "right", float: "right" }}>2</span></h5>
            <br/>

            <div role="separator" aria-orientation="horizontal" class="utrecht-separator utrecht-separator--distanced"></div>
            <br />
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced" >Reisdocumenten</h3>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >Paspoort: <span style={{ textAlign: "right", float: "right" }}>16561</span></h5>
            <h5 className="utrecht-heading-5 utrecht-heading-5--distanced" >ID: <span style={{ textAlign: "right", float: "right" }}>65321684</span></h5>

          </Grid>
        </Grid>
      </main>
    </Layout>
    </>

}
export default Index
