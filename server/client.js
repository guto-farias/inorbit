const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://docker:docker@localhost:5432/inorbit',
});

client.connect()
  .then(() => {
    console.log('Conexão bem-sucedida!');
    return client.end();
  })
  .catch((err) => {
    console.error('Erro na conexão:', err.stack);
  });