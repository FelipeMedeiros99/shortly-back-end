import db from "../Banco/index.js";

export default async function armazenarTokenMiddleware(req, res, next){
    const {token, dadosUsuarioBanco} = req;
    const valores = [dadosUsuarioBanco.id, token]
    const comandoQuery = `
        INSERT INTO autorizacao(idusuario, token)
        VALUES ($1, $2)
    `
    try{
        await db.query(comandoQuery, valores)
        next();
    }catch(e){
        res.status(400).send(`Erro ao armazenar token: ${e}`);
    }
}