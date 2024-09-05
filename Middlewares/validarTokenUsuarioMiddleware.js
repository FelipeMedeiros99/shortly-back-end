import db from "../Banco/index.js"

export default async function validarTokenUsuarioMiddleware(req, res, next){
    const {headers} = req;
    const localizarTokenNoBanco = `
        SELECT * FROM autorizacao
        WHERE token = $1
        LIMIT 1
    `
    const token = headers?.authorization.replace("Bearer", "").trim()

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