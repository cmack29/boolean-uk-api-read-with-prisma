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

module.exports = {
    getAll,
    getOneById,
    getOneByType,
    getOneByTheType,
    getOneByBreed
}