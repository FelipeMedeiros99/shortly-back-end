import db from "../Banco/index.js";


export default async function nome(req, res, next){
    const {body, params} = req;
    
    try{        
        res.sendStatus(200)
    
    }catch(e){
        res.status(400).send(`Erro: ${e}`)
    }
}
