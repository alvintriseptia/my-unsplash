const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;

const routes = require("./routes/");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(process.env.ATLAS_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
	console.log("Mongoose is connected!!!!");
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(morgan("tiny"));
app.use("/myunsplash", routes);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
