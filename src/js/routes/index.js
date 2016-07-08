'use strict';


//IMPORT SCHEMA
const Todo = require('../models/todo.js');

module.exports = function (app) {


	app.route("/api/todo/:_id?")
		.get(function(req, res) {

			Todo.find({}).exec(function(err, todos) {
				if (err) {
					res.send({err: err});
				}
				else {
		
					res.send(todos);
				}
			});

		})
		.post(function(req, res) {

			const title = req.body.title;
			const todoObj = new Todo({title: title, complete: false});

			todoObj.save(function(err, data) {
				if (err) res.send({err: err});
				else {
					console.log("successfully added to db", data);
  					res.send(data);
				}
	  				
			});


		}).delete(function(req, res) {

			const _id = req.params._id;

			Todo.findOneAndRemove({_id: _id}, function(err, data) {
				if (err) res.send({err: err});
				else {
					console.log("successfully removed", data);
					res.send(data);
				}
			});

		

		}).put(function(req, res) {

			let {_id, status} = req.body;
			status = JSON.parse(status);
			Todo.findOneAndUpdate({_id: _id}, {$set: {complete: status}}, {new: true}, function(err, data) {
				if (err) res.send({err: err});
				else {
					console.log("successfully updated", data);
					res.send(data);
				}


			});

		});




};