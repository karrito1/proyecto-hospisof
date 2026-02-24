//crea una constante con el puerto local o el asignado en
// las variables globales de la aplicacion
import app from "./app.js";

const port = 3000 || process.env.port;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
