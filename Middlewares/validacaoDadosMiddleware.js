import cadastroSchema from "../Schemas/cadastroSchema.js"
import filtroErros from "../Utils/filtroErros.js";

async function validacaoDadosMiddleware(req, res, next){
    const {body:dados} = req;
    try{
        await cadastroSchema.validateAsync(dados, {abortEarly:false})
        next();
    }catch(e){
        const erro = filtroErros(e);
        res.status(422).send(erro||e);
    }
};

export default validacaoDadosMiddleware;