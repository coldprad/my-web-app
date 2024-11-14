const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Mundo desde AWS ECS!');
});

app.listen(port, () => {
  console.log(`Aplicación web escuchando en el puerto ${port}`);
});
