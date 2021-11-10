import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import {useUserContext} from "../../context/userContext";
import {useUrlContext} from "../../context/urlContext";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
  },
  text: {
  },
}));


const handleLogout = (context) => {

  if (typeof window !== "undefined") {
    context.setUser(null);
    sessionStorage.setItem('user', null);

    // @ts-ignore
    window.location.href = 'http://localhost/logout';
  }
}

export default function MainMenu() {

  const classes = useStyles();

  const handleLogout = () => {
    sessionStorage.setItem('user', null);

  }

  let userContext = useUserContext();
  let context = useUrlContext();

  console.log(context);

  return (

    <div className="utrecht-navhtml" >
      <nav className="topnav"   >
        <ul className="utrecht-topnav__list" >
          <li className="utrecht-topnav__item">
            {
              userContext.user !== null &&
              <span style={{color: 'white'}}>
              {
                userContext.user.name
              }
                </span>
            }
          </li>
          <li className="utrecht-topnav__item" >
            {
              userContext.user !== null
                ?
                <span onClick={handleLogout} style={{color: 'white'}}>Uitloggen</span>
                :
                // <a href="http://localhost/login/adfs/conduction">
                //   <span style={{color: 'white'}}>Inloggen</span>
                // </a>
                <a
                  href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632"}>
                  <span style={{color: 'white'}}>Inloggen</span>
                </a>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}
