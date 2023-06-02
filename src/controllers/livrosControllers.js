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

    static cadastrarLivros = (req,res) =>{
        try {
        
            let livro = new livros(req.body);
            livro.save()
            res.status(201).json(livro);
        
        }catch(err){
            
        } 
    }

}


export default livroController;