import express from "express";

import db from "../Banco";

const RotaTeste = express();

RotaTeste.get("/teste", async (req, res)=>{
    try{
        await db.connect();
        const resposta = await db.query(`SELECT * FROM usuarios`);
        res.sendStatus(200).send(resposta);

    }catch(e){
        res.sendStatus(404).send(`Erro ao tentar se conectar: ${e}`);
    }finally{
        db.end();
    }
});

export default RotaTeste;