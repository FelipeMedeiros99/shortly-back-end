import db from "../Banco/index.js";


export default async function deletarLinkController(req, res, next){
    const {body, params} = req;
    
    try{        
        next()
    
    }catch(e){
        res.status(400).send(`Erro: ${e}`)
    }
}
