import express, {json} from 'express';
import cors from "cors";

// local
import RotaTeste from './Routes/teste.js';

const App = express();

App.use(json());
App.use(cors());
App.use(RotaTeste)

App.listen(5000, ()=>console.log("servidor funcionando"));
