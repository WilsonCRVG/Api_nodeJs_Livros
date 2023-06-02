import  express  from 'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';

db.on("error",console.log.bind(console, 'Erro ao conectar'))
db.once("open",()=>{
    console.log('Conexão com Banco feita com Sucesso')
})

const app = express();

app.use(express.json())

routes(app);

//update
app.put('/livros/:id',(req,res)=>{
    let index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

//delete
app.delete('/livros/:id',(req,res)=>{
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index,1);
    res.send('Livro ${id} removido com sucesso')
})

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app;