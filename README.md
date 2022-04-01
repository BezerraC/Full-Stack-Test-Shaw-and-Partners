# shaw-test

> Available for testing: [HERE](https://diogo-scoz-shaw-test.herokuapp.com/)
>> A [React.js](https://reactjs.org/) project + [NodeJs](https://nodejs.org/) + [ExpressJs](https://expressjs.com/) 

Full-stack test for Shaw and Partners using github API/v3.

## REQUIREMENTS

- Front-end:
  * List all users from GitHub and display their id and login with pagination.
  * Display the details of selected user: id, login, profile url, and date of the login creation in User Detail screen. \* Display the public repositories of selected user in User Detail screen.

- Back-end:
  * API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints are be provided:

  * GET - /api/users?since={number}
This endpoint must return a list of GitHub users and the link for the next page.

  * GET - /api/users/:username/details
This endpoint must return the details of a GitHub user

  * GET - /api/users/:username/repos
This endpoint must return a list with all user repositories

## Build Setup

### run

Inside root folder

1 - npm install

2 - npm run client-install

3 - delete files 'browserlist' and 'browserlist.cmd' from client folder

4 - npm run dev
