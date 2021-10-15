const express = require("express");
const router = express.Router()

const { getAll,
     getOneById,
      getByFiction,
      getByFictionTopic,
      getByNonFiction,
      getByNonFictionTopic,
      getByAuthor
     } = require("./controller");

router.get("/", getAll);

router.get("/fiction", getByFiction)

router.get("/non-fiction", getByNonFiction)

router.get("/fiction/:topic", getByFictionTopic)

router.get("/non-fiction/:topic", getByNonFictionTopic)

router.get("/author/:author", getByAuthor)

router.get("/:id", getOneById);



module.exports = router;