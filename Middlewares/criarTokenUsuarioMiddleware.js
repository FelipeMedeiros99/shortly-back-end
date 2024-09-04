// externos
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export default async function criarTokenUsuarioMiddleware(req, res, next){
    dotenv.config();
    const {dadosUsuarioBanco} = req;
    const {SENHA} = process.env;
    const segundos = 60;
    let copiaDadosUsuario = {...dadosUsuarioBanco};

    try{    

        delete copiaDadosUsuario.senha;

        // gerando token
        const token = jwt.sign(copiaDadosUsuario, SENHA, { expiresIn : segundos });
        
        //armazenando na reqs
        req.token = token;

        next();
 
    }catch(e){
        res.status(400).send(`Erro ao tentar criar token: ${e}`);
    }
}