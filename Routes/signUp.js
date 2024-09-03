// externo
import { Router } from "express";

// interno 
import validacaoDadosMiddleware from "../Middlewares/validacaoDadosMiddleware.js";
import db from "../Banco/index.js"
import filtroErros from "../Utils/filtroErros.js";

const signUp = Router();

signUp.post("/signup", validacaoDadosMiddleware, async (req, res)=>{
    const {body:dados} = req;
    try{ 
        const resposta = await db.query(`
            INSERT INTO usuario(nome, email, senha)
            VALUES($1, $2, $3)
        `, [dados.nome, dados.email, dados.senha]);

        res.status(201).send(resposta)

    }catch(e){
        res.status(400).send(e?.detail||e);
    }
})


export default signUp;