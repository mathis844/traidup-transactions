'use strict'

const express = require('express')
const transactions = require('./transactions')

const PORT = 8080

const app = express()

function displayOrError(err, res, body) {
	if (err) {
  	res.status(500).send("An error has occurred.  Check log for details.");
  	console.log(err);
	} else {
  	res.status(200).send(body)
	}
}

app.get('/transactions', function(req, res) {

	transactions.getAll(function(err, data) {
			displayOrError(err, res, JSON.stringify(data))
	})
	
});

// returns data on single transaction from id
app.get('/transactions/:id', function(req, res) {
	var id = req.params.id;
	throw new Error('Not Implemented');
});

// creates a new transaction based on POST data
app.post('/transactions', function(req, res) {
	throw new Error('Not Implemented');
	// return 201 - Created status
	res.status(201).body('');
});

// deletes a transaction (soft delete - set deleted_at)
app.delete('/transactions/:id', function(req, res) {
	var id = req.params.id;
	throw new Error('Not Implemented');
	// return 204 - No content
	res.status(204).body('');
});

// updates a single transaction from id
app.put('/transactions/:id', function(req, res) {
	throw new Error('Not Implemented');
	// return 204 - No content
	res.status(204).body('');
});

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
