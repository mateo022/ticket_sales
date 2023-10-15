const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/venderBoleto/:tipo', (req, res) => {
  const tipo = req.params.tipo;
  const resultado = controllers.venderBoleto(tipo, req.body.nombre);
  res.json(resultado);
});

router.post('/registrarAsistente', (req, res) => {
  const nombre = req.body.nombre;
  const resultado = controllers.registrarAsistente(nombre);
  res.json(resultado);
});

router.post('/ingresarConcierto/:idBoleto', (req, res) => {
  const idBoleto = req.params.idBoleto;
  const resultado = controllers.ingresarConcierto(idBoleto);
  res.json(resultado);
});

router.get('/ordenarAsistentes', (req, res) => {
  const asistentesOrdenados = controllers.ordenarAsistentes();
  res.json(asistentesOrdenados);
});

module.exports = router;
