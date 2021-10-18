const express = require("express");
const router = express.Router()

const { getAll,
     getOneById,
      getByFiction,
      getByFictionTopic,
      getByNonFiction,
      getByNonFictionTopic,
      getByAuthor,
      getNonFiction2004,
      getBySiFiOrHistory,
      createOneById,
      updateOneById,
      deleteOneById
     } = require("./controller");

router.get("/", getAll);

router.get("/fiction", getByFiction)

router.get("/non-fiction", getByNonFiction)

router.get("/sifi/history", getBySiFiOrHistory)

router.post("/createdOne", createOneById)

router.put("/update/:id", updateOneById);

router.delete("/delete/:id", deleteOneById)

router.get("/non-fiction/2004", getNonFiction2004)

router.get("/fiction/:topic", getByFictionTopic)

router.get("/non-fiction/:topic", getByNonFictionTopic)

router.get("/author/:author", getByAuthor)

router.get("/:id", getOneById);

module.exports = router;