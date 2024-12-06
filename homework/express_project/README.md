# Path2Tech Car REST API
[Description](#description) | [Demo](#demo) | [Important Git/Github Expectations](#important-gitgithub-expectations) | [Getting Started](#getting-started) | [Requirements](#getting-started) | [Bonuses](#bonuses)
## Description
You will be building an Express REST API based on a demo shown below. This application will enhance existing knowledge of the Express basics (middleware, HTTP methods, routing, requests and responses) and allow you to practice Express with best practices.
<br>
Below you will see a demo of the Express REST API Application that will show you what data should be returned from each route in your Express REST API.

## Demo
Your Project needs to have:
- A GET route that returns a list of all the cars from the database
- A GET route that returns a cars details based on an id passed in the parameters of the URL
- A POST route that creates a new car in the database, and returns that car's details after it has been saved in the database.
- A PUT/PATCH route that updates a single car in the database based on the id passed in the parameters of the URL, and returns that updated car details.
- A DELETE route that deletes a car in the database based on the is passed in the parameters of the URL, and returns a message letting the user know the car was successfully deleted.

Example of data returned from GET "/cars" route:
```json
{
  "list": [
    {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2024,
    "color": "color of the car",
    "price": 99.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  },
  {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2022,
    "color": "color of the car",
    "price": 499.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  },
  {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2006,
    "color": "color of the car",
    "price": 299.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  }
  ...rest of the list of cars
  ]
}
```

Example of data returned from GET "/cars/:id" route:
```json
{
  "item": {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2024,
    "color": "color of the car",
    "price": 99.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  }
}
```

Example of data returned from POST "/cars" route :
```json
{
  "item": {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2024,
    "color": "color of the car",
    "price": 99.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  }
}
```

Example of data returned from PUT "/cars/:id" route:
```json
{
  "item": {
    "_id": "car id goes here",
    "brand": "brand of the car",
    "model": "model of the car",
    "year": 2024,
    "color": "color of the car",
    "price": 99.99,
    "createdAt": "2024-07-02T23:33:15.928Z",
    "updatedAt": "2024-07-02T23:33:15.928Z",
  }
}
```

Example of data returned from DELETE "/cars/:id" route:
```json
{
  "message": "Car was successfully deleted"
}
```

*Your routes MUST return this exact data.

## Important Git/GitHub Expectations:
- [ ] Set up a GitHub repository for your group, after the repository is set up add branch protectios that require at least one PR approval before merging into `main`
- [ ] All your work should be done within branches, and code only should be moved to `main` after a teammate has approved a pull request. As you work, do regular adds/commits to give yourself multiple "save points" just in case something goes wrong.
- [ ] <strong>It is very important that you create a new branch off of the updated `main` branch every time you start a new feature. This branch should be used to complete the functionality associated with that branch and should be named accordingly</strong> Once the feature/functionality in this branch is finished, a PR can be made to merge the branch into `main`, and a new branch can be created for your next task. <strong>This process is crucial to minimize mere conflicts and mimicking the workfow you'll use once you join a development team.</strong>
- [ ] Use clear, descriptive, and professional commit messages. (This will make things easier if you ever have to revert to a prior commit, and it looks great to potential employers!)
- [ ] Reference the Git Collaboration Workflow Document for a list of Git best practices! 


## Getting Started
- [ ] Take time to read through the [core requirements](#requirements) below.
- [ ] Consider using [Trello](https://trello.com/) to create a project board to track tasks, priorities and deadlines, and for visibility into project progress and remaining priorities. [See here](https://trello.com/b/WjhFXOdJ/demo-project-board) for an example of how one might be organized.
- [ ] In your terminal run `npm install` to install the dependencies into the `node_modules` file before you begin to write code for your project
- [ ] Dig into the Express or JavaScript documentation if you get stuck!
- [ ] When you run into a bug or other unexpected behavior, use your debugging tools wisely: read error messages critically, set breakpoints, use `console.log()` and watch variables, use your Google Fu, etc.
- [ ] Challenge yourself to use ES6 syntax whenever possible: arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc

## Requirements 
- [ ] <strong>No code should be merged into `main` until all console and terminal errors and warnings are corrected</strong>
- [ ] Your application should be using MongoDB to store and persist data in a database.
- [ ] Your app should have a `schema` folder to hold any schemas being used.
- There should be a `Car` schema using `mongoose.Schema` to structure the "Car" table in the database
- [ ] A GET route that allows users to fetch all the cars from the database.
- [ ] A GET route that allows users to fetch a single car from the database
- [ ] A POST route that allows users to create a new car in the database
- [ ] A PUT route that allows users to update a single car in the database
- [ ] A DELETE route that allows users to remove a single car from the database.
- [ ] Hide any API keys using a `.env.local` or `.env` file
- [ ] Make your code as DRY (<strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself) as possible! 

## Bonuses
- [ ] Create a "/login" and "/registration" route, to allow users to create an account
- [ ] When creating a new user using the `bcrypt` library to hash their passwords, and when the user attempts to login using the `bcrypt` library to compare the password sent in the payload to the hashed password in the database.
- [ ] Create an authentication middleware, you can either use the `jsonwebtoken` library or the `passport` library to accomplish this task.
- [ ] Using authentication middleware to guard your routes related to the "Car" table in the database.
- [ ] Deploy your application and share the url with the team so we can all try it!
- [ ] Write a detailed README.md file using best practices: [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## Available Scripts

In the project directory, you will need to open a terminal, once you open the terminal you can run:

### `npm start`

Runs the app using `node`, and the application does not have hot reloading.
Open [http://localhost:3500](http://localhost:3500) to view the index route in your browser, or make a GET request using insomnia to view this route.

### `npm run dev`

Runs the app using `nodemon` and the application will have hot reloading (meaning if you make changes to the source code the application will automatically reload)
Open [http://localhost:3500](http://localhost:3500) to view the index route in your browser, or make a GET request using insomnia to view this route.

### `npm install <npm-module-name>`

This command allows you to install any npm/node modules you may need to use in your project, some recommended node depenedencies you will need for your project include:
- Express
- Cors
- Dotenv
- Mongoose

Here is an example of how to install a node dependency:

```node
npm install mongoose
```