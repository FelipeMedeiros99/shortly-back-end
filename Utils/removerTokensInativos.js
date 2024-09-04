import db from "../Banco/index.js"

export default async function removerTokensInativos(){
    const comandoDeletarTokens = `
        DELETE FROM autorizacao
        WHERE criadoem < NOW() - INTERVAL '15 minutes';
    `
    try{
        const tokensAtivos = await db.query(comandoDeletarTokens)
    
    }catch(e){
        console.log("erro ao tentar remover token: ", e)
    }
}
