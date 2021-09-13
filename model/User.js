const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = Schema({
    email:{
        type:String,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        select:false
    }
})

userSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('user',userSchema);