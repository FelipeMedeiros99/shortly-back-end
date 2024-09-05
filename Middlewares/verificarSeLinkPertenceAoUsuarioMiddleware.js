import bcrypt from "bcrypt";


export default async function verificarSeLinkPertenceAoUsuarioMiddleware(req, res, next){
    const {dadosUsuarioBanco, body:dadosRecebidos} = req;
    const senhaInserida = dadosRecebidos.senha;
    const senhaBanco = dadosUsuarioBanco.senha;

    try{
        // validando senha inserida
        const validacaoSenha = await bcrypt.compare(senhaInserida, senhaBanco);
        if(validacaoSenha === false){
            return res.status(401).send("Senha inválida.")
        }
        next();


    }catch(e){
        res.status(400).send(`Erro ao tentar validar senha: ${e}`)
    }
}
