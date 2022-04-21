# Skeleton Application

This skeleton application is designed for rapid application testing and prototype development on the NL Design System. It provides a basic skeleton application with full NL Design system functionality that any developer can easily extend, view locally, and deploy to an online environment for demonstration purposes. The main benefits are:

- Development and (online) demonstration of prototypes without needing a server.
- An out-of-the-box basic application that doesn't require configuration or setup and can be extended immediately.

## Getting started

Click on the green "code" button and choose to clone the repo to contribute to this project or fork this project. Forking will be needed when deploying your version.

## Spinning up your local environment

The Skeleton application is a end-to-end application and consists of a Gatsby-based front-end and the back-end from [Conduction](https://github.com/ConductionNL/commonground-gateway).

You will need two things installed for this application to work.

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

With both installed, first spin up the front-end of the application.

Clone your new repository to your local machine to start developing. Open the terminal, and navigate to the folder containing your repository.

Use the following command to spin up the front-end:

```cli
cd /pwa
npm install
npm run develop
```

With the front-end running in `port:8000`, change directory out of the folder to the root of your repo. With Docker running:

```cli
docker-compose pull
docker-compose up
```

Allow Docker the time to pull all the images required and spin up the back-end. After a few minutes, a "ready to handle connections" message will be displayed in the terminal. Navigate to [http://localhost:8000/](http://localhost:8000/) to view the app in your browser.

We integrated another open source project called Common Gateway to authenticate and connect to APIs. This gateway allows us to define how to authenticate to external APIs and help with user authentication. To use the gateway docker desktop is required on your machine. When in the root folder, you can run the following command to start the Common Gateway and its admin dashboard. Navigate to [http://localhost:83/](http://localhost:83/) to view the app in your browser.

## Development of the Skeleton Application

The following examples assumes understanding of `HTML/CSS/JavaScript`. Basic understanding of how [React](https://reactjs.org/docs/getting-started.html) and [TypeScript](https://www.typescriptlang.org/) work is highly recommended for developing and customizing the skeleton application.

## Adding Design Tokens and importing component from a NL Design Library

As you may have noticed, the `className` of the example above is from the municipality of Utrecht. This is called a `NL Design Token`. Whereas using classnames to store `CSS` rules is a classic method, exporting a bundle classnames as tokens to be used in other applications is a clever way to endorse a modular ecosystem. Design tokens are all the values needed to construct and maintain a design system — spacing, color, typography, object styles, animation, etc. — represented as data. Replacing one design token for another will quickly change the look of an application, without the need of specifying many rules you normally would.

In the NL Design System there are multiple participants and for this example we will use both [Den Haag's](https://nl-design-system.github.io/denhaag/?path=/story/den-haag-introduction--page) and [Utrecht's](https://github.com/nl-design-system/utrecht) library.

## _Importing a component from a library_

Below is a `<Button/>` implemented in the top-level `<App />` component. There are three steps to do this.

- `$ npm install @gemeente-denhaag/components-react`

This installs the library and provides access to the components. Then in the second step, import the `<Button />` in `<App />` or any other component you like.

```JavaScript
import { Button, StylesProvider } from "@gemeente-denhaag/components-react"; // This is step 2
// Import your design tokens here as well! Otherwise your components will be unstyled (below is documented how to do this)

function App() {
  return (
    <StylesProvider>
      <Button variant={"primary-action"}>Click here!</Button>
    </StylesProvider>
  );
} // The <Button> component is implemented here

export default App;
```

## _Adding design tokens_

Mixing components from one library and the design tokens from another library is where things get interesting. To do this,

- `$ npm i @utrecht/design-tokens` and import the tokens in the file of the component.

to add the design tokens itself. Now you can import the tokens and add them (for instance) to the `<Button />` component by adding `--utrecht-color-blue-35`. This changes the button color to a light blue.

The code would look like:

```JavaScript
import { Button, StylesProvider } from "@gemeente-denhaag/components-react";
import * from @utrecht/design-tokens; // here the tokens are add from the Utrecht library

function App() {
  return (
    <StylesProvider>
      <Button className={--utrecht-color-blue-35} variant={"primary-action"}>Click here!</Button>
    </StylesProvider>
  );
}

export default App;
```

## _Adding a component directly_

Below is an example of how a `TopNav` component is added in TypeScript.

To add a `TopNav` component:

```javascript
cd /src/components
mkdir topNav
touch TopNav.tsx
touch TopNav.css
```

Add the following code in `TopNav.tsx`

```TypeScript
import * as React from "react"; // Import everything you need from React
import { Link } from "gatsby"; // Gatsby's way of local linking.

// interfaces are required values for the component.
interface ITopNavItem {
  href: string; // hyperlink
  title: string | JSX.Element; // displayed name of link
  current?: boolean; // optional
}

interface TopNavProps {
  items: ITopNavItem[];
}

export const Menu: React.FC<TopNavProps> = ({ items }) => {
  return (
    <div className="utrecht-navhtml">
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          {/*example of a item  */}
          <Link className={"utrecht-topnav__link"} to={"/"}>
            Home
          </Link>
        </ul>
      </nav>
    </div>
  );
};

```

This component now is ready to be imported by a component higher up in the application, like the `<Layout />`.

That's it. The imported component is written in JSX.

## API calls (to be added)

In the `/src/apiService` folder.

## Environment variables

In the `pwa` folder there are 2 `.env` files used for local development and the static files.

These are called `.env.development` and `.env.production`. You can edit these to define your own environment variables.

When adding new variables make sure to also add them to the `urlContext` file.

## Publishing your prototype to the internet (Gatsby only)

The Gatsby version of the skeleton application has built support for GitHub pages. You can turn your application into a static website and publish it as a GitHub page. The skeleton repository comes with a build GitHub action for publishing itself as a GitHub page. You can have your prototype automatically published to the internet on a code push.

For this to work, you will need to do activate GitHub-pages on your repository, go to your repository settings, click on pages, select `gh-pages` as a source, and press on save (if you do not see a `gh-pages` branch yet you can create one by pushing to main).

After clicking on save, you can wait for GitHub to publish your project and provide you with a link you can share for your demo. Keep in mind that all pushes to main and development will result in updates to your online demo environment from this point on.
