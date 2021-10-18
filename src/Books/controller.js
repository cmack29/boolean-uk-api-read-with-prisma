const { prisma } = require("../utils/database")

const getAll = async (req, res) => {
    try {
        const allBooks = await prisma.book.findMany();
        res.json({ data: allBooks });
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
}

const getOneById = async (req, res) => {
    console.log("id check", req.params)
    try {
        const bookById = await prisma.book.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.json({ data: bookById });
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
}

const getByFiction = async (req, res) => {
    try {
        const bookByFiction = await prisma.book.findMany({
            where: {
                type: 'fiction'
            }
        });
        res.json({ data: bookByFiction })
        console.log(bookByFiction)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
}

const getByFictionTopic = async (req, res) => {
    try {
        const bookByFictionTopic = await prisma.book.findMany({
            where: {
                type: 'fiction',
                topic: req.params.topic
            }
        })
        res.json({ data: bookByFictionTopic })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
}

const getByNonFiction = async (req, res) => {
    try {
        const bookByNonFiction = await prisma.book.findMany({
            where: {
                type: 'non-fiction'
            }
        })
        res.json({ data: bookByNonFiction })
        console.log(bookByNonFiction)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

const getByNonFictionTopic = async (req, res) => {
    try {
        const bookByNonFictionTopic = await prisma.book.findMany({
            where: {
                type: 'non-fiction',
                topic: req.params.topic
            }
        })
        res.json({ data: bookByNonFictionTopic })
        console.log(bookByNonFictionTopic)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

const getByAuthor = async (req, res) => {
    try {
        const bookByAuthor = await prisma.book.findMany({
            where: {
                author: req.params.author
            },
            orderBy: {
                publicationDate: 'asc'
            }
        })
        res.json({ data: bookByAuthor })
        console.log(bookByAuthor)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

const getBySiFiOrHistory = async (req, res) => {
    try {
        const bookSiFiHistory = await prisma.book.findMany({
            where: {
                OR: [
                    {
                        topic: 'science fiction'
                    },
                    {
                        topic: 'historical'
                    }
                ]
            },
                orderBy: { publicationDate: 'asc' }
        })
        res.json({ data: bookSiFiHistory})
        console.log(bookSiFiHistory)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const getNonFiction2004 = async (req, res) => {
    try {
        const bookNonFiction = await prisma.book.findMany({
            where: {
                type: 'non-fiction',
                publicationDate: {
                    gte: new Date(
                        '2004-12-31T23:59:59+0200'
                    )
                }
            },
        })
        res.json({ data: bookNonFiction })
        console.log(bookNonFiction)
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

const createOneById = async (req, res) => {
    try{
        const createBook = await prisma.book.create({
            data: {
                title: req.body.title,
                type: req.body.type,
                author: req.body.author,
                topic: req.body.topic,
                publicationDate: new Date(req.body.publicationDate)
            }
        })
        console.log(createBook)
        res.json({ data: createBook })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}

const updateOneById = async (req, res) => {
    try{
        const updateBook = await prisma.book.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                title: req.body.title,
                type: req.body.type,
                author: req.body.author,
                topic: req.body.topic,
                publicationDate: new Date(req.body.publicationDate)
            }
        })
        console.log(updateBook)
        res.json({ data: updateBook})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error})
    }
}

const deleteOneById = async (req, res) => {
    try{
        const deleteBook = await prisma.book.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.json({ message: "Book Deleted!" })
        console.log(deleteBook)
    }
    catch (error) {
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
    getByAuthor,
    getNonFiction2004,
    getBySiFiOrHistory,
    createOneById,
    updateOneById,
    deleteOneById
}

