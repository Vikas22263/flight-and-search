const express = require("events");
const { Citycontrollers } = require("../../controller/city-controller");

const router = express.Router();

router.post("/city", Citycontrollers.create);

module.exports = router;
