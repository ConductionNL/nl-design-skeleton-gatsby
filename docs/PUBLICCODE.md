# Standard for Public Code

To develop the best project we possibly can and to meet our requirements, we adhere to the standard of public code:

[Standard for Public Code](https://standard.publiccode.net)

## Criteria

To meet the criteria of the standard of public code, we compare our criteria to those of the Publiccode standard.

### Code in the open

Always make sure GitHub repositories are open to public viewing. This way, anyone has access to use or improve our code. More can be found under [contributing]('./Contributing.md')

### Create reusable and portable code

For our code's reusability and portability, we have set any code that is reusable to public access. Not only do we give people the ability to reuse and improve upon our code this way, but also the option to update and improve the base foundation of their components.

### Welcome contributors

To welcome contributors, we made sure to make a very clear [CONTRIBUTING]('./Contributing.md') and [README]('../README.md') file in which we explain how to start using or add code to this component. We also have a public [ROADMAP]('./Roadmap.md') file to inform new contributors of planned changes.

### Make contributing easy

To make contributing as easy as possible, we created an [example github repository](https://github.com/ConductionNL/commonground-example), that anyone can use to create their own Commonground component just like this one. We also have a [dashboard application](https://commonground.conduction.nl/) that anyone can use to deploy their own designed Commonground components or those created by other organizations/people.

### Maintain version control

We keep a production and development branch to differentiate between these versions to maintain version control. All repositories have their version shown in the [Changelog]('./Changelog.md'). Admittedly, we could improve this because we have not been updating these versions consistently.

### Require review of contributions

We always assign a reviewer to requests for code changes. Besides the automated tests run on the requested modifications or additions, we always look at the requested changes and the results of these tests when reviewing.

### Document your objectives

To understand what this component is for, we describe this component in the [README]('../README.md'). We also have a [ROADMAP]('./Roadmap.md') to document any upcoming adjustments or plans.

### Use plain English

We write our documentation in English(UK) during development and create files and class names in English(VS).

### Use open standards

The standards we use are in line with [Publiccode](https://standard.publiccode.net/) and [Better Code Hub](https://bettercodehub.com/)

### Use continuous integration

To quickly identify problems and reduce risks during development, we use GitHub workflow and include automated tests such as StyleCI, Better Code Hub, and a Postman Collection.

### Publish with an open license

We publish all our software under the [European Union Public Licence](https://joinup.ec.europa.eu/collection/eupl/introduction-eupl-licence). This is a OSI-approved open source license. For more information, see [LICENSE]('./License.md').

### Use a coherent style

To adhere to a coding and writing style, we use the already existing [StyleCI](https://styleci.io/). We are using StyleCi for automated tests on our coding style.

### Document codebase maturity

To document the maturity of our codebases, we use a stable and ready-to-use production branch (main), a development branch for development and testing with multiple sub-development branches (dev-x) to avoid code conflicts. Any dependencies on other repositories are always on their production branch. These production branches will have our repository's most up-to-date stable version.
