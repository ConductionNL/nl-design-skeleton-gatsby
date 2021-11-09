import makeStyles from '@mui/styles/makeStyles';
import * as React from "react";
import {ThemeSwitcher} from "../theme-switcher/theme-switcher";
import {Grid} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const useStyles = makeStyles((theme) => ({
  footerStyle: {
    margin: '100px', padding: '0',
  },
  text: {
    backgroundColor: '#3A3A3A',
    color: '#FFFFFFFF',
    paddingBottom: '20px',
  },
}));

export default function Footer() {

  const classes = useStyles();
  const style = {
    backgroundColor: '#3A3A3A',
    marginTop: '50px',
    minHeight: '150px',
  }

  return (
    <footer className="utrecht-page-footer" style={{backgroundColor: '#212121', padding: '0',}}>
      <div className={classes.text}>
        <Grid container>
          <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address"style={{display: 'flex',}}>
            <Grid item xs={10}>
              <div className={classes.footerStyle}>
                <h5 className="utrecht-heading-3 utrecht-heading-3--distanced"
                    style={{color: '#FFFFFFFF',}}>Diensten</h5>
                <p className="utrecht-paragraph utrecht-paragraph--distanced">
                  <a href="https://nijmegen.commonground.nu/moving"
                     className="utrecht-link utrecht-link">Verhuizen</a><br/>
                  <a href="https://nijmegen.commonground.nu/marriage"
                     className="utrecht-link utrecht-link">Huwelijk</a><br/>
                  <a href="https://nijmegen.commonground.nu/certificates"
                     className="utrecht-link utrecht-link">Uittreksels</a>
                </p>
              </div>
            </Grid>
            <Grid item xs={10}>
              <div className={classes.footerStyle}>
                <h5 className="utrecht-heading-3 utrecht-heading-3--distanced"
                    style={{color: '#FFFFFFFF',}}>Contact</h5>
                <p className="utrecht-paragraph utrecht-paragraph--distanced">
                   <LocationOnIcon/><div>Stadswinkel, Mariënburg 30</div><br/>
                  <CallIcon/> <a href="tel:14024" className="utrecht-link utrecht-link--telephone">14024</a><br/>
                 <MailOutlineIcon/> <a href="mailto:gemeente@nijmegen.nl"className="utrecht-link utrecht-link--telephone">gemeente@nijmegen.nl</a>
                </p>
              </div>
            </Grid>
            <Grid item xs={10}>
            <div className={classes.footerStyle}>
              <h5 className="utrecht-heading-3 utrecht-heading-3--distanced"
                  style={{color: '#FFFFFFFF',}}>Openingstijden</h5>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                <strong>Maandag - woensdag: 9.00 - 17.00</strong><br/>
                <strong>Donderdag: 9.00 - 20.00</strong><br/>
                <strong>Vrijdag: 9.00 - 17.00</strong>
              </p>
            </div>
          </Grid>
          </address>
         <Grid item xs={6} >
          <div style={{marginTop: 'auto',  marginLeft: 'auto', width: "fit-content"}}>
            <ThemeSwitcher/>
          </div>
         </Grid>
      </Grid>
    </div>
</footer>
)
  ;
}

