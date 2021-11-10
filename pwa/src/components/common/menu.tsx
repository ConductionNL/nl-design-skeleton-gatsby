import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import * as React from "react";
import { useUserContext } from "../../context/userContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  appbar: {
    backgroundColor: '#A80A2D',
    boxShadow: "none"
  },

}));


export default function MainMenu() {
  let userContext = useUserContext();

  const classes = useStyles();

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

            }
          </li>
        </ul>
      </nav>
    </div>
  );
}
