const mongoose = require('mongoose');

const createDatabaseConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected to database')
    }catch(err){
        console.log(err);
        console.log('unable to connect to mongodb');
    }
}

module.exports={
    createDatabaseConnection
}