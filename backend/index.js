// index.js
import app from "./app.js";
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`);
});
export default app;