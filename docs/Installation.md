# Installation

To set up your own project, you will need a GitHub account and be logged in. Navigate to [this](https://github.com/ConductionNL/nl-design-skeleton-gatsby) page and click on the "use this template" button. Tell GitHub where you want to spin up your prototype and click "Create repository from template".

## Spinning up your local environment

You will need a Git client, Node.js, and Yarn installed on your local machine for this part of the tutorial.

To develop locally, clone your new repository to your local machine. Open the terminal, navigate to the folder containing your repository, and start up Gatsby or Next.js in development mode with the following commands.

**Nextjs**

"`cli
$ yarn install
$ yarn dev

```

**Gatsby**

"`cli
$ npm install
$ npm run develop
```

After succesfully setting up your dev environment, navigate to [http://localhost:3000/](http://localhost:3000/) on Next.js or to [http://localhost:8000/](http://localhost:8000/) for Gatsby and see the same application as on
[https://conductionnl.github.io/nl-design-skeleton-gatsby/](https://conductionnl.github.io/nl-design-skeleton-gatsby/). Feel free to open up your project code and make some changes. You should see the changes in your development environment instantaneously due to hot-reloading.

## Publishing your prototype to the internet (Gatsby only)

The Gatsby version of the skeleton application has build-in support for GitHub pages, meaning you can build your application into a static website and publish it as a GitHub page. The skeleton repository comes with a build-in GitHub action for publishing itself as a GitHub page. You can have your prototype automatically published to the internet on a code push this way.

You need to activate GitHub pages on your repository for this to work. Go to your repository's settings, go to pages, select `gh-pages` as a source, and save (if you do not see a gh-pages branch, you can create one by pushing to main).

After saving, wait for GitHub to publish your project and provide you with a link you can share for your demo. Keep in mind that all pushes to main will result in updates to your online demo environment from this point on.
