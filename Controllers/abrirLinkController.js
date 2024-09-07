import db from "../Banco/index.js";

export default async function abrirLinkController(req, res, next){
    const {params} = req;
    const {shortUrl} = params;
    const localizarLink = `
        SELECT url 
        FROM links
        WHERE links.shorturl = $1
        LIMIT 1
    `;
    const valores = [shortUrl];
    let respostaBanco;
    let link; 


    try{        
        respostaBanco = await db.query(localizarLink, valores);
        link = respostaBanco.rows[0]?.url;
        if(link === undefined){
            return res.status(404).send("Url não encontrada");
        }

        res.redirect(link)
    
    }catch(e){
        res.status(400).send(`Erro: ${e}`)
    }
}
