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
            <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Mijn kluis', href: '/vault' } ]} />
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">Mijn kluis</h1>
            <div className="utrecht-html">
              <table lang="nl" summary="Overzicht van de stemmen voor en tegen het betaald parkeren." style={{width: "100%"}}>
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
                  <td>Akte van geboorte</td>
                  <td>9-11-2021</td>
                  <td>DOWNLOAD BUTTON</td>
                  <td>QR CODE</td>
                </tr>
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      </main>
    </Layout>
  </>

}
export default Index