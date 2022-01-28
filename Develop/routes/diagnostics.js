const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newDiagnostics = {
      time,
      error_id,
      errors,
      tip_id: uuidv4(),
    };

    readAndAppend(newDiagnostics, './db/diagnostics.json');
    res.json(`Diagnostics added successfully 🚀`);
  } else {
    res.error('Error in adding diagnostics');
  }
});


module.exports = diagnostics;
