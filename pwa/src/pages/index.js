import * as React from "react"
import {Button} from "@mui/material";
import Layout from "../components/common/layout";
import {useUrlContext} from "../context/urlContext";
import {useEffect} from "react";
import {ThemeSwitcher} from "../components/theme-switcher/theme-switcher";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
    const context = useUrlContext();

  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          Congratulations
          <br />
          <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
          <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
        </h1>
        <ThemeSwitcher/>
      </main>
    </Layout>
  )
}

export default IndexPage
