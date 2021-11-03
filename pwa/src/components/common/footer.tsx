import makeStyles from '@mui/styles/makeStyles';
import * as React from "react";

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
    <footer style={style}>

    </footer>
  );
}
