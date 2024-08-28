import express, {json} from 'express';
import cors from "cors"

const App = express();
App.use(json());
App.use(cors())

App.listen(5000, ()=>console.log("servidor funcionando"))