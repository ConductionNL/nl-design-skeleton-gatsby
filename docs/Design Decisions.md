# Design Decisions

While building the NL Design Skeleton application, we must make decisions. The main decisions noted here are to provide a hook for future choices and give insights into the decision-making behind the projects. This, in turn, should help developers with their choices when they want to contribute code.

# Docker first

The NL Design Skeleton application is the first and foremost designed to support rapid prototyping of dutch governmental applications and the [Common Ground](https://commonground.nl/) ecosystem. As such, it adheres to the [Common Ground](https://commonground.nl/) design principles and underlying standards like [NL Design System](https://designsystem.gebruikercentraal.nl/). That means that the application is intended to be installed as a Kubernetes container on a [Haven](https://haven.commonground.nl/) cluster. Appropriate helm installation files for this application are included, and the application is listed on [Artifact Hub](https://artifacthub.io).

The local development environment is based on containers run on [docker](https://docker.com) desktop, and the [installation guide](README.md) is written as such. This doesn't mean that the application can't be run like a standard Node.js/Gatsby application. You can run the appropriate commands from the /PWA folder.

# Static build and gateway usage

The skeleton application follows the principle of static building. This is partly done because it provides better speed, caching, and CDN options. It also means we can hash external files (a requirement for the DigiD login provider CSP headers). Lastly, it allows us to serve the application directly from GitHub pages providing an easy development experience and tying your review environment directly to your code repository.

The application is dependent on an API for all of its interactive content and user verification. This can't be done from a static build. We use the [Common Ground API gateway](https://github.com/ConductionNL/commonground-gateway) for this. The [Common Ground](https://commonground.nl/) API gateway and its UI are automatically included as a Docker image when you spin up the application with docker-compose. All Conduction tools are open-sourced.

# Bootstrap and Font-Awesome as a backup for NL Design

[NL Design System](https://designsystem.gebruikercentraal.nl/) is a great concept, but it's still in development. To prevent developers from running into blocking dependencies for production applications, we included bootstrap (graphical elements) and font-awesome (icons) as stopgap measures. These are temporary fixes and will be phased out over time.
