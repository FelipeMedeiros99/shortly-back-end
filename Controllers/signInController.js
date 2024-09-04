export default async function signInController(req, res){
   res.status(200).send(req.token);    
}