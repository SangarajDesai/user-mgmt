const userService = require('../service/user');
const asyncHandler = require('../middleware/asyncHandler');
const {userCreateSchema,paginationSchema} = require('../schema/joiSchema');
const ErrorResponse = require('../util/errorResponse');
const errorMessages = require('../config/errorMessages');
const createUser = asyncHandler(async (req,res,next)=>{
    const requestBody = req.body;
    let validationRes=userCreateSchema.validate(requestBody);
    let validationError = validationRes.error;
    if(validationError){
        return next(new ErrorResponse(validationError.details,400,'vError'));
    }
    await userService.createUser(requestBody);
    res.status(200).json({
        status:true,
        message:'User created'
    })
})

const login = asyncHandler(async(req,res,next)=>{
        const email = req.body.email;
        const password = req.body.password;
       let isValid=await userService.login(email,password);
       if(isValid.isValid == 0){
          return next(new ErrorResponse([{message:errorMessages.USER_NOT_FOUND}],404,'dError'));
       }
       if(isValid.isValid == 1){
           return res.status(200).json({
               status:true,
               message:'Logged in successfully',
               token:isValid.token
           })
       }
       return next(new ErrorResponse([{message:errorMessages.INVALID_CRED}],401,'aError'));
})

const fetchUsers = asyncHandler(async(req,res,next)=>{
    let pageNo = parseInt(req.query.pageNo)
    let size = parseInt(req.query.limit)
    let validationRes=paginationSchema.validate(req.query);
    let validationError = validationRes.error;
    if(validationError){
        return next(new ErrorResponse(validationError.details,400,'vError'));
    }
    if(pageNo < 0 || pageNo === 0) {
        return next(new ErrorResponse([{message:errorMessages.INVALID_PAGE_NUM}],400,'vError'));
  }
     let userData=await userService.fetchUsers(pageNo,size);
     if(!userData){
        return next(new ErrorResponse([{message:errorMessages.NO_USER_RECORDS}],404,'dError'));
     }
     res.status(200).json({
         success:true,
         message:'User records found',
         data:userData
     })
})

const fetchUser = asyncHandler(async(req,res,next)=>{
        const id = req.params.id;
        let userData = await userService.fetchUser(id);
        if(!userData){
            return next(new ErrorResponse([{message:errorMessages.USER_NOT_FOUND}],404,'dError'));
        }
        res.status(200).json({
            success:true,
            message:'User record found',
            data:userData
        })
})

const deleteUser = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    let data = await userService.deleteUser(id);
    if(!data){
        return next(new ErrorResponse([{message:errorMessages.USER_NOT_FOUND}],404,'dError'));
    }
   res.status(200).json({
       success:true,
       message:'User has been deleted'
   })
})

module.exports={
    createUser,
    login,
    fetchUsers,
    fetchUser,
    deleteUser
}