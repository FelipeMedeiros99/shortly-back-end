import {Router} from "express";
import dotenv from "dotenv";

import db from "../Banco/index.js";

const RotaTeste = Router();
dotenv.config()

RotaTeste.get("/teste", async (req, res)=>{
    try{
        // await db.query(`
        //     INSERT INTO usuario(nome, email, senha) 
        //     VALUES ('Joao Augusto', 'joao@gmail.com', '123456')
        // `);
        
        const resposta = await db.query("select * from usuario")
        
        res.status(200).send(resposta.rows);

    }catch(e){
        res.status(404).send(`Erro ao tentar se conectar: ${e}`);
    }
});

export default RotaTeste;