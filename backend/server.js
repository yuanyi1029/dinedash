require('dotenv').config() 
const express = require('express') 
const mongoose = require('mongoose')
const cors = require('cors') 
const itemRoutes = require('./routes/items')
const orderRoutes = require('./routes/orders') 

const app = express()  

// Middleware 
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use((request, response, next) => { 
    console.log(`${ request.method } request at ${ request.path }`)
    next()
});

// Routes 
app.use('/api/items/', itemRoutes)
app.use('/api/orders/', orderRoutes)

// Database Connection & Server Initialization  
mongoose.connect(process.env.MONGO_URL)
    .then(() => { 
        app.listen(process.env.PORT, () => { 
            console.log(`Database Connected, Listening on port ${ process.env.PORT }`)
        })
    })
    .catch((error) => { 
        console.log(error)
    })