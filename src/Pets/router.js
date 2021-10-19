const express = require("express");
const router = express.Router()

const { getAll,
     getOneById,
      getOneByType,
       getOneByTheType,
        getOneByBreed,
        createOneById,
        updateOneById,
        deleteOneById,
        getOneByMicrochip,
        getOneByBreedAndMicrochip
     } = require("./controller");

router.get("/", getAll);

router.get("/types", getOneByType);

router.get("/no-microchip", getOneByMicrochip);

router.post("/createdOne", createOneById)

router.get("/types/no-microchip/:type", getOneByBreedAndMicrochip);

router.put("/update/:id", updateOneById);

router.delete("/delete/:id", deleteOneById)

router.get("/types/:type", getOneByTheType);

router.get("/types/:type/:breed", getOneByBreed);

router.get("/:id", getOneById);

module.exports = router;