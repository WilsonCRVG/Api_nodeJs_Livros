import express  from "express";
import livroController from "../controllers/livrosControllers.js";

const router = express.Router();

router
.get('/livros',livroController.listarLivros)
.post('/livros',livroController.cadastrarLivros)


export default router;
