# Express Lab Lesson 02

In this lab you will learn how to connect your Express application to your MongoDB cluster using the `mongoose` npm package.

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
- In the `.env` file, create a variable called "DATABASE_URL" and set it to the URL associated with your MongoDB Cluster.

Code Example:
```.env
DATABASE_URL="insert your mongodb url here"
```
- In the `index.js` file import the `mongoose` package.

Code Example:
```JavaScript
const mongoose = require('mongoose');
```
- In the `index.js` file create a variable called "database_url" and set it to "process.env.DATABASE_URL".

Code Example:
```JavaScript
const database_url = process.env.DATABASE_URL;
```
- In the `index.js` file create a connection to your mongodb cluster, use the following code to create the connection.

Code Example:
```JavaScript
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to Database'))
.catch((error) => console.error(error));
```
- Now that you have created a connection, it is time to test your connection, open a terminal and run the command: `npm run dev`. If you see the message "Connected to Database" it means you connected to your database successfully. If you see any errors you will need to troubleshoot. Some common errors while connecting to your MongoDB cluster are:
  - Incorrect MongoDB url in the `.env` file
  - Incorrect username and password (please check you are using a correct username and password, and make sure you are putting the users credentials from the datbase and not the credentials you use to login)
  - IP Address is not a part of the whitelist, if you check in your "network" settings on your MongoDB cluster if you do not see your IP Address listed, the database will reject the connection request.

## Step 3
- In the `schema/Note.js` file import the `mongoose` package.

Code Example:
```JavaScript
const mongoose = require('mongoose');
```

- In the `schema/Note.js` file create a "NoteSchema" using the following code below.

Code Example:
```JavaScript
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});
```

- In the `schema/Note.js` file create a "NoteModel" and then export the "NoteModel", use the following code below to guide you.

```JavaScript
const NoteModel = mongoose.model('Note', NoteSchema);

module.exports = { NoteModel };
```

## Step 4
- In the `index.js` file import the "NoteModel" from `schema/Note.js`.

Code Example:
```JavaScript
const { NoteModel } = require('./schema/Note.js');
```

- In the `index.js` file in the "app.get('/notes')" route use a "try/catch" statement, and "NoteModel.find()" to return all the notes in the database to the client making a request to this endpoint. Use the code below to help guide you.

Code Example:
```JavaScript
app.get('/notes', async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.json({ list: notes });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
})
```

After creating this route, make sure your application is still running, then open insomnia and send a GET request to http://localhost:3500/notes

## Step 5
- In the `index.js` file in the "app.post('/notes')" route use a "try/catch" statement, and "new NoteModel()" to create a new note in the database. Make sure to use the `.save()` method to create the new note, then return the newly created note to the client making a request to this endpoint. Use the code below as a guide.

Code Example:
```JavaScript
app.post("/notes", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    const savedNote = await note.save();
    res.json({ item: savedNote })
  } catch(error) {
    res.status(500).json({ error: error.message })
  }
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a POST request route and plug in http://localhost:3500/notes as the URL you want to send this POST request to. Make sure in insomnia to change the BODY to JSON and pass a title and content as the request body.

- In the `index.js` file in the "app.put('/notes/:id')" route use a "try/catch" statement, and "NoteModel.findByIdAndUpdate()" to update an existing note in the database. If the note does not exist in the database you will need to send a client a status of "404" and a message saying "Note Not Found" After the note has been updated, return the updated note to the client making a request to this endpoint. Use the code below as a guide.

Code Example:
```JavaScript
app.put("/notes/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = req.body;
    const note = await NoteModel.findByIdAndUpdate(noteId, updatedNote, { new: true });
    if(!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ item: note });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a PUT request route and plug in http://localhost:3500/notes/:get-valid-id-from-database, to get a valid id, check your MongoDB cluster, and get the id of an existing note, then plug it into the URL you want to send this PUT request to. Make sure in insomnia to change the BODY to JSON and pass a title and content as the request body.

- In the `index.js` file in the "app.delete('/notes/:id')" route use a "try/catch" statement, and "NoteModel.findByIdAndDelete()" to delete an existing note in the database. If the note does not exist in the database you will need to send a client a status of "404" and a message saying "Note Not Found" After the note has been deleted, return a message saying "Note Deleted Successfully" and the id of the note being deleted to the client making a request to this endpoint. Use the code below as a guide.

Code Example:
```JavaScript
app.delete("/notes/:id", async(req, res) => {
  try {
    const noteId = req.params.id;
    const note = await NoteModel.findByIdAndDelete(noteId)
    if(!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note Deleted Successfully", id: noteId });
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
});
```
Use the insomnia software to test this endpoint, in your insomnia software create a DELETE request route and plug in http://localhost:3500/notes/:get-valid-id-from-database, to get a valid id, check your MongoDB cluster, and get the id of an existing note, then plug it into the URL you want to send this PUT request to.