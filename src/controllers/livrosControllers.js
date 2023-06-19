import livros from "../models/Livro.js";

class livroController {
    static listarLivros = async (req,res) => {
        try {
            let livrosResultado = await livros.find();
            res.status(200).json(livrosResultado)
        } catch (err) {
            res.status(500).json(err);
        }
    }


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
      

    static cadastrarLivros = async (req,res) =>{
        try {
        
            let livro = new livros(req.body);
           await livro.save()
            res.status(201).json(livro);
            
        }catch(err){
            res.status(500).json('Erro ao Cadastrar' + err)
        } 
    }
    
    static atualizarLivros = async (req, res) => {
        try {
          const id = req.params.id;
          
          await livros.findByIdAndUpdate(id, {$set: req.body});
      
          res.status(200).send({message: 'Livro atualizado com sucesso'});
        } catch (err) {
          res.status(500).send({message: err.message});
        }
      }
      
      
/*
    static atualizarLivros =  (req,res) =>{
        let id = req.params.id;

        livros.findByIdAndUpdate(id,{$set: req.body},(err)=>{
            if(!err){
                res.status(200).send({message:"Livro Atualizado com sucesso"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }
*/
}


export default livroController;