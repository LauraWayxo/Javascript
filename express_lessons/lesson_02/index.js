require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3500;
/**
 * Add mongoose import below here and create database_url variable:
 * const mongoose = require('mongoose');
 * const database_url = process.env.DATABASE_URL;
 */

/**
 * import Note model below here:
 * const { NoteModel } = require('./schema/Note');
 */

/**
 * Create connection to MongoDB below here: 
 * mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
 * .then(() => console.log('Connected to MongoDB'))
 * .catch((error) => console.error(error);
 */

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/notes', async (req, res) => {
  res.status(200).json({ message: 'Notes' });
});

app.post('/notes', async (req, res) => {
  res.status(200).json({ message: 'Notes' });
});

app.put('/notes/:id', async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: 'Notes' });
});

app.delete('/notes/:id', async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ message: 'Notes' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});