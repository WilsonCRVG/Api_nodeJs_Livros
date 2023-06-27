import express  from "express";
import autoresController from "../controllers/autoresControllers.js";

const router = express.Router();

router
.get('/autor',autoresController.listarAutores)
.get('/autor/:id',autoresController.listarAutorPorId)
.post('/autor',autoresController.cadastrarAutores)
.put('/autor/:id',autoresController.atualizarAutores)
.delete('/autor/:id',autoresController.deletarAutores)

export default router;