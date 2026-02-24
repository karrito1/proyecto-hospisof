import express from "express";
import cors from "cors";

import usuarioRutas from "./src/routes/usuario/usuario.route.js";
import pacientesCTR from "./src/routes/paciente/paciente.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API Encendida");
});

// Montaje de rutas
app.use("/api/usuarios", usuarioRutas);
app.use("/api/pacientes", pacientesCTR);

export default app;
