import  express  from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

//.ENV
import dotenv from 'dotenv';
dotenv.config();

//Start Banco de Dados
db.on("error",console.log.bind(console, 'Erro ao conectar'))
db.once("open",()=>{
    console.log('Conexão com Banco feita com Sucesso')
})

//Server
const app = express();

//Mexer com Json
app.use(express.json())

//start rotas no server
routes(app);

export default app;