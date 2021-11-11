import makeStyles from '@mui/styles/makeStyles';
import * as React from "react";
import {ThemeSwitcher} from "../theme-switcher/theme-switcher";
import {Grid} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({

  footerStyle: {

  },
  text: {},
}));

export default function Footer() {

  const classes = useStyles();


  return (
    <footer className="utrecht-page-footer" style={{ position: 'fixed', left: '0', bottom: '0', width: '100%' }}>
      <Grid container spacing={{xs: 5}}>
        <Grid item xs={12} sm={4} >
          <Box>
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">Diensten</h3>
          </Box>
          <Box>
            <a href="https://nijmegen.commonground.nu/moving"
               className="utrecht-link">Verhuizen</a>
          </Box>
          <a href="https://nijmegen.commonground.nu/marriage"
             className="utrecht-link">Huwelijk</a><br/>
          <a href="https://nijmegen.commonground.nu/certificates"
             className="utrecht-link">Uittreksels</a>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography variant="h3"  className="utrecht-heading-3 utrecht-heading-3--distanced">Contact</Typography>
          </Box>
          <Box>
            <LocationOnIcon/>
          </Box>
          <Box>
            <CallIcon/>
            <a href="tel:14024" className="utrecht-link utrecht-link--telephone">14024</a>
          </Box>
          <Box>
            <MailOutlineIcon/>
            <a href="mailto:gemeente@nijmegen.nl"
               className="utrecht-link utrecht-link--telephone">ifo@demodam.nl</a>
          </Box>
        </Grid>
       <Grid item xs={4}>
          <div>
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">Openingstijden</h3>
            <p className="utrecht-paragraph utrecht-paragraph--distanced">
              <strong>Maandag - woensdag: 9.00 - 17.00</strong><br/>
              <strong>Donderdag: 9.00 - 20.00</strong><br/>
              <strong>Vrijdag: 9.00 - 17.00</strong>
            </p>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div style={{marginTop: 'auto', marginLeft: 'auto', width: "fit-content"}}>
            <ThemeSwitcher/>
          </div>
        </Grid>
      </Grid>
    </footer>
  )
    ;
}

