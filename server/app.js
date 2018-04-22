const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./models').db;
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
	const err = new Error("Woah there partner, that page doesn't exist!")
	err.status = 404;
	next(err);
})

app.use((err, req, res, next) => {
	res.status(err.status || 500)
	res.render('error', {
		error: err
	})
});

app.listen(port, () => {
	console.log(`We are totally listening on port: ${port}`)
	db.sync()
	.then(() => {
		console.log("Sync'd the db")
	})
	.catch(console.error)
})

// const express = require("express");
// const volleyball = require("volleyball");
// const bodyParser = require("body-parser");
// const path = require("path");

// const db = require("./models").db;

// const app = express();

// // logging and body-parsing
// app.use(volleyball);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// // static file-serving middleware
// app.use(express.static(path.join(__dirname, "..", "public")));

// // catch 404 (i.e., no route was hit) and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // handle any errors
// app.use(function(err, req, res, next) {
//   console.error(err, err.stack);
//   res.status(err.status || 500);
//   res.send("Something went wrong: " + err.message);
// });

// // listen on a port
// const port = 3000;
// app.listen(port, function() {
//   console.log("The server is listening closely on port", port);
//   db
//     .sync()
//     .then(function() {
//       console.log("Synchronated the database");
//     })
//     .catch(function(err) {
//       console.error("Trouble right here in River City", err, err.stack);
//     });
// });
