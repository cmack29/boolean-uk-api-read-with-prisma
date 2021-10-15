const express = require("express");
const router = express.Router()

const { getAll, getOneById, getOneByType, getOneByTheType, getOneByBreed } = require("./controller");

router.get("/", getAll);

router.get("/types", getOneByType);

router.get("/types/:type", getOneByTheType);

router.get("/types/:type/:breed", getOneByBreed);

router.get("/:id", getOneById);

module.exports = router;