const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = async (requestBody)=>{
    await User.create(requestBody);
}

const login = async (email,password)=>{
    let userData = await User.findOne({email:email},{password:1});
    if(!userData){
        return {isValid:0};
    }
    let isPasswordMatch=await bcrypt.compare(password,userData.password);
    if(isPasswordMatch){
        let token=jwt.sign(email,process.env.TOKEN_SECRET);
        return {isValid:1,token};;
    }
    return {isValid:-1};;

}

const fetchUsers = async(pageNo,size)=>{
    let data=await User.find().skip(size * (pageNo - 1)).limit(size);
    return data;
}

const fetchUser = async (userId)=>{
    let data=await User.find({_id:userId});
    return data[0];
}

const deleteUser = async (userId)=>{
       let data= await User.findByIdAndRemove({_id:userId});
       return data;
}

module.exports={
    createUser,
    login,
    fetchUser,
    fetchUsers,
    deleteUser
}