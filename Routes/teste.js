import {Router} from "express";

import db from "../Banco/index.js";

const RotaTeste = Router();

RotaTeste.get("/teste", async (req, res)=>{
    try{
        console.log("solicitando requisição...")
        console.log("tentando conectar ao banco")
        await db.connect();
        console.log("solicitando dados")
        const resposta = await db.query(`SELECT * FROM usuarios`);
        console.log("enviando dados ao usuario")
        res.sendStatus(200).send(resposta);

    }catch(e){
        res.sendStatus(404).send(`Erro ao tentar se conectar: ${e}`);
    }finally{
        console.log("finalizando requisição")
        db.end();
    }
});

export default RotaTeste;