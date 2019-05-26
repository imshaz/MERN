const express = require('express')
const app = express(); 

//import /require the code for db connectivity defined inside db.js file
const connectDB = require('./config/db')

// Get the PORT NUMBER - for local use 3001
const PORT= process.env.PORT || 3001; 

//Connect to Database
connectDB(); 

// Home route/ end point 
app.get('/', (req, res)=>{res.send('API/server Running')})

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


// make server listening @PORT
app.listen(PORT, ()=>{console.log(`server Running at ${PORT}`)})