import criptografarSenha from "../Utils/criptografarSenha.js";

export default async function criptografarSenhaMiddleware(req, res, next){
    const {body:dados} = req;

    try{
        const senha = await criptografarSenha(dados.senha);
        dados.senha = senha;
        next()
    }catch(e){
        res.staus(400).send(`Erro ao criptografar senha: ${e}`)
    }
}