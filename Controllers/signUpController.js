import db from "../Banco/index.js"

export default async function signUpController(req, res){
    const {body:dados} = req;

    const inserirDadosQuery = `
            INSERT INTO usuario(nome, email, senha)
            VALUES($1, $2, $3)
        `
    try{ 
        await db.query(
            inserirDadosQuery, 
            [dados.nome, dados.email, dados.senha]
        );

        res.sendStatus(201)

    }catch(e){
        res.status(400).send(e?.detail||e);
    }
}