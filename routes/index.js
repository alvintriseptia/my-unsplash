const router = require("express").Router();
const Unsplash = require("../models/unsplash.model");
const unsplashSchema = require("../models/unsplash.model");

router.get("/", (req, res, next) => {
	unsplashSchema.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data.reverse());
		}
	});
});

router.post("/add", (req, res) => {
	console.log(req.body);
	const photo = req.body.photo;
	const label = req.body.label;
	const newUnsplashData = {
		label,
		photo,
	};

	const newUnsplash = new Unsplash(newUnsplashData);
	newUnsplash
		.save()
		.then(() => res.json("Image Added"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// router for delete an data
router.delete("/:id", (req, res) => {
	Unsplash.findByIdAndDelete(req.params.id, (err) => {
		if (err) {
			res.json(err);
		} else {
			res.json("Successfully removed");
		}
	});
});

module.exports = router;
