const express = require('express') 
const router = express.Router() 

const { getItems, getItem, createItem } = require('../controllers/itemController') 

// GET 
router.get('/', getItems)
router.get('/:id', getItem)

// POST 
router.post('/', createItem)

// PUT  

// DELETE 

module.exports = router 