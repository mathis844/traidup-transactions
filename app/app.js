'use strict'

const express = require('express')
const transactions = require('./transactions')

const PORT = 8080

const app = express()

app.get('/transactions', function(req, res) {

	transactions.getAll(function(err, data) {
			if (err) {
		  	res.status(500).send(JSON.stringify(err, null, '\t'));
		  	console.log(err);
			} else {
		  	res.status(200).send(JSON.stringify(data, null, '\t'))
			}

	})
	
})

app.listen(PORT)
console.log('Running on http://localhost:' + PORT)
