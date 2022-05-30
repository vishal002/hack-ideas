# HackIdeas

Build a web application which lets employees of an organisation to add/manage challenges for internal hackathons which they organise every month. Let's call this application Hack Ideas.
The application should have these features,
* Allow users to enter into application with 'employee id'(password is not necessary).
* Allow users to add a new challenges/ideas.
* A challenge will have a title, description and tags
* You can maintain fixed pre-defined tags (like 'feature', 'tech' etc.)
* Users can upvote a challenge
* Show the list of all challenges on home page
* Allow users to sort challenges with votes count, creation date

## Initial installation

For Application: 
Run `npm install` after cloneing repo from [Hack Ideas](https://github.com/vishal002/hack-ideas).

For [Mock Server](https://www.npmjs.com/package/mock-json-server) 
1) `npm i mock-json-server`
2) `mock-json-server mock-json/challenges-list.json --port=3000`

## Tech Stack 

1) Angular 
2) Angular Matrial 

## Development server

Run `ng serve` OR `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## App Snapsorts

![Home Page](https://github.com/vishal002/admin-ui/blob/main/snapsports/home.jpg?raw=true) 
![Edit Page](https://github.com/vishal002/admin-ui/blob/main/snapsports/edit.jpg?raw=true) 


