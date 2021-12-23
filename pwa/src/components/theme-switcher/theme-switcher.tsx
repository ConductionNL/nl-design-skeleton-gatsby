import * as React from "react";
import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useScript } from "usehooks-ts";

const ThemeSwitcher = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const themeSwitcherScript = useScript(
    "https://unpkg.com/@nl-design-system-unstable/theme-switcher"
  );

  useEffect(() => {
    if (themeSwitcherScript === "ready") {
      setScriptLoaded(true);
    }
    console.log(themeSwitcherScript);
  }, [themeSwitcherScript]);

  return (
    <Fragment>
      <Helmet>
        <link
          href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css"
          rel="stylesheet"
        />

        <meta name="theme-color" content="hsl(0 0% 95%)" />
      </Helmet>
      {scriptLoaded && (
        // @ts-ignore
        <nl-theme-switcher // @ts-ignore
          target=".utrecht-document"
          themes={JSON.stringify([


            {
              className: "almere-theme",
              title: "Almere",
              href: "https://unpkg.com/@conductionnl/almere-design-tokens/dist/index.css",
            },
            {
              className: "amsterdam-theme",
              title: "Amsterdam",
              href: "https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css",
            },
            {
              className: "bodegraven-theme",
              title: "Bodegraven",
              href: "https://unpkg.com/@nl-design-system-unstable/bodegraven-design-tokens/dist/index.css",
            },
            {
              className: "borne-theme",
              title: "Borne",
              href: "https://unpkg.com/@nl-design-system-unstable/borne-design-tokens/dist/index.css",
            },
            {
              className: "conduction-theme",
              title: "Conduction",
              href: "https://unpkg.com/@conductionnl/conduction-design-tokens/dist/index.css",
            },
            {
              className: "demodam-theme",
              title: "Demodam",
              href: "https://unpkg.com/@conductionnl/demodam-design-tokens/src/index.css",
            },
            {
              className: "denbosch-theme",
              title: "Den Bosch",
              href: "https://unpkg.com/@conductionnl/denbosch-design-tokens/dist/index.css",
            },
            {
              className: "drechterland-theme",
              title: "Drechterland",
              href: "https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css",
            },
            {
              className: "duiven-theme",
              title: "Duiven",
              href: "https://unpkg.com/@nl-design-system-unstable/duiven-design-tokens/dist/index.css",
            },
            {
              className: "duo-theme",
              title: "Duo",
              href: "https://unpkg.com/@nl-design-system-unstable/duo-design-tokens/dist/index.css",
            },
            {
              className: "enkhuizen-theme",
              title: "Enkhuizen",
              href: "https://unpkg.com/@nl-design-system-unstable/enkhuizen-design-tokens/dist/index.css",
            },
            {
              className: 'exxellence-theme',
              title: 'Exxellence',
              href: 'https://unpkg.com/@conductionnl/exxellence-design-tokens/dist/index.css',
            },
            {
              className: "groningen-theme",
              title: "Groningen",
              href: "https://unpkg.com/@nl-design-system-unstable/groningen-design-tokens/dist/index.css",
            },
            {
              className: "haarlemmermeer-theme",
              title: "Haarlemmermeer",
              href: "https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css",
            },
            {
              className: "hoorn-theme",
              title: "Hoorn",
              href: "https://unpkg.com/@nl-design-system-unstable/hoorn-design-tokens/dist/index.css",
            },
            {
              className: "horstaandemaas-theme",
              title: "Horstaandemaas",
              href: "https://unpkg.com/@nl-design-system-unstable/horstaandemaas-design-tokens/dist/index.css",
            },
            {
              className: "leidschendam-theme",
              title: "Leidschendam",
              href: "https://unpkg.com/@nl-design-system-unstable/leidschendam-design-tokens/dist/index.css",
            },
            {
              className: "nijmegen-theme",
              title: "Nijmegen",
              href: "https://unpkg.com/@conductionnl/nijmegen-design-tokens/dist/index.css",
            },
            {
              className: "noordoostpolder-theme",
              title: "Noordoostpolder",
              href: "https://unpkg.com/@nl-design-system-unstable/noordoostpolder-design-tokens/dist/index.css",
            },
            {
              className: 'procura-theme',
              title: 'Procura',
              href: 'https://unpkg.com/@conductionnl/procura-design-tokens/dist/index.css',
            },
            {
              className: "riddeliemers-theme",
              title: "Riddeliemers",
              href: "https://unpkg.com/@nl-design-system-unstable/riddeliemers-design-tokens/dist/index.css",
            },
            {
              className: "rotterdam-theme",
              title: "Rotterdam",
              href: "https://unpkg.com/@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css",
            },
            {
              className: 'simgroep-theme',
              title: 'Simgroep',
              href: 'https://unpkg.com/@conductionnl/simgroep-design-tokens/dist/index.css',
            },
            {
              className: "stedebroec-theme",
              title: "Stedebroec",
              href: "https://unpkg.com/@nl-design-system-unstable/stedebroec-design-tokens/dist/index.css",
            },
            {
              className: "tilburg-theme",
              title: "Tilburg",
              href: "https://unpkg.com/@nl-design-system-unstable/tilburg-design-tokens/dist/index.css",
            },
            {
              className: "utrecht-theme",
              title: "Utrecht",
              href: "https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css",
            },
            {
              className: "venray-theme",
              title: "Venray",
              href: "https://unpkg.com/@nl-design-system-unstable/venray-design-tokens/dist/index.css",
            },
            {
              className: 'vrijbrp-theme',
              title: 'Vrijbrp',
              href: 'https://unpkg.com/@conductionnl/vrijbrp-design-tokens/dist/index.css',
            },
            {
              className: "vught-theme",
              title: "Vught",
              href: "https://unpkg.com/@nl-design-system-unstable/vught-design-tokens/dist/index.css",
            },
            {
              className: "westervoort-theme",
              title: "Westervoort",
              href: "https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css",
            },
            {
              className: "zevenaar-theme",
              title: "Zevenaar",
              href: "https://unpkg.com/@nl-design-system-unstable/zevenaar-design-tokens/dist/index.css",
            },
            {
              className: "zoetermeer-theme",
              title: "Zoetermeer",
              href: "https://unpkg.com/@conductionnl/zoetermeer-design-tokens/dist/index.css",
            },
            {
              className: "zwolle-theme",
              title: "Zwolle",
              href: "https://unpkg.com/@nl-design-system-unstable/zwolle-design-tokens/dist/index.css",
            },
          ])}
        />
      )}
    </Fragment>
  );
};

export { ThemeSwitcher };
