require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3500;
const database_url = process.env.DATABASE_URL;
const { NoteModel } = require('./schema/Note');
/**
 * Import the bcrypt, jsonwebtoken, UserModel, and TokenAuthentication middleware below this comment
 * const bcrypt = require('bcryptjs');
 * const jwt = require('jsonwebtoken');
 * const { UserModel } = require('./schema/User');
 * const { TokenAuthentication } = require('./middleware/TokenAuthentication');
 */

// Import the modules above this comment

// Connect to the database
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => console.error('Error connecting to the database: ', error));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create the HTTP POST endpoint for the registration of a user below this comment
// Example: app.post('/register', async (req, res) => {...rest of the code});

// Create the HTTP POST endpoint for the registration of a user above this comment
// Create the HTTP POST endpoint for the login of a user below this comment
// Example: app.post('/login', async (req, res) => {...rest of the code});

// Create the HTTP POST endpoint for the login of a user above this comment
/**
 * Use the TokenAuthentication middleware below this comment for this endpoint
 * app.get('/notes', TokenAuthentication, async (req, res) => {...rest of the code});
 */
app.get('/notes', async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.json({ list: notes});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Use the TokenAuthentication middleware below this comment for this endpoint
 * app.post('/notes', TokenAuthentication, async (req, res) => {...rest of the code});
 */
app.post('/notes', async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    const result = await note.save();
    res.json({ item: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * Use the TokenAuthentication middleware below this comment for this endpoint
 * app.put('/notes/:id', TokenAuthentication, async (req, res) => {...rest of the code});
 */
app.put('/notes/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = req.body;
    const result = await NoteModel.findByIdAndUpdate(noteId, updatedNote, { new: true });
    if(!result){
      res.status(404).json({ message: 'Note not found' });
    }
    res.json({ item: result });
  }catch(error){
    res.status(500).json({ error: error.message });
  }
});

/**
 * Use the TokenAuthentication middleware below this comment for this endpoint
 * app.delete('/notes/:id', TokenAuthentication, async (req, res) => {...rest of the code});
 */
app.delete('/notes/:id', async (req, res) => {
  try {
    const noteId = req.params.id;
    const result = await NoteModel.findByIdAndDelete(noteId);
    if(!result){
      res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note Successfully Deleted', id: noteId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});