const Joi = require('joi');

const userCreateSchema = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

const paginationSchema = Joi.object({
    pageNo:Joi.string().required(),
    limit:Joi.string().required()
})


module.exports ={
    userCreateSchema,
    paginationSchema
};