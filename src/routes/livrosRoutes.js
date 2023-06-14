import express  from "express";
import livroController from "../controllers/livrosControllers.js";

const router = express.Router();

router
.get('/livros',livroController.listarLivros)
.get('/livros/:id',livroController.listarLivroPorId)
.post('/livros',livroController.cadastrarLivros)
.put('/livros/:id',livroController.atualizarLivros)

export default router;
