const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

const routes = require("./routes/");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/my_unsplash", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
	console.log("Connected to Atlas!");
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
