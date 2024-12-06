# Express Lab Lesson 01

In this lab you will learn how to use the basics of Express, such as basic middleware, simple routing, and understanding how to adjust your `package.json` to adjust the available scripts.

## Step 1
- Before you begin the lab, open the terminal integrated in VSCode and run the command:
```shell
npm install
```
This is important because you need to have a `node_modules` folder, this folder contains all the dependencies required to complete this lab.
<br>
In this folder if you see:

- node_modules/
- .gitignore
- index.js
- package-lock.json
- package.json

Then you are ready to move onto the next step.

## Step 2
- Import the express module in your `index.js` file.

Code Example:
```JavaScript
const express = require('express');
```

- Create a variable called app and set it to `express();`

Code Example:
```JavaScript
const app = express();
```

- Create a variable called port and set it to `process.env.PORT || 3500`

Code Example:
```JavaScript
const port = process.env.port || 3500;
```

- Use the `app.listen()` method to start the server and have it listen on the port variable you created, then print a message to the user letting them know the application has started

Code Example:
```JavaScript
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

- Lastly, start the application. To do this open the integrate terminal in VSCode and then run this command:
```shell
npm run start
```
The reason this command works is because in 

## Step 3
- Import the cors module in your `index.js` file, make sure to import the module UNDER the express variable created in step 2

Code Example:
```JavaScript
const cors = require('cors');
```

- Use the `app.use()` method to implement the `cors()`, `express.json()`, and `express.urlencoded({ extended: true })` middlewares.

Code Example:
```JavaScript
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

## Step 4
- Create an index GET route in your `index.js` code file. HINT: the syntax should look like `app.get("/", (req, res) => ...rest of code logic)

Code Example:
```JavaScript
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
```

To test that route worked, you will need to restart your application.
<br>
To restart your application, first in your terminal use the key combination of "ctrl + c" if you are on windows. If you are on MacBook use the key combination of "command + c"
<br>
Now that your application is turned off, in your terminal run the command:
```shell
npm run start
```
To check if your route is configured open http://localhost:3500 in your web browser to see the result.
<br>
After you complete this step shut down your application.

## Step 5
- Install nodemon to this project, to do so open a terminal and run the following command:
```shell
npm install --save-dev nodemon
```

- Then go into your `package.json` file and add the script `"dev": "nodemon index.js"`

Example of package.json "scripts" object:
```package.json scripts
"scripts": {
  "test": "echo \ "Error: no test specified\" && exit 1",
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
- To complete this step in your terminal run the command:
```shell
npm run dev
```

## Step 6
- Create a GET route with an endpoint of "/notes" in your `index.js` code file. HINT: the syntax should look like `app.get("/notes", (req, res) => ...rest of code logic)

Code Example:
```JavaScript
app.get("/notes", (req, res) => {
  res.status(200).json({ message:"This is the notes route!" });
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a GET request route and plug in http://localhost:3500/notes as the URL you want to send this GET request to.

## Step 7
- Create a POST route with an endpoint of "/notes" in your `index.js` code file. HINT: the syntax should look like `app.post("/notes", (req, res) => ...rest of code logic)`

Code Example:
```JavaScript
app.post("/notes", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message:"This is the notes route!" });
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a POST request route and plug in http://localhost:3500/notes as the URL you want to send this POST request to. Make sure in insomnia to change the BODY to JSON and pass a title and content as the request body.

- Create a PUT route with an endpoint of "/notes/:id" in your `index.js` code file. HINT: the syntax should look like `app.put("/notes/:id", (req, res) => ...rest of code logic)`

Code Example:
```JavaScript
app.put("/notes/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({ message:"This is the notes route!" });
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a PUT request route and plug in http://localhost:3500/notes/1 as the URL you want to send this PUT request to. Make sure in insomnia to change the BODY to JSON and pass a title and content as the request body.

- Create a DELETE route with an endpoint of "/notes" in your `index.js` code file. HINT: the syntax should look like `app.delete("/notes/:id", (req, res) => ...rest of code logic)`

Code Example:
```JavaScript
app.delete("/notes/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message:"This is the notes route!" });
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a DELETE request route and plug in http://localhost:3500/notes/1 as the URL you want to send this DELETE request to.