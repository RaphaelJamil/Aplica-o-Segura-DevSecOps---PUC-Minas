const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicação Segura DevSecOps - PUC Minas');
});

app.listen(3000); 
  