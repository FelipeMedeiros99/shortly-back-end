import {Router} from "express";

import db from "../Banco/index.js";

const RotaTeste = Router();

RotaTeste.get("/teste", async (req, res)=>{
    db.connect()
    try{
        console.log("solicitando dados")
        const resposta = await db.query(`SELECT * FROM usuario`);
        console.log("enviando dados ao usuario")
        res.status(200).send(resposta);

    }catch(e){
        res.status(404).send(`Erro ao tentar se conectar: ${e}`);
    }finally{
        console.log("finalizando requisição");
        db.end()
    }
});

export default RotaTeste;