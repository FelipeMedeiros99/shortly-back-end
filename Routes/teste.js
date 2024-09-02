import {Router} from "express";

import db from "../Banco/index.js";

const RotaTeste = Router();

RotaTeste.get("/teste", async (req, res)=>{
    try{
        await db.connect();
        console.log("solicitando requisição...")
        const resposta = await db.query(`SELECT * FROM usuarios`);
        res.sendStatus(200).send(resposta);

    }catch(e){
        res.sendStatus(404).send(`Erro ao tentar se conectar: ${e}`);
    }finally{
        console.log("finalizando requisição")
        db.end();
    }
});

export default RotaTeste;