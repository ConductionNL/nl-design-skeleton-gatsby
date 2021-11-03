import React from "react"
import {Box, Container, createTheme} from "@mui/material";
import Footer from "./footer";
import Header from "./header";
import {ThemeProvider} from "@mui/styles";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const theme = createTheme({
    palette: {
        primary: {
            main: "#001759"
        },
        secondary: {
            main: "#ddc999"
        }
    },
});

export default function Layout({ children }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header/>

                <Container>
                    <Box paddingTop={2} paddingBottom={2}>
                        {children}
                    </Box>
                </Container>

                <Footer />
            </ThemeProvider>
        </>
    )
}