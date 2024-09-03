import Joi from "joi";

const cadastroSchema = Joi.object({
    nome: Joi.string().min(3).required(),
    senha: Joi.string().min(6).required(),
    email: Joi.string().email().required()
});

export default cadastroSchema;