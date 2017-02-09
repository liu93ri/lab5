var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	console.log("addFriend called");
	var name = req.query.name;
	var description = req.query.description;

	console.log(name);
	console.log(description);

	var newFriend = {
		name: name,
		description: description,
		imageURL: "http://upload.wikimedia.org/wikipedia/commons/5/5c/Ivan_Sutherland_at_CHM.jpg"
	}

	data.friends.push(newFriend);

	res.redirect('/');
}