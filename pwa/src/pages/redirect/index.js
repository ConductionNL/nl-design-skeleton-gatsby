import * as React from "react"
import Layout from "../../components/common/layout";
import {useEffect} from "react";
import {useUrlContext} from "../../context/urlContext";
import {navigate} from "gatsby-link";
import {setUser} from "../../services/auth";
import CircularProgress from "@mui/material/CircularProgress";
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

  IconProgresStyle: {
     alignitems: 'center', justifycontent: 'center',
  },

}));
const Redirect = () => {

  const urlContext = useUrlContext();

  const handleLogin = () => {
    fetch(urlContext.meUrl, {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Something went wrong.');
      })
      .then(function (data) {
        setUser(data);
        navigate("/vault");
      })
      .catch(function (error) {
        // navigate("/");
      });
  }

  // useEffect(() => {
  //   handleLogin();
  // }, []);

  return (
    <Layout>
      <main>
        <Typography align={"center"}>
          <p className="utrecht-paragraph">
            <CircularProgress/> <br/> even geduld alstublieft
          </p>
        </Typography>
      </main>
    </Layout>

  )
}

export default Redirect;
