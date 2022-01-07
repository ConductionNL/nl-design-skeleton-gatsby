import * as React from "react";
import Layout from "../components/common/layout";
import {useUrlContext} from "../context/urlContext";

const IndexPage = () => {
  const context = useUrlContext();

  React.useEffect(() => {
    console.log(context.apiUrl);
    console.log(context.meUrl);
  }, []);

  return (
    <Layout>
      <main>
        <title>Skeleton app</title>
        <div>
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
            Welkom
          </h1>
          <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">
            Hallo
          </h3>
          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
            Dit is de skeleton NL Design applicatie.
          </h4>
          <p className="utrecht-p">
            Het doel van deze skeleton applicatie is om meerdere design tokens
            te testen over een set NL Design componenten. Ook zou je deze
            applicatie als template kunnen gebruiken om zelf een app te bouwen
            in NL Design De link naar onze github repo: https://github.com/ConductionNL/nl-design-skeleton-gatsby
          </p>
          <button className="utrecht-button">Home</button>
          <form action="">
            <label className="utrecht-form-label">Name</label>
            <input className="utrecht-form-input" type="text"/>
          </form>
          <div className="utrecht-html">
            <table lang="nl" summary="Overzicht van de stemmen voor en tegen het betaald parkeren." className="">
              <caption>Uitslag internetpeiling 8 juni tot en met 28 juni</caption>
              <thead>
              <tr>
                <th scope="col">Gebied</th>
                <th scope="col" className="numeric">Voor</th>
                <th scope="col" className="numeric">Tegen</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Locatie A</td>
                <td className="numeric">53</td>
                <td className="numeric">113</td>
              </tr>
              <tr>
                <td>Locatie B</td>
                <td className="numeric">58</td>
                <td className="numeric">42</td>
              </tr>
              <tr>
                <td>Locatie C</td>
                <td className="numeric">87</td>
                <td className="numeric">16</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
