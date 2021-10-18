const { prisma } = require("../utils/database")

const getAll = async (req, res) => {
    try{
        const allPets = await prisma.pet.findMany();
        res.json({data: allPets});
    }
    catch(error) {
        console.error(error);
    }
}

const getOneById = async (req, res) => {
    console.log("id check", req.params)
    try{
        const petById = await prisma.pet.findUnique({
            where: {
                id: parseInt(req.params.id)
            } 
        });
        res.json({data: petById});
    }
    catch(error){
        console.error(error)
        res.status(500).json({error});
    }
}

const getOneByType = async (req, res) => {
    try{
        const petByType = await prisma.pet.findMany({
            where: {
                type: req.params.type
            }
        });
        res.json({data: petByType})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error});
    }
}

const getOneByTheType = async (req, res) => {
    try{ 
        const petByTheType = await prisma.pet.findMany({
            where: {
                type: req.params.type
            }
        })
        res.json({data: petByTheType})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getOneByBreed = async (req, res) => {
    try{
        const petByBreed = await prisma.pet.findMany({
            where: {
                type: req.params.type,
                breed: req.params.breed
            }
        })
        res.json({data: petByBreed})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getOneByBreedAndMicrochip = async (req, res) => {
    try{
        const petByBreed = await prisma.pet.findMany({
            where: {
                type: req.params.type,
                microchip: false
            }
        })
        res.json({data: petByBreed})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getOneByMicrochip = async (req, res) => {
    try{
        const petByMicrochip = await prisma.pet.findMany({
            where: {
                microchip: false
            }
        })
        res.json({data: petByMicrochip})
    }
    catch(error){
        console.error(error)
        res.json(500).json({error})
    }
}

const createOneById = async (req, res) => {
    try{
        const createPet = await prisma.pet.create({
            data: {
                name: req.body.name,
                age: parseInt(req.body.age),
                type: req.body.type,
                breed: req.body.breed,
                microchip: req.body.microchip
            }
        })
        console.log(createPet)
        res.json({ data: createPet })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}

const updateOneById = async (req, res) => {
    try{
        const updatePet = await prisma.pet.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                name: req.body.name,
                age: parseInt(req.body.age),
                type: req.body.type,
                breed: req.body.breed,
                microchip: req.body.microchip
            }
        })
        console.log(updatePet)
        res.json({ data: updatePet})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}

const deleteOneById = async (req, res) => {
    try{
        const deletePet = await prisma.pet.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: "Book Deleted!" })
        console.log(deletePet)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}

module.exports = {
    getAll,
    getOneById,
    getOneByType,
    getOneByTheType,
    getOneByBreed,
    createOneById,
    updateOneById,
    deleteOneById,
    getOneByMicrochip,
    getOneByBreedAndMicrochip
}