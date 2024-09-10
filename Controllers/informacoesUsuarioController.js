import db from "../Banco/index.js";


export default async function informacoesUsuarioController(req, res, next){
    const {dadosUsuario} = req;
    const {idusuario: idUsuario} = dadosUsuario;
    let colecaoDeDados = {
        "id": "",
        "name": "",
        "visitCount": 0,
        "shortenUrl": []
    };
    const consultaBanco = `
        SELECT 
            u.id,
            u.nome AS name,
            l.url,
            l.shorturl,
            l.qtvisitas
        FROM links l
        JOIN usuario u
        ON l.idusuario = u.id
        WHERE l.idusuario = $1
        GROUP BY u.id, u.nome, l.id;
    `
    const valores = [idUsuario]

    try{        
        const respostaBanco = await db.query(consultaBanco, valores);
        const arrayDaResposta = respostaBanco.rows;
        arrayDaResposta.forEach((dados, index)=>{
            const {name, id, qtvisitas, url, shorturl} = dados;
            if(index===0){
                colecaoDeDados.name = name;
                colecaoDeDados.id = id;
            }
            colecaoDeDados.visitCount += qtvisitas;
            colecaoDeDados.shortenUrl.push({url, shorturl, qtvisitas});
        });
        res.status(200).send(colecaoDeDados);
    
    }catch(e){
        res.status(400).send(`Erro ao buscar dados: ${e}`);
    }
}
