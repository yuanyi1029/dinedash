const mongoose = require('mongoose')

const { Order } = require('../models/orderModel')

// GET 

// POST 
const createOrder = async (request, response) => { 
    const { item, quantity } = request.body
    try { 
        const order = await Order.create({ item, quantity })
        response.status(200).json(order)
    }
    catch (error) { 
        response.status(400).json({ message: error.message })
    }
}

// PUT 

// DELETE

module.exports = { 
    createOrder
}