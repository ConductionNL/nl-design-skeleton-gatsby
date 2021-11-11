import React, {useEffect} from "react";
import "@utrecht/design-tokens/dist/theme/index.css";
import Layout from "./src/components/common/layout";
import {UrlContextWrapper} from "./src/context/urlContext";
import {Helmet} from "react-helmet";
import {UserContextWrapper} from "./src/context/userContext";

export const wrapRootElement = ({ element }) => (
    <UserContextWrapper>
      <UrlContextWrapper>
        {element}
        <Helmet>
          <script src="/env.js" />
          <script src="https://unpkg.com/@nl-design-system-unstable/theme-switcher" />
        </Helmet>
      </UrlContextWrapper>
    </UserContextWrapper>
)
