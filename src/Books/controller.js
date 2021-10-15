const { prisma } = require("../utils/database")

const getAll = async (req, res) => {
    try{
        const allBooks = await prisma.book.findMany();
        res.json({data: allBooks});
    }
    catch(error) {
        console.error(error)
        res.status(500).json({error});
    }
}

const getOneById = async (req, res) => {
    console.log("id check", req.params)
    try{
        const bookById = await prisma.book.findUnique({
            where: {
                id: parseInt(req.params.id)
            } 
        });
        res.json({data: bookById});
    }
    catch(error){
        console.error(error)
        res.status(500).json({error});
    }
}

const getByFiction = async (req, res) => {
    try{
        const bookByFiction = await prisma.book.findMany({
            where: {
                type: 'fiction'
            }
        });
        res.json({data: bookByFiction})
        console.log(bookByFiction)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error});
    }
}

const getByFictionTopic = async (req, res) => {
    try{
        const bookByFictionTopic = await prisma.book.findMany({
            where: {
                type: 'fiction',
                topic: req.params.topic
            }
        })
        res.json({data: bookByFictionTopic})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error});
    }
}

const getByNonFiction = async (req, res) => {
    try{
        const bookByNonFiction = await prisma.book.findMany({
            where: {
                type: 'non-fiction'
            }
        })
        res.json({data: bookByNonFiction})
        console.log(bookByNonFiction)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getByNonFictionTopic = async (req, res) => {
    try{
        const bookByNonFictionTopic = await prisma.book.findMany({
            where: {
                type: 'non-fiction',
                topic: req.params.topic
            }
        })
        res.json({data: bookByNonFictionTopic})
        console.log(bookByNonFictionTopic)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getByAuthor = async (req, res) => {
    try{
        const bookByAuthor = await prisma.book.findMany({
            where: {
                author: req.params.author
            },
            orderBy: {
                publicationDate: 'asc'
            }
        })
        res.json({data: bookByAuthor})
        console.log(bookByAuthor)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

module.exports = {
    getAll,
    getOneById,
    getByFiction,
    getByFictionTopic,
    getByNonFiction,
    getByNonFictionTopic,
    getByAuthor
}

