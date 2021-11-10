import makeStyles from '@mui/styles/makeStyles';
import * as React from "react";
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
              <span>
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
                <span onClick={handleLogout} >Uitloggen</span>
                :
                // <a href="http://localhost/login/adfs/conduction">
                //   <span style={{color: 'white'}}>Inloggen</span>
                // </a>
                <a
                  href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632"}>
                  <span>Inloggen</span>
                </a>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}
