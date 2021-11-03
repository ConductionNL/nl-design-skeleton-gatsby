import React, {useEffect} from "react";
import "@utrecht/design-tokens/dist/index.css";
import Layout from "./src/components/common/layout";
import {UrlContextWrapper} from "./src/context/urlContext";

export const wrapRootElement = ({ element }) => (
    <UrlContextWrapper>
        {element}
    </UrlContextWrapper>
)
