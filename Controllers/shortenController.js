import { nanoid } from "nanoid";
import db from "../Banco/index.js";


export default async function shortenController(req, res){
    const {dadosUsuario, body} = req;
    const {url} = body;
    const {idusuario} = dadosUsuario;
    const shortUrl = nanoid();
    const armazenarLink = `
        INSERT INTO links(idusuario, url, shorturl)
        VALUES($1, $2, $3)
        RETURNING shorturl;
    `;
    const valores = [idusuario, url, shortUrl]

    try{
        const respostaBanco = await db.query(armazenarLink, valores);
        res.status(201).send(respostaBanco.rows[0]);

    }catch(e){
        res.status(401).send(`Erro ao salvar link:  ${e}`)
    }
}