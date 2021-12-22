const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const unsplashSchema = new Schema({
	label: {
		type: String,
		required: true,
	},
	photo: {
		type: String,
		required: true,
	},
});

const unsplash = mongoose.model("unsplash", unsplashSchema);

module.exports = unsplash;
