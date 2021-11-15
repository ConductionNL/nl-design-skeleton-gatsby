Design Decisions

While building the NL Design Skeleton application we must occasionale make decisions, the main decisions are noted here to provide a hook for future decisions and give insights into the thoughts behind te projects. This in turn should help developers with there choices when they want to contribute code

# Docker first
The NL Design Skeleton application is first and foremost design to support rapid prototyping of ducht governmental applications and the common ground ecosystem. As such it adheres to the commonground design principles and underlaying standards like nl design system.  That means that the application is meant to be installed as a kubernetes container on a haven cluster. Appropriate helm installation files to this end are included and the application is listed on artifact hub.

This also means that the local development environment is based on containers run on docker desktop, and that the installation guide is written as such. This howers dosn’t mean that the application can’t be run like a standard node.js/gatsby application. You can do so bu running the appropriate command from the /pwa folder

# Static build and gateway usage
The skeleton application follows the principle of static build, this is partly done because it provides a better speed, caching and cdn options but also because it means we can hash external files (a requirement for the digid login provider’s csp headers).  Lastly it allows us to serve the application directly from github pages making for easy development experience and tying yout review environment directly to your code repository.   

It does however also mean that the application is dependent on an api for al of its interactive content and user verification. for this we use the commonground api gateway wisch is another open source project. Both the commonground api gateway and its ui are automatically included as an docker image when you spin up the application with docker-compose. 

# Bootstrap and Font-Awesome as a backup for NL Design
NL Design is a great concept, but it isn’t quite there yet. To prevent developers from running into blocking dependencies for production applications we included bootstrap (graphical elements) and font-awesome (icons) as stop gap measures. Be aware do that these are temporary fixes, and will be phased out over time. 