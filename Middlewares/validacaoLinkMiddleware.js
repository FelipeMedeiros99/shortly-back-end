import linkSchema from "../Schemas/linkSchema.js";
import filtroErros from "../Utils/filtroErros.js";


export default async function validacaoLinkMiddleware(req, res, next){
    const {body:link} = req;
    try{
        await linkSchema.validateAsync(link);
        next()

    }catch(e){
        const erro = filtroErros(e);
        res.status(400).send(erro||e);
    }
};
