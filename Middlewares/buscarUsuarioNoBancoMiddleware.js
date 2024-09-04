// local
import filtroErros from "../Utils/filtroErros.js";
import db from "../Banco/index.js";

export default async function buscarUsuarioNoBancoMiddleware(req, res, next){
    const {body:dados} = req;
    const email = dados.email.toLowerCase();
    const pesquisaUsuario = `
        SELECT * FROM usuario
        WHERE email = $1
    `;
    
    try{
        const dadosNoBanco = await db.query(pesquisaUsuario, [email]);
        const dadosUsuarioBanco = dadosNoBanco.rows[0];

        // se email não for encontrado
        if(dadosUsuarioBanco === undefined){
            return res.status(401).send('Usuário não encontrado.');
        };

        // armazenando na requisição
        req.dadosUsuarioBanco = dadosUsuarioBanco;
        next();

    }catch(e){
        const erro = filtroErros(e);
        res.status(401).send(erro||e);
    }
} 