import db from "../Banco/index.js";

export default async function abrirLinkController(req, res, next){
    const {params} = req;
    const {shortUrl} = params;

    const comandoQuery = `
        UPDATE links
        SET qtvisitas = qtvisitas + 1
        WHERE shorturl = $1
        RETURNING url
    `;

    const valores = [shortUrl];
    let respostaBanco;
    let link; 


    try{        
        respostaBanco = await db.query(comandoQuery, valores);
        link = respostaBanco.rows[0]?.url;
        
        if(link === undefined){
            return res.status(404).send("Url não encontrada");
        }
        res.redirect(link)
    
    }catch(e){
        res.status(400).send(`Erro: ${e}`);
    }
}
