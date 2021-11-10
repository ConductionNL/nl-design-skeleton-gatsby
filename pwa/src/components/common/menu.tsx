import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import * as React from "react";
import {useRouter} from 'next/router';
import {useAppContext} from "../context/state";
import {useUserContext} from "../context/userContext";
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
  let userContext = useUserContext();

  const classes = useStyles();
  const router = useRouter()


  const [state, setState] = React.useState({
    displayMenuDrawer: false,
    displayUserDrawer: false,
    loggedIn: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const loginUser = (status) => {
    setState({...state, ['loggedIn']: status});
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem('user') !== null) {
        userContext.setUser(JSON.parse(sessionStorage.getItem('user')));
      }
    }
  }, []);



  const handleLogout = () => {
    sessionStorage.setItem('user', null);
    userContext.setUser(null);
    router.push('/');
  }

  let userContext = useUserContext();
  let context = useAppContext();

  return (
    <div className="utrecht-navhtml">
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          <li className="utrecht-topnav__item">
            {
              userContext.user !== undefined && userContext.user !== null ?
                <span>{userContext.user.name}</span> :
                <a className="utrecht-topnav__link"
                  href="/"
                  target="_blank">Inloggen</a>

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
