import autores from "../models/Autor.js";

class AutorController {
  //LISTAR
    static listarAutores = async (req,res) => {
        try {
            let autoresResultado = await autores.find();
            res.status(200).json(autoresResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }

  //LISTAR POR ID
    static listarAutorPorId = async (req, res) => {
        try {
          const id = req.params.id;
      
          const autor = await autores.findById(id);
      
          if (!autor) {
            res.status(404).send({ message: 'Id do autor não localizado.' });
          } else {
            res.status(200).send(autor);
          }
        } catch (err) {
          res.status(400).send({ message: `${err.message} - Id do autor não localizado.` });
        }
      }
      
    
    
    //CADASTRAR
    static cadastrarAutores = async (req,res) =>{
        try {
        
            let autor = new autores(req.body);
            await autor.save()
            res.status(201).json(autor);
            
        }catch(err){
            res.status(500).json('Erro ao Cadastrar' + err)
        } 
    }
    
    //ATUALIZAR
    static atualizarAutores = async (req, res) => {
        try {
          const id = req.params.id;
          
          await autores.findByIdAndUpdate(id, {$set: req.body});
      
          res.status(200).send({message: 'autor atualizado com sucesso'});
        } catch (err) {
          res.status(500).send({message: err.message});
        }
      }
    
    //DELETAR
    static deletarAutores = async (req,res)=>{
      try {
        const id = req.params.id;

        const autor = await autores.findByIdAndDelete(id)
        
        if (!autor) {
          res.status(404).send({ message: 'Id do autor não localizado.' });
        } else {
          res.status(200).send({ message: 'autor excluído com sucesso.' });
        }
      } catch (err) {
        res.status(400).send({ message: `${err.message} - Erro ao excluir o autor.` });
      }
    }
      
}


export default AutorController;