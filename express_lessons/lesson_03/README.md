# Express Lab Lesson 3

In this lab you will learn how to create and implement token authentication and authorization into your Express application.

## Step 1
- Before you begin the lab, open the terminal integrated in VSCode and run the command:
```shell
npm install
```
This is important because you need to have a `node_modules` folder, this folder contains all the dependencies required to complete this lab.
<br>
In this folder if you see:

- .env
- node_modules/
- .gitignore
- index.js
- package-lock.json
- package.json

## Step 2
- Open your terminal and run the command:

Code Example
```shell
openssl rand -hex 32
```
This command will generate a random string variable for you to use in your `.env` file.
- Open your `.env` file and create an environment variable called "JWT_SECRET", set this variable to whatever string was generated when you ran `openssl rand -hex 32`.

Code Example:
```.env
JWT_SECRET="insert your randomly generated string here"
```
- Open you `.env` file and change the value of "DATABASE_URL" to the connection string for your MongoDB Cluster.

Code Example:
```.env
DATABASE_URL="insert your MongoDB connection string here"
```

## Step 3
- In the `middleware/TokenAuthentication.js` code file, import the `jsonwebtoken` library

Code Example:
```JavaScript
const jwt = require('jsonwebtoken');
```

- In the `middleware/TokenAuthentication.js` code file, use the TokenAuthentication async function to create the middleware to authenticate jsonwebtokens and users.

Code Example:
```JavaScript
const TokenAuthentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch(error) {
    res.status(401).json({ error: error.message });
  }
}
```
- In the `middleware/TokenAuthentication.js` code file, export the "TokenAuthentication" function so it can be used in your application.

Code Example:
```JavaScript
module.exports = { TokenAuthentication };
```
- In the `index.js` code file import the "TokenAuthentication" module from `./middleware/TokenAuthentication.js`

Code Example:
```JavaScript
const { TokenAuthentication } = require('./middleware/TokenAuthentication.js');
```

- Go to the "app.get('/notes')", "app.post('/notes')". "app.put('/notes/:id')", "app.delete('/notes/:id')" routes and use the "TokenAuthentication" middleware function:

Code Example:
```JavaScript
app.get("/notes", TokenAuthentication, async (req, res) => {...rest of code});
app.post("/notes", TokenAuthentication, async (req, res) => {...rest of code});
app.put("/notes/:id", TokenAuthentication, async (req, res) => {...rest of code});
app.delete("/notes/:id", TokenAuthentication, async (req, res) => {...rest of code});
```
- Open your terminal and start the application, run this command in your terminal:
```shell
npm run dev
```
- Now that your application is running, open insomnia and send an HTTP Request to any of the GET, POST, PUT, or DELETE endpoints related to the notes (e.g. app.get('/notes'), app.post('/notes'), app.put('/notes/:id'), app.delete('/notes/:id'))

## Step 4
- In `schema/User.js` import the `mongoose` library.

Code Example:
```JavaScript
const mongoose = require('mongoose');
```
- In `schema/User.js` use `new mongoose.Schema()` to create a "UserSchema", the user schema needs to have an email that is a type string, name that is a type string and password that is a type string.

Code Example:
```JavaScript
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});
```
- In the `schema/User.js` code file, use `mongoose.model` to create a user model in your database and then use `module.exports` to export the "UserModel" you created:

Code Example:
```JavaScript
const UserModel = mongoose.model('User', UserSchema);
module.exports = { UserModel };
```
- In your `index.js` file import the `bcryptjs`, `jsonwebtoken`, and `UserModel` modules.

Code Example:
```JavaScript
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('./schema/User.js');
```

## Step 5
- Create an HTTP POST method that has an endpoint of '/register' (e.g., app.post('/register')), and use the following code to implement functionality to create a new user in the database, hash that users password, and use jsonwebtoken to create an authentication token.

Code Example:
```JavaScript
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
    res.json({ data: token });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
})
```
- Now that you created the logic to create a user in the database, hash their password, and use jsonwebtoken for authentication purposes, open Insomnia and send an HTTP POST request to http://localhost:3500/register. When sending this request make sure you have a proper email, name, and password that is being sent from the client to the server.

- After creating the new user, make sure to save that authentication token somewhere, because now in Insomnia use the HTTP POST request you created in the previous lesson to the URL http://localhost:3500/notes. When you go into insomnia, go to the "Auth" tab, select the option that says "Bearer Token" and in the "Token" field paste the token you got when you created a new user. Make sure for the "Prefix" field it says "Bearer"

You should now be able to create new notes as an authenticated user, using this logic you can also fetch all the notes from the database, update an existing note, and delete existing notes from the database since you are an authenticated user.

## Step 6
- Create an HTTP POST method that has an endpoint of '/login' (e.g., app.post('/login')), and use the following code to implement functionality to login a user to your application.

Code Example:
```JavaScript
app.post('/login', async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });
    if(!user){
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if(!isPasswordValid){
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ data: token });
  } catch(error){
    res.status(500).json({ error: error.message });
  }
})
```
- Now that you created the logic to allow a user to login to the applcation, open Insomnia and send an HTTP POST request to http://localhost:3500/login. When sending this request make sure you have a proper email, and password that is being sent from the client to the server.

- After the user is able to login successfully, make sure to save that authentication token somewhere, because now in Insomnia use the HTTP POST request you created in the previous lesson to the URL http://localhost:3500/notes. When you go into insomnia, go to the "Auth" tab, select the option that says "Bearer Token" and in the "Token" field paste the token you got when the user logged in succesfully. Make sure for the "Prefix" field it says "Bearer"

You should now be able to create new notes as an authenticated user, using this logic you can also fetch all the notes from the database, update an existing note, and delete existing notes from the database since you are an authenticated user.