const express = require('express')
const router = express.Router()

const { createOrder } = require('../controllers/ordersController')

// GET 

// POST 
router.post('/', createOrder)

// PUT 

// DELETE 

module.exports = router