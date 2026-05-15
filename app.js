const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicação Segura DevSecOps - PUC Minas');
});


function maliciosa(input) {
    eval(input); 
}

app.listen(3000); 
  