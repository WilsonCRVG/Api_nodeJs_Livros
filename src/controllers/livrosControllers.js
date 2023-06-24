import livros from "../models/Livro.js";

class livroController {
  //LISTAR
    static listarLivros = async (req,res) => {
        try {
            let livrosResultado = await livros.find();
            res.status(200).json(livrosResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

  //LISTAR POR ID
    static listarLivroPorId = async (req, res) => {
        try {
          const id = req.params.id;
      
          const livro = await livros.findById(id);
      
          if (!livro) {
            res.status(404).send({ message: 'Id do livro não localizado.' });
          } else {
            res.status(200).send(livro);
          }
        } catch (err) {
          res.status(400).send({ message: `${err.message} - Id do livro não localizado.` });
        }
      }
      
    
    
    //CADASTRAR
    static cadastrarLivros = async (req,res) =>{
        try {
        
            let livro = new livros(req.body);
            await livro.save()
            res.status(201).json(livro);
            
        }catch(err){
            res.status(500).json('Erro ao Cadastrar' + err)
        } 
    }
    
    //ATUALIZAR
    static atualizarLivros = async (req, res) => {
        try {
          const id = req.params.id;
          
          await livros.findByIdAndUpdate(id, {$set: req.body});
      
          res.status(200).send({message: 'Livro atualizado com sucesso'});
        } catch (err) {
          res.status(500).send({message: err.message});
        }
      }
    
    //DELETAR
    static deletarLivros = async (req,res)=>{
      try {
        const id = req.params.id;

        const livro = await livros.findByIdAndDelete(id)
        
        if (!livro) {
          res.status(404).send({ message: 'Id do livro não localizado.' });
        } else {
          res.status(200).send({ message: 'Livro excluído com sucesso.' });
        }
      } catch (err) {
        res.status(400).send({ message: `${err.message} - Erro ao excluir o livro.` });
      }
    }
      
}


export default livroController;