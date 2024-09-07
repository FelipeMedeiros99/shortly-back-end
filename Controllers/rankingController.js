import db from "../Banco/index.js";


export default async function rankingController(req, res){
    const consultaBanco = `
        SELECT 
            u.nome AS name,
            u.id,
            COUNT(l.id) AS "linksCount",
            COALESCE(SUM(l.qtvisitas), 0) AS "visitCount" 
        FROM usuario u
        LEFT JOIN links l ON l.idusuario = u.id
        GROUP BY u.nome, u.id
        ORDER BY "visitCount" DESC
        LIMIT 10;   
    `

    try{        
        const ranking = await db.query(consultaBanco)

        res.send(ranking.rows)
    
    }catch(e){
        res.status(400).send(`Erro ao buscar ranking: ${e}`)
    }
}


