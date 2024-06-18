const mongoose = require('mongoose') 

const { Item } = require('../models/itemModel') 

// GET 
const getItems = async (request, response) => { 
    const items = await Item.find({}).sort({ createdAt: -1 }) 
    response.status(200).json(items)  
}

const getItem = async (request, response) => { 
    const id = request.params.id
    if (!mongoose.Types.ObjectId.isValid(id)) { 
        response.status(404).json({ message: "Invalid Item" }) 
    }

    const item = await Item.findById(id) 

    if(!item) { 
        response.status(404).json({ message: "Invalid Item" }) 
    }
    else { 
        response.status(200).json(item)
    }
}

// POST 
const createItem = async (request, response) => { 
    const { name, type, price } = request.body 
    try { 
        const item = await Item.create({ name, type, price }) 
        response.status(200).json(item)
    }
    catch (error) { 
        response.status(400).json({ message: error.message })
    }
}

// PUT

// DELETE


module.exports = { 
    getItems,
    getItem, 
    createItem
}