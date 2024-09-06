import db from "../Banco/index.js";


export default async function deletarLinkController(req, res, next){
    const {dadosUsuario, params} = req;
    const {idusuario} = dadosUsuario;
    const {id} = params;
    const deletandoLink = `
        DELETE 
        FROM links
        WHERE links.id = $1 and links.idusuario = $2
        RETURNING *
    `;    

    const valores = [id, idusuario]
    try{        
        const respostaBanco = await db.query(deletandoLink, valores)
        if(respostaBanco.rows[0] === undefined){
            return res.status(401).send("Você não possui permissão para remover este link")
        }
        next();
    
    }catch(e){
        res.status(400).send(`Erro ao tentar deletar link: ${e}`)
    }
}
