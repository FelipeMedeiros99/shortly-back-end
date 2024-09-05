import db from "../Banco/index.js";


export default async function localizarLinkMiddleware(req, res, next){
    const {body:dados, params} = req;
    const {id:linkId} = params;
    const buscarLinkViaId = `
        SELECT id, url, shorturl 
        FROM links
        WHERE id = $1;
    `
    const valores = [linkId];

    try{
        const respostaBanco = await db.query(buscarLinkViaId, valores);

        const dadosLink = respostaBanco.rows[0];
        if(dadosLink===undefined){
            return res.status(404).send(`link de id "${linkId}" não encontrado`)
        }
        req.dadosLink = dadosLink;
        next()
    }catch(e){
        res.status(401).send(e);
    }
} 