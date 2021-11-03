import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Stack} from "@mui/material";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  appbar: {
    backgroundColor: '#AD9156',
    boxShadow: "none"
  },

}));


export default function MainMenu() {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" sx={{backgroundColor: '#CBCE1C'}}>
        <Container>
          <Stack
            sx={{minHeight: '64px'}}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" color="inherit">

            </Typography>
            <Typography variant="h6" color="inherit">

            </Typography>
          </Stack>
        </Container>
      </AppBar>
    </div>
  );
}
