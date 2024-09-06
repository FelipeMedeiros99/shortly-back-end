import db from "../Banco/index.js"

export default async function validarTokenUsuarioMiddleware(req, res, next){
    const {headers} = req;
    const localizarTokenNoBanco = `
        SELECT * FROM autorizacao
        WHERE token = $1
        LIMIT 1
    `

    let token = headers?.authorization
    if(!(token?.includes("Bearer"))){
        return res.status(400).send(`Token precisa estar no formato "Bearer token"`)
    }
    token = token.replace("Bearer", "").trim()


    try{
        const localizarToken = await db.query(localizarTokenNoBanco, [token]);
        const dadosUsuario = localizarToken.rows[0];
        req.dadosUsuario = dadosUsuario

        if(dadosUsuario === undefined){
            return res.status(401).send("Seu token expirou, faça login novamente!");
        }

        next();

    }catch(e){
        res.status(401).send(`Erro ao validar token: ${e}`);
    }
}