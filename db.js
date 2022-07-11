const mongoose = require("mongoose");

module.exports = () => {
	try {
		mongoose.connect(process.env.DB);
		console.log("Erfolgreich mit der Datenbank verbunden");
	} catch (error) {
		console.log(error);
		console.log("Keine Verbindung zur Datenbank!");
	}
}; 
