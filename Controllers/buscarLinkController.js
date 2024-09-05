import db from "../Banco/index.js";


export default async function buscarLinkController(req, res){
    const {body, params, dadosLink} = req;

    try{
        res.status(200).send(dadosLink);

    }catch(e){
        res.status(401).send(`${e}`)
    }
}