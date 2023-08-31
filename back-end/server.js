const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/logbook-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Conexión a MongoDB establecida correctamente');
});

// Rutas
// Aquí deberás configurar las rutas y controladores para tu aplicación
// Por ejemplo, puedes crear una ruta para guardar una operación realizada por un residente en la base de datos

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
// server.js
// ... (código previo)

// Definir la ruta para guardar un registro médico
app.post('/api/medical-records', (req, res) => {
  // Aquí puedes procesar los datos recibidos en req.body y guardarlos en la base de datos
  // Luego, envía una respuesta al front-end
  res.json({ message: 'Registro médico guardado exitosamente' });
});

// ... (más rutas y controladores)
