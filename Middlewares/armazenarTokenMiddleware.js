export default async function armazenarTokenMiddleware(req, res, next){
    const {body:dadosUsuario} = req;
    try{
                
    }catch(e){
        res.status(400).send(`Erro ao armazenar token: ${e}`);
    }
}