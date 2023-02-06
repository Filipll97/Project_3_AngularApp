Link to Vercel app: 
Link to component tree in figma: 

This application was created with angular and is our third group project at Experis Academy.

The application allows a trainer to collect Pokémons received from the PokeAPI. Trainers must enter username before being able to collect any Pokémons. Trainers are able to view the Pokémons that have been collected. 

Features include:

- Landing Page
The first thing a trainer see is the “Login page” where the trainer is able to enter their “Trainer” name. When the trainer login into the application the trainer's name is being saved to the Trainer API and sessionStorage. The application then redirect to the trainer to the Pokémon Catalogue page. The trainer is not able to access the pokemon catalogue page or the trainer page without being login and is prevented with angular Guard service.

- Trainer Page
A Trainer may only view this page if there is a Trainer name that exists in localStorage. 
The Trainer page lists the Pokémon that the trainer has collected. For each collected Pokémon, 
its name and picture is displayed. A trainer is able to remove a Pokémon from their collection from the Trainer page.

- Pokémon Catalogue Page 
The Catalogue page lists all Pokémon names and pictures. when the trainer choose to catch a pokemon a star symbol indicates that the pokémon has been collected. 

- Responsive and simple user interface.

- Angular Router component for navigation between pages.

- Lastly includes a simple logout function which returns the user to the login page.

Made by: Filip Lindell and Tommy Pham

# Project3AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
