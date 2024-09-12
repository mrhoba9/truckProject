const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
const dataFilePath = path.join(__dirname, "data", "contact-responce.json");
if (!fs.existsSync(path.dirname(dataFilePath))) {
	fs.mkdirSync(path.dirname(dataFilePath));
}
app.post("/send", (req, res) => {
	const { name, email, message } = req.body;
	const newEntry = {
		name: name,
		email: email,
		message: message,
		timestamp: new Date().toISOString(),
	};
	fs.readFile(dataFilePath, "utf8", (err, data) => {
		let submissions = [];
		if (!err && data) {
			submissions = JSON.parse(data);
		}
		submissions.push(newEntry);
		fs.writeFile(
			dataFilePath,
			JSON.stringify(submissions, null, 2),
			"utf8",
			(err) => {
				if (err) {
					console.error("Error writing to file", err);
					res.status(500).send("Internal Server Error");
				} else {
					res.status(200).json({ success: true });
				}
			}
		);
	});
});
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});






