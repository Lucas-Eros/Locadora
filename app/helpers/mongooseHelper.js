const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const dbURL = 'mongodb://localhost/nome_do_seu_banco_de_dados';

// Configuração da conexão
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

// Verificar se a conexão foi estabelecida com sucesso
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', () => {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

// Exportar a conexão para ser usada em outros lugares do seu aplicativo
module.exports = mongoose;
