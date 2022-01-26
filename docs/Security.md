# SECURITY

Security of your Commonground components depends on a few factors and is, for the most part, provided by the Commonground ecosystem. There are steps that you should do yourself. We will briefly explain the security principles set in place to help you understand how you are being supported and the limitation.

## Skeleton App

The Commonground Skeleton App has a strict separation between the web service used to communicate to the internet, its business logic (contained in a separate container through the Gateway), and the data. This way of developing aligns with the "landing zone" principle. It means that the part exposed to the internet doesn't provide code or business logic and does not have access to SAML database.

The Skeleton App has no security breaches as its intended use is a frontend interface for testing components. This means no information is collected and stored anywhere. Even logging in to the DigiSpoof component proves no risk as it is a mock of business logic.

## Codebase

First of the code base, if you extend the Skeleton App, your codebase will exist out of three parts.
The general API-Platform framework and vendor libraries
The common ground specific extensions
Your personal code
For the first two parts, there is very little to worry about. Symphony has an excellent safety reputation.
However, you should definitely keep your dependencies, Symfony, doctrine, and others up to date by regularly running `composer update` in your containers (see the Tutorial).
Online testing
When you want your component to be tested online you can put in a request to the Conduction team to include your component on the [Demodam]() test environment. Then, the component will be subjected to penetration tests and the API test provision.

## So what should you do?

Follow the steps to regularly merge updates from the [Skeleton App](https://github.com/ConductionNL/nl-design-skeleton-gatsby) repository into your codebase
