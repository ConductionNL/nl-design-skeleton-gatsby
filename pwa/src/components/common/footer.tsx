import makeStyles from '@mui/styles/makeStyles';
import * as React from "react";
import {ThemeSwitcher} from "../theme-switcher/theme-switcher";
import {Grid} from "@mui/material";



const useStyles = makeStyles((theme) => ({
  footerStyle: {
    marginTop: 50
  },
}));

export default function Footer() {
  const style = {
    backgroundColor: '#CBCE1C',
    marginTop: '50px',
    minHeight: '150px'
  }

  return (
    <footer className="utrecht-page-footer">
      <Grid container>
        <Grid item xs={8}>
          <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
            <section>
              <h5 className="utrecht-heading-3 utrecht-heading-3--distanced">Diensten</h5>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                <a href="https://nijmegen.commonground.nu/moving" className="utrecht-link utrecht-link">Verhuizen</a><br />
                <a href="https://nijmegen.commonground.nu/marriage" className="utrecht-link utrecht-link">Huwelijk</a><br />
                <a href="https://nijmegen.commonground.nu/certificates"className="utrecht-link utrecht-link">Uittreksels</a>
              </p>
            </section>
            <section>
              <h5 className="utrecht-heading-3 utrecht-heading-3--distanced">Contact</h5>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                <strong>Stadswinkel, Mariënburg 30</strong><br />
                <a href="tel:14024" className="utrecht-link utrecht-link--telephone">14024</a><br />
                <a href="mailto:gemeente@nijmegen.nl"
                   className="utrecht-link utrecht-link--telephone">gemeente@nijmegen.nl</a>
              </p>
            </section>
            <section>
              <h5 className="utrecht-heading-3 utrecht-heading-3--distanced">Openingstijden</h5>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                <strong>Maandag - woensdag: 9.00 - 17.00</strong><br />
                <strong>Donderdag: 9.00 - 20.00</strong><br />
                <strong>Vrijdag: 9.00 - 17.00</strong>
              </p>
            </section>
          </address>
        </Grid>
        <Grid item xs={4}>
          <div style={{marginTop: 'auto', marginLeft: 'auto', width: "fit-content"}}>
            <ThemeSwitcher/>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
