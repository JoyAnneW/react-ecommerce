const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const createCheckoutSession = require("./API/checkout");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ orign: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/create-checkout-session", createCheckoutSession);

app.listen(port, () => {
	console.log("Listening on port", port);
});
