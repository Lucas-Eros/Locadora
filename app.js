const express = require('express');
const consign = require('consign');
const app = express();

// Configuração do consign para carregar todas as rotas a partir de um único arquivo

consign()
  .include('./app/Routes/routes.js') 
  .into(app);

// Defina uma rota principal para o Gateway
app.get('/', (req, res) => {
  res.send('Bem-vindo ao GatewayService');
});

// Inicialize o servidor na porta desejada
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
