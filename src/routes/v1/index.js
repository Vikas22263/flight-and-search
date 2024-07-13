const express = require("express");
const { Citycontrollers } = require("../../controller/city-controller");

const router = express.Router();

router.post("/city", Citycontrollers.create);
router.delete("/city/:id", Citycontrollers.destroy);
router.patch("/city/:id", Citycontrollers.update);
router.get("/city/:id", Citycontrollers.getcity);
router.get("/allcity",Citycontrollers.getAllcity)

module.exports = router;
