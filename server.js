const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db');
const userRoutes = require('./route/user');
const errorHandler = require('./middleware/errorHandler');

dotenv.config({
    path:'./config/.env'
})

db.createDatabaseConnection();

app.use(express.json());
app.use('/',userRoutes);
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`server is started on the port ${process.env.PORT}`);
})

module.exports =app



