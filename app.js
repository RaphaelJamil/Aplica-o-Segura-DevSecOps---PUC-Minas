// Um servidor simples em Node.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicação Segura DevSecOps - PUC Minas');
});

// SIMULAÇÃO DE VULNERABILIDADE (Para o Semgrep detectar)
// Nunca use eval() com entrada de usuário!
function maliciosa(input) {
    eval(input); 
}

app.listen(3000);
