# Features

## NL Design System

The NL design system is a collection of agreements between developers and designers to develop digital products like Progressive Web Applications for Dutch municpalities. One of such agreements, for instance, is "everyone included". This means everyone could use the apps built with the design system, including people with disabilities.

## Design Tokens

The NL Design system works with altering [CSS styling](https://developer.mozilla.org/en-US/docs/Web/CSS) with [HTML class attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes), building modular components. Much like a design system such as Bootstrap or Material UI functions. The design tokens can alter typography, layouts, grids, colors, virtually everything related to CSS.

## DigiSpoof

The [DigiSpoof](https://github.com/ConductionNL/digispoof-interface) component is a mock application of DigiD intended to make it easy for developers to set up a DigiD implementation. The BRP provides the persona in the mock application. The developer can immediately get started with DigiD without being dependent on [Logius](https://www.logius.nl/english) or third parties.

DigiD is the preferred login method for almost all applications of the Dutch government. However, DigiD itself is subject to the highest security level and the requirement for a PKI certificate and the pre-production (test) environment. You can imagine obtaining a test DigiD environment is time-consuming and expensive. In addition, keys are only released for government projects and must be manually added to DigiD by Logius.

DigiD (from the security level) does not return error messages. These can only be obtained via an application (issue) at Logius with an average turnaround time of one week. The above makes developing and implementing DigiD almost impossible.
