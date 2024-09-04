import filtroErros from "../Utils/filtroErros.js";
import loginSchema from "../Schemas/loginSchema.js"

export default async function validacaoDadosLoginMiddleware(req, res, next){
    const {body:dados} = req;

    try{
        await loginSchema.validateAsync(dados, {abortEarly: false});
        next()
    }catch(e){
        const erro = filtroErros(e);
        res.status(401).send(erro||e);
    }
} 