const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    item: { 
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }, 
    quantity: { 
        type: Number, 
        required: true
    },
    remark: { 
        type: String, 
        required: true
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)
module.exports = { Order }