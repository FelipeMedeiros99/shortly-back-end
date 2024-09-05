import Joi from "joi";

const regexLink = new RegExp("^(https?|ftp)://(.+)$") 

const linkSchema = Joi.object({
    "url": Joi.string().pattern(regexLink).required()
})

export default linkSchema