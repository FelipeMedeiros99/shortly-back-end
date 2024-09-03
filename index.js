import express, {json} from 'express';
import cors from "cors";

// local
import signUp from './Routes/signUp.js';

const App = express();

App.use(json());
App.use(cors());
App.use(signUp)

App.listen(5000, ()=>console.log("servidor funcionando"));
